const API = 'https://api.github.com/repos/'
const LI_TAG_ID = 'github-repo-size'
const GITHUB_TOKEN_KEY = 'x-github-token'

const storage = chrome.storage.sync || chrome.storage.local

var repoName
var branchName
var filePath

let githubToken

const isValidFile = (uri) => {
  const repoURI = uri.split('/')

  return repoURI.length >= 5 && repoURI[2] === 'blob'
}

const getRepoInfoURI = (uri) => {
  const repoURI = uri.split('/')

  return repoURI[0] + '/' + repoURI[1]
}

function getRepoBranchURI(uri){
	uri1 = uri.split('/')
	return uri1[3]
}

function getRepoFileURI(uri){
	uri1 = uri.split('/').slice(4)
	return uri1.join('/')
}


const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  throw Error(`GitHub returned a bad status: ${response.status}`)
}

const parseJSON = (response) => {
  if (response) {
    return response.json()
  }

  throw Error('Could not parse JSON')
}

const getAPIData = (callback) => {

  const request = new Request(API + repoName + '/contents/' + filePath + '/?ref=' + branchName)
  console.log(request)

  fetch(request)
    .then(checkStatus)
    .then(parseJSON)
    .then(callback)
    .catch(e => console.error(e))
}

function getPullNo(text){
  var l = text.trim().split('/')
  return l[l.length-1]
}

const getFileName = (text) => text.trim().split('/')[0]

function a(response){
  var code = atob(response['content'])
}

function click1(){
  console.log(repoName, branchName, filePath)
  getAPIData(a)
}

const checkForRepoPage = () => {
  let repoURI = window.location.pathname.substring(1)
  repoURIp = repoURI.endsWith('/') ? repoURI.slice(0, -1) : repoURI
  console.log(repoURI)
  repoName = getRepoInfoURI(repoURIp)
  branchName = getRepoBranchURI(repoURIp)
  filePath = getRepoFileURI(repoURIp)
  if (isValidFile(repoURIp)) {
    const ns = document.querySelector('body > div.application-main > div > main > div.container-lg.new-discussion-timeline.experiment-repo-nav.p-responsive > div.repository-content > div.d-flex.flex-items-start.mb-3.flex-column.flex-md-row > div')
    ns.innerHTML += "<button style=\"height=5px;width=5px;\" class=\"infoButtonFiles btn btn-sm BtnGroup-item\">Analyze</button>"
    const b1 = document.querySelector('body > div.application-main > div > main > div.container-lg.new-discussion-timeline.experiment-repo-nav.p-responsive > div.repository-content > div.d-flex.flex-items-start.mb-3.flex-column.flex-md-row > div > button')
    b1.addEventListener("click",click1)
  }
}

storage.get(GITHUB_TOKEN_KEY, function (data) {
  githubToken = data[GITHUB_TOKEN_KEY]

  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (changes[GITHUB_TOKEN_KEY]) {
      githubToken = changes[GITHUB_TOKEN_KEY].newValue
    }
  })

  document.addEventListener('pjax:end', checkForRepoPage, false)

  checkForRepoPage()
})
///