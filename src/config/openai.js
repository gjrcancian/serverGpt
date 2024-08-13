const { Configuration, OpenAIAPI} = require('openai')

module.exports = class openai{
    static configuration(){
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })
        return new OpenAIAPI(configuration)
    }

    static textCompletion({prompt}){
        return{

        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": [
              {
                "type": "text",
                "text": `${prompt}`
              }
            ]
          }
        ],
        temperature: 1,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        response_format: {
          "type": "text"
        },
    }
    }
}

 
