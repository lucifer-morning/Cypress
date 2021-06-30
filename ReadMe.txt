Where to create testcases?
    
    In cypress->integration

How to create testcases?
    
    Use mocha test function "it" to create testcase.
    use cy to interact with browser.

How to execute testcases in cypress?
    
    There are 2 ways you can run testcases in cypress.
    
    1.Interactive Mode
        a.Run "npx cypress open" at root of project.
        b.Select your testcase which you want to run.
    
    2.Non Interactive Mode
        a.Run "npx cypress run" at root of project.(It will run all your testcases in Integration folder)

How to generate html reports?
    
    To generate HTML reports in cypress we would be using Mochawesome 
    in combination with mochawesome-report-generator and mochawesome-merge.
    
    Install all the node packages using the command:
        npm i --D mocha mochawesome mochawesome-merge mochawesome-report-generator

    When we run a testcase using "npx cypress run" a json will be created for the testcase in 'mochawesome-report' folder.
    
    In order to merge all json.
        Command:npx mochawesome-merge mochawesome-report/*.json > cypress-combined-report.json
    
    Using the json we can create html report.
        Command:npx marge --reportDir TestReport cypress-combined-report.json


