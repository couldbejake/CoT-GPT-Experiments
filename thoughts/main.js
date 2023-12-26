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

        var observer = new Observer(convo.conversationHistory)
        var observation = await observer.observe()
        console.log(observation.blue)
        convo.addSystem(observation)

        var bot_response = await convo.compute()
        convo.addSystem(bot_response)
        console.log("GPT: " + bot_response.green)
    

        var observer = new Observer(convo.conversationHistory)
        var observation = await observer.observe()
        console.log(observation.blue)
        convo.addSystem(observation)



    }



}

main()
