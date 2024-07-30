## Repository description

This is the test task implementation. 
For implementation I was using Page Object pattern. 
Test framework is written with `Cucumber` and `webdriverIO`.
Ci has been added - `Github actions`

Current version of the project is done only as a test task and can be run only in Chrome. It is possible to run it with other browsers, but you will need to install packages by yourself.

After each execution Cucumber Html report is generated automatically. 
`reports` folder contains example of the report

## Environment setup
**Precondition:**
1) verify that you have node installed. 
run the following command in the terminal: `node -v`
Expected that you will see currently installed version of the node
2) verify that git is installed. 
Run the following command in terminal: `git -v`


**Steps**
1) Create new Folder on your computer
2) Clone project into the created folder 
3) In the folder with project from the terminal run command: `npm i`


## Test execution
 File `packages.json` contains 2 available scripts which might be used for test execution: 
 * `wdio` - executes tests in chrome with normal display size
 * `testsMobileBrowser` - executes test in chrome browser with window size - 390,844(iPhone Pro screen size) to mimic mobile browser



