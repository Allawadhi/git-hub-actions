/******/ (() => { // webpackBootstrap
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// const core = require ('@actions/core');
// const core = require ('@actions/github');


async function run(){
    console.log('Hello, world!');
    // const GITHUB_TOKEN = core.input ('GITHUB_TOKEN');
    // const octokit = github.getOctokit(GITHUB_TOKEN);
    // const { context = {} } =github;
    // const { pull_request } = context.payload;

    // await octokit.issues.createComment({
    //     ...context.repo,
    //     issue_number: pull_request.number,
    //     body: 'Thank you for submitting a pull request!'
    // }); 
}
run();
module.exports = __webpack_exports__;
/******/ })()
;