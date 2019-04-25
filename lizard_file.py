from flask import Flask, request
import os
from pathlib import Path
import sys
import lizard

lizard_file=Flask(__name__)
#Applies analysis on the file content

#Valid extensions for applying code complexity analysis

def applyLizard(data_string, extension):
    file_name = "test."+extension
    analysis = lizard.analyze_file.analyze_source_code(file_name, data_string)
    return analysis

#Display File Data
def displayMetaData(fileInfo):
    print("File Name: ",fileInfo.filename)
    print("Lines of Code: ",fileInfo.nloc)
    print("Token Count: ",fileInfo.token_count)

#Display Function Data
def displayFunctionData(func):
	s1 = ""
	s1 += func.long_name + "\n"
	s1 += "\tLines of Code: "+str(func.nloc) + "\n"
	s1 +="\tToken Count: " + str(func.token_count) + "\n"
	s1 += "\tCyclomatic Complexity: "+str(func.cyclomatic_complexity)+"\n"
	return s1

#Displays the analysis results cleanly
def prettyPrint(analysis):
	s = "\n"
    #for file in analysis:
    #displayMetaData(analysis)
	s += "\nFunctions:\n"
	for num,fun in enumerate(analysis.function_list):
		s += str(num+1)+' . '
		s += displayFunctionData(fun)
		s += "\n"
	s += '\n\n'
	return s

@lizard_file.route("/tool1.py", methods = ['POST', 'GET'])
def test():

	'''extensions = {
	    '.c' : 'C',
	    '.cpp' : 'C++',
	    '.java' : 'Java',
	    '.py' : 'Python',
	    '.js' : 'JavaScript'
	}'''
	content=request.args.get('param1')
	extension=request.args.get('param2')

	# content = """def ApplyLizard(fileList):
	#      analysis = {}
	#      for i in fileList:
	#          analysis[i] = lizard.analyze_file(i)
	#      return analysis"""
	# extension ="py"

	return prettyPrint(applyLizard(content, extension))
	print("---------------------------------------------------------------------")
	print()

if __name__== '__main__':
	lizard_file.run(debug=True)
	#test()
