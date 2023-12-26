var colors = require('colors');
 
const Conversation = require("./convo")
const getUserInput = require("./input");
const prompts = require('./prompts');
const Observer = require('./observer');

async function main(){
    var convo = new Conversation()

    while(true){

        var user_response = await getUserInput("> ")
        convo.addUser(user_response)
        console.log("User: " + user_response.magenta)

        convo.addUser(prompts.thoughts)

        var bot_response2 = await convo.compute()

        convo.addSystem(prompts.summary + bot_response2)

        var bot_response = await convo.compute()
        convo.addSystem(bot_response)
        console.log("GPT: " + bot_response.green)

    }



}

main()
