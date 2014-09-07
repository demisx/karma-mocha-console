This is a temporary repo to illustrate the problem reported in
https://github.com/karma-runner/karma-mocha/issues/47

To replicate the issue:

1. Clone the repo and run the unit test task:
  ```
git clone git@github.com:demisx/karma-mocha-console.git
cd karma-mocha-console
npm i
gulp unit
```
  **Note**, the console log messages written in the test don't show up in the terminal.

1. Now, comment out the `client` property in `karma-unit.conf.js` and re-run 
again the test task:
  ```
gulp unit
```
  You should see the console messages appear in the terminal window now.