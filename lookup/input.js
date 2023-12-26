async function getUserInput(question){
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
          
        readline.question(question, answer => {
            resolve(answer)
            readline.close();
        });
    })
}

module.exports = getUserInput