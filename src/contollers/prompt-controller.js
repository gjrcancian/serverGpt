const openai =require("../config/openai")
const inputPrompt = require("../models/input-prompt")

module.exports={
    async sendText(req, res){
        const openaiAPI = openai.configuration()
        const inputModel = new inputPrompt(req.body)

    try{
        const response=  await openaiAPI.createCompletion(
            openai.textCompletion("sonho meu ")
        )
        return res.status(200).json({
            success:true,
            data: response.data.choices[0].text
        })
    }catch(error){

        return res.status(400).json({
            success: false,
            error: error.response ? error.response : "there um erro no server"
        })
    }
}

     
}