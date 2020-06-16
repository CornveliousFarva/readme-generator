const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./markdown.js");
const api = require("./api.js");

const writeFileAsync = util.promisify(fs.writeFile);

function require() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "title",
      message: "What the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "How would you describe your project?"
    },
    {
      type: "input",
      name: "tableOfContents",
      message: "Please layout a detailed table of contents."
    },
    {
      type: "input",
      name: "installation",
      message: "What was the process you took to install this program?"
    },
    {
      type: "input",
      name: "use",
      message: "What is the intended use of this program, who and what is it designed for?"
    },
    {
      type: "input",
      name: "license",
      message: "Who owns the license to this program, whose intellectual property does it belong to?"
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to the development of this program?"
    },
    {
      type: "input",
      name: "tests",
      message: "What type of tests did you run to test the functionality of this program?"
    },
    {
      type: "input",
      name: "gh-pic",
      message: "What is your GitHub picture?",

      type: "input",
      name: "gh-email",
      message: "What is your GitHub email?",
    }
  ]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! The name of my project is ${answers.name}</h1>
    <p class="lead">My project description is ${answers.location}.</p>
    <p>My table of contents consists of ${answers.location}</p>
    <p>Here are the steps I took in the development of this program ${answers.location}</p>
    <p>The owner of the license to this project is ${answers.location}</p>
    <p>The contributor(s) to this project was/were ${answers.location}</p>
    <p>The tests I ran to test the functionality of this program were ${answere.location}</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub email is ${answers.github}</li>
      <li class="list-group-item">My GitHub picture is ${answers.questions}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const gitHub = api.getUser(answers.Username)
    const markdown = generateMarkdown(answers);
    console.log(answers)
    console.log(gitHub)

    return writeFileAsync("ReadMe.md", markdown);
  })
  .then(function() {
    console.log("Successfully written to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });



