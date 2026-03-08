function generateHTML(trailer,content){

return `

<h1>${trailer.title}</h1>

<div style="text-align:center;margin:20px 0;">

<iframe width="100%" height="450"
src="https://www.youtube.com/embed/${trailer.videoId}"
frameborder="0"
allowfullscreen>
</iframe>

</div>

<div style="background:#fff;border:1px solid #eee;
border-radius:10px;padding:20px;margin-top:20px;">

${content}

</div>

`

}

module.exports = generateHTML
