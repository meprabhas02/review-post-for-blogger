require("dotenv").config()

const express = require("express")

const getTrailer = require("./youtubeRSS")
const generateDescription = require("./gemini")
const generateHTML = require("./template")
const publishPost = require("./blogger")

const app = express()

app.get("/post-trailer", async(req,res)=>{

try{

const trailer = await getTrailer()

const content = await generateDescription(trailer.title)

const html = generateHTML(trailer,content)

await publishPost(trailer.title,html)

res.send("Trailer posted successfully!")

}catch(err){

console.log(err)

res.send("Error posting")

}

})

app.listen(process.env.PORT,()=>{
console.log("Server running")
})
