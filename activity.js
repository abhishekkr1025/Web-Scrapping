const cheerio = require("cheerio");
const request = require("request");
const url = "https://www.espncricinfo.com/series/west-indies-in-india-2021-22-1278661/india-vs-west-indies-2nd-odi-1278677/ball-by-ball-commentary";
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    } else{
        handle(html);
    }
}

function handle(html){
    let $ = cheerio.load(html);
    let elements = $(".match-comment-wrapper .match-comment-long-text");
    let text = $(elements[0]).text();
    let text1 = $(elements[1]).text();
    let text2 = $(elements[2]).text();
    console.log("last ball commentry: ",text);
    console.log("secondlast ball commentry: ",text1);
    console.log("third last ball commentry: ",text2);

}