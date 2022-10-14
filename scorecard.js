const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-52nd-match-1216502/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    } else{
        getMatchDetails(html);
    }
}

function getMatchDetails(html){
   //venue date opponent result runs balls fours sixes sr
//    ipl
//       team 
//         player 
//           runs balls fours sixes opponent venue sr
    //venue date result
    //.header-info .description -> 52nd Match (N), Sharjah, Oct 31 2020 ->venue date
   // .match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span -> result
   
   let $ = cheerio.load(html);
   let dateArray =  $(".header-info .description");
   let resultArr = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span");
   let strings = dateArray.text().split(',');
   let date = strings[2].trim();
   let venue = strings[1].trim();
//    console.log(date)
//    console.log(venue)
//    console.log(resultArr.text());
let inningsArr = $(".card.content-block.match-scorecard-table>.Collapsible");
// let htmlString = "";
   for(let i = 0;i<inningsArr.length;i++){
      


   }

   
 }