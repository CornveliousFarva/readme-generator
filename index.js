const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  }

]




