const API = 'https://api.github.com/repos/'
const LI_TAG_ID = 'github-repo-size'
const GITHUB_TOKEN_KEY = 'x-github-token'
const token = 'a489098f15abf4b4832f4bb2677703618445ae30'

const storage = chrome.storage.sync || chrome.storage.local

var repoName
var branchName
var filePath
var fileType
//Allowed extensions
var extensions = {
    '.c' : 'C',
    '.cpp' : 'C++',
    '.java' : 'Java',
    '.py' : 'Python',
    '.js' : 'JavaScript'
};

let githubToken

const parseJSON = (response) => {

const getAPIData = (callback) => {

  const headerObj = {
    'User-Agent': 'request'
  }
  headerObj['Authorization'] = 'token ' + token

  const request = new Request(API + repoName + '/contents/' + filePath + '/?ref=' + branchName,{
    headers: new Headers(headerObj)
  })
  const request = new Request(API + repoName + '/contents/' + filePath + '/?ref=' + branchName)
  console.log(request)

  fetch(request)
function getRepoExtensionURI(uri){

const getFileName = (text) => text.trim().split('/')[0]

//function to get the source code metrics from the metrics tool--(newly added)
function getMetrics(content) {
    return $.ajax({
        type: "GET",
        url:"http://localhost:5000/lizard_file.py",
        data: { param: content },
        success:function(response) {
        console.log(response);
        },
        error: function(response){
            return console.error(response);
        }
    });
}

//This function gets the content of the concerned file and stores in the variable 'code'.
function getStats(response){
  var code = atob(response['content'])
  console.log(code)
  getMetrics(code) //newly added
}

function click1(){
  console.log(repoName, branchName, filePath, fileType)
  getAPIData(getStats)
    if (fileType in extensions){  // checking for valid extensions--(newly added)
        getAPIData(getStats)
    }
    else{
        console.log("Unallowed extension. Visualization not available.")
    }
}

const checkForRepoPage = () => {
storage.get(GITHUB_TOKEN_KEY, function (data) {

  checkForRepoPage()
})
/// 

