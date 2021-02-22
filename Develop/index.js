// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMd = require('./utils/generateMarkdown');

const writeAsyncFile = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is a short description of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you want to use for your project?',
      choices: [
          'MIT',
          'Unlicense',
          'Apache 2.0',
          'Mozilla Public License 2.0',
          'GNU v3',
          'BSD 3-Clause',
      ]
    },
    {
      type: 'input',
      name: 'install',
      message: 'What command do you want to use to install dependencies? (default is npm i)',
      default: 'npm i',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be used to run tests? (default is npm run tests)',
      default: 'npm run test',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What should the user know about using your repository?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'What should the user know about contributing to the repository?',
    },
]);

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return writeAsyncFile (fileName, data);
}

// TODO: Create a function to initialize app
const init = async () => {
        try {
            console.log("Hello! This is a README file generator. Please answer the following questions to generate a README file:")

            const answers = await questions();
            
            const readmeContent = generateMd(answers);
            
            await writeToFile('./output/README.md', readmeContent);
            
            console.log('README created in output folder.');
        } catch (err) {
            console.error('Error creating README.');
            console.log(err);
        }
}


// Function call to initialize app
init();
