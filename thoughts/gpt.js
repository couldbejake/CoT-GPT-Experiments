const OpenAI = require('openai')

const openai = new OpenAI({
    apiKey: "<OPEN AI KEY>"
});

class GPT {
    compute(conversationHistory){
        return new Promise(async (resolve, reject) => {
            openai.chat.completions.create({
                messages: conversationHistory,
                model: 'gpt-4-1106-preview', // requires GPT-4
            }).then((chatCompletion) => {
                resolve(chatCompletion.choices[0].message.content)
            }).catch((error) => {
                console.log(error)
                reject(error.error.code)
            })
        })
    }  
}
module.exports = GPT