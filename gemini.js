const { GoogleGenerativeAI } = require("@google/generative-ai")

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function generateDescription(title){

const model = genAI.getGenerativeModel({ model:"gemini-pro" })

const prompt = `
Write a short blog introduction for this Telugu movie trailer:

${title}

Include:
Introduction
Trailer highlights
Why fans are excited
`

const result = await model.generateContent(prompt)

return result.response.text()

}

module.exports = generateDescription
