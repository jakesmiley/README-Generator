// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the project Title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a Description of your project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a Description for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "If applicable, what steps are required to install your project?",
    },
    {
        type: 'input',
        name: 'Usage',
        message: "If applicable, please provide instructions for using your project."
    },
    {
        type: 'list',
        name: 'license',
        message: "Select a license for your project.",
        choices: [
            'MIT License',
            'GNU GPLv3',
            'GNU AGPLv3',
            'Apache License 2.0',
            'ISC License',
            'Mozilla Public License 2.0',
            'Boost Software License 1.0',
            'The Unlicense']
    },
    {
        type: 'input',
        name: 'badge',
        message: "If applicable, paste badge code."
    },
    {
        type: 'input',
        name: 'contributing',
        message: "If you would like for other developers to contribute to your project, please specify how you would like for them to do so."
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please write tests for your applicaitons and examples on how to run them."
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
