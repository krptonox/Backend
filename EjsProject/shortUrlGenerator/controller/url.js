const url=require('./model/url.js');

const nanoid = require('nanoid');
async function generateshortUrl(req,res){
    const acturl=req.body;
    if(!acturl) return res.status(400).json({msg:"Please provide the url"});
    const shortUrl = nanoid(7);
}await url.create({shortUrl,generatedUrl:acturl})

export {generateshortUrl}