var colors = require('colors');
 
const Conversation = require("./convo")
const getUserInput = require("./input");
const prompts = require('./prompts');
const Observer = require('./observer');

async function main(){
    var convo = new Conversation()

    convo.addSystem(prompts.main)

    while(true){

        var user_response = await getUserInput("> ")
        convo.addUser(user_response)
        console.log("User: " + user_response.magenta)


        var convo2 = new Conversation()
        convo2.set(convo)
        convo2.addSystem(prompts.description)

        var description = await convo2.compute("gpt-3.5-turbo")
        console.log(description.red)
        convo.addSystem(description, {prunable: true})


        var bot_response = await convo.compute()
        convo.addSystem(bot_response)
        console.log("GPT: " + bot_response.green)

        convo.prune()
    





    }



}

main()
