const GPT = require('./gpt');
const prompts = require('./prompts');

class Observer {
    constructor(conversationHistory){
        this.gpt = new GPT()
        this.conversationHistory = [{ role: 'system', content: prompts.observer }, ...conversationHistory, { role: 'system', content: '[END OF OUTPUT]' }]
    }
    async observe(){
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

module.exports = Observer