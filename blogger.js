const axios = require("axios")

async function publishPost(title,content){

const url =
`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/`

await axios.post(url,
{
title:title,
content:content,
labels:["Telugu Trailer"]
},
{
headers:{
Authorization:`Bearer ${process.env.BLOGGER_TOKEN}`
}
})

}

module.exports = publishPost
