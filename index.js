// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this app?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe how your application works.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe how to install your app.',
        },
        {
            type: 'input',
            name: 'useage',
            message: 'Describe what this app is used for.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How can others test your app',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can other developers contribute to this project'

        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you use?',
            choices: ['Apache', 'GNU GPLv3', 'MIT', 'Mozilla']
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },

    ]);
};



// TODO: Create a function to write README file
const init = () => {
    promptUser()
        .then((data) => writeFileAsync(`${data.title}.md`, generateMarkdown(data)))
        .then(() => console.log('README.md File Created.'))
        .catch((err) => console.error(err));
};

init();
