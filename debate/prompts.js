var prompts = {
    thoughts: `
        I'm now asking you to list your "thoughts".

        Thoughts will be provided via a series of “considerations”.

        Your first consideration will pose a statement regarding the question.

        Each "consideration" will contain views, opinions, then will pose a question.

        Each subsequent consideration will be known as a "continuation"” consideration.

        The continuation consideration should have a strong relation to the previous consideration, and be as a result of the previous "thought" (consideration).
        When writing a continuation consideration, it is imperative to hypothetise it in relation to it's numerical previous consideration.
        Each consideration should be novel, and composed of an unusual/new combination of sentences/words/concepts.

        Important:

        - Only provide a single initial consideration. Each consideration should be grouped in relation to the intial consideration.

        Such that:

        1) The sky is black.
        2) The sky is black because it is dark.
        3) It is dark because the sun is behind the earth.
    `,
    summary: `
        You should summarise the following information into one coherent message, as a reply to the user's message.
        Feel free to add/remove/change parts of the text to improve the response to the user.


    `
}

module.exports = prompts;
