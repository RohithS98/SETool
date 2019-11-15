# Visuatrics

Metric Visualiser is a chrome plug-in for GitHub that shows the source code metrics of source code files on GitHub in the browser.

## Requirements

1. Google Chrome
2. npm
3. WAMP/MAMP
4. Python 3
5. Flask
6. Virtual Environment

## Installation Instructions

1. Download the repository
2. Run ```> npm i``` in the folder through command line
3. Open chrome settings and click on extensions tab
4. Enable developer mode and select *load unpacked*
5. Select the downloaded folder
6. Place lizard_file.py in the virtual environment(for setup details see below)

## Instructions to host a python file on FLASK server
1. Download the latest Python from https://www.python.org/downloads/.
2. Mac OS uses default 2.x version out of box. To check whether, python has been installed successfully, try the following command
```
python3 -V
```
3. It will give the latest version of the python installed.
4. We will install FLASK in a virtualenv for more priveleges of user permission.
5. (For MAC OSX/Linux) To install virtualenv, open terminal and write 
```
sudo pip3 install virtualenv
virtualenv --version   
```
6. Create a folder in the home directory and move into that folder
```
mkdir ~/project
  cd ~/project
```
7. Now create a virtualenv
```
virtualenv myproject
  cd myproject
```
8. If you list the contents of the myproject directory, you will see that it has created several sub-directories, including a bin folder (Scripts on Windows) that contains copies of both Python and pip. The next step is to activate your new virtualenv.

For MAC/Linux:
```
source bin/activate
```
For Windows:
```
path\to\venv\Scripts\activate.bat
```
9. Installing FLASK in your virtualenv
```
pip install FLASK
```
10. Download the file, *lizard_file.py* into this directory.
11. Lizard tool has to be downloaded into the virtualenv. To install it, run the command
```
myproject/bin/pip install -I lizard
```
*-I* forces it to be installed in the virtualenv even when it is globally installed.

12. Now to run the *lizard_file.py* in the server, run the following command on terminal
```
python3 lizard_file.py
```
Then open browser with ```http://localhost:5000/tool1.py ```

13. The python tool is now running on the server.

## Usage Instructions

1. Go to any GitHub repository and navigate to the required code file.
2. Above the code, there will be a new button *Analyse*(see below). If it does not appear, then refresh the page.
![alt text](https://github.com/RohithS98/SETool/blob/master/pics/p1.PNG "Logo Title Text 1")
3. To see the visualizations of code metrics, and already existing tool, lizard is being used as the backend.
4. Lizard is written in python, and as the source code of the plugin is in JS, the python file needs to be called from the JS code using AJAX.
5. Before that, the lizard python file has to be run on a server for which FLASK is used.
6. To host that on FLASK server, first install FLASK in your home directory using the instrutions given in the above section.
7. Click on the analyze button to see the required results.

## To Do

1. Visualisation of metrics using graphs.
2. Adding difference between pull requests.
3. Extending languages and metrics available.

## References
1. [Lizard](https://github.com/terryyin/lizard)
