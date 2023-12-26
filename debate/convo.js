const GPT = require('./gpt');


class Conversation {
    constructor(initialPrompt){
        this.gpt = new GPT()
        this.initialPrompt = initialPrompt
        if(initialPrompt){
            this.conversationHistory = [{ role: 'system', content: initialPrompt }]
        } else {
            this.conversationHistory = []
        }
    }
    addUser(message, options = {}){
        this.conversationHistory.push({ role: 'user', content: message, dontPrune: options.dontPrune})
        return this;
    }
    addSystem(message, options = {}){
        this.conversationHistory.push({ role: 'system', content: message, dontPrune: options.dontPrune})
        return this;
    }
    addObserver(message, options = {}) {
        this.conversationHistory.push({ role: 'assistant', content: "<Thoughts and opinions on your response>: " + message, dontPrune: options.dontPrune})
        return this;
    }
    async compute(){
        return new Promise((resolve, reject) => {
            var filteredConversationHistory = this.conversationHistory.map(message => ({  role: message.role, content: message.content }));
            this.gpt.compute(filteredConversationHistory).then((answer) => {
                resolve(answer)
            }).catch((error) => {
                reject({
                    gpt_error: true,
                    error_code: error
                })
            })
        })
    }
}

module.exports = Conversation