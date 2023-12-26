var prompts = {
    main: `
        IMPORTANT:
            Reply to the user using knowledgable provided by a second LLM.   
            Do not use any of the information provided by the second LLM directly, only use this knowledge as a referesher, and decide upon your own response. 
            In your own response, use the same length of text that you would decide to reply with, if the second LLM prompt had not been provided.
    `,
    description: `
        IMPORTANT: Do not reply to the user.
        Your job is now to provide a lengthy high-level description of what the user is asking.
        - Describe what the user is referring to/talking about.
        - Any other relevant information
        - Notes on the user's responses
    `
}

module.exports = prompts;