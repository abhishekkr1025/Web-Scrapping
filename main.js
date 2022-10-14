const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const request = require("request");
const cheerio = require("cheerio");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err)
    } else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let $ = cheerio.load(html);
    let anchorElement =  $('a[data-hover="View All Results"]');
    let link = anchorElement.attr("href");
    let fullLink = "https://www.espncricinfo.com" + link;
    // console.log(fullLink);
    getAllMatches(fullLink);

}

function getAllMatches(url){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err)
        } else{
            getMatchesLink(html);
        }
    }
}

function getMatchesLink(html){
    let $ = cheerio.load(html);
    let scoreCardElem =  $("a[data-hover='Scorecard']");
    for(let i = 0;i<scoreCardElem.length;i++){
        let scoreLink = $(scoreCardElem[i]).attr("href");
        let fullScoreLink = "https://www.espncricinfo.com" + scoreLink;
        console.log(fullScoreLink);
    }
}