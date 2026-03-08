const axios = require("axios")
const xml2js = require("xml2js")

async function getTrailer(){

const url =
"https://www.youtube.com/feeds/videos.xml?channel_id=UC3jMepkLKF8y4iiwWmAB3RA"

const res = await axios.get(url)

const data = await xml2js.parseStringPromise(res.data)

const video = data.feed.entry[0]

return {

title: video.title[0],
videoId: video["yt:videoId"][0]

}

}

module.exports = getTrailer
