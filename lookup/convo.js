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
        this.conversationHistory.push({ role: 'user', content: message, ...options})
        return this;
    }
    addSystem(message, options = {}){
        this.conversationHistory.push({ role: 'system', content: message, ...options})
        return this;
    }
    addObserver(message, options = {}) {
        this.conversationHistory.push({ role: 'assistant', content: "<Thoughts and opinions on your response>: " + message, ...options})
        return this;
    }
    set(convo) {
        this.conversationHistory = convo.conversationHistory;
    }
    prune(){
        this.conversationHistory = this.conversationHistory.filter(message => !message.prunable);
    }
    async compute(model){
        if(!model){model = "gpt-4-1106-preview"}
        return new Promise((resolve, reject) => {
            var filteredConversationHistory = this.conversationHistory.map(message => ({  role: message.role, content: message.content }));
            this.gpt.compute(filteredConversationHistory, model).then((answer) => {
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