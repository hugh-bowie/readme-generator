
const inquirer = require('inquirer');
const fs = require('fs');
const genrateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Whats your full name? (Required)',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('This app needs your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this application? (Required)',
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please title this application');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a brief describe for this application: (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Any description is necessary');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What installations are needed for this application? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Some installation instructions are necessary');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'useage',
            message: 'Please write useage instructions or examples: (Required)',
            validate: useageInput => {
                if (useageInput) {
                    return true;
                } else {
                    console.log('Some useage instructions are necessary');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please advise best ways for developers to contribute to this application (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please input some contribution tips for other developers to contribute');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please advise testing instructions for this application (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Anything at all will suffice');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for this application (Required)',
            choices: ['Apache', 'Boost', 'GNU GPLv3', 'MIT', 'Mozilla'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username (Required)',

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',

        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
    ]);
};

questions()
    .then((readMeData) => {
        return generateMarkdown(readMeData);
    })
    .then((md) => {
        return writeToFile('./dist/README.md', md);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve('README.md has been created with a little magic.');
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
