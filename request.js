const request = require('request');
const cheerio = require("cheerio");
request('https://www.espncricinfo.com/series/west-indies-in-india-2021-22-1278661/india-vs-west-indies-2nd-odi-1278677/full-scorecard', cb);
function cb(error,response,html){
      if(error){
          console.log(error); //print the error if occured
      } else{
        handleHTML(html);
      }
      
}
function handleHTML(html){
    let selTool = cheerio.load(html);
    let contentArray = selTool(".playerofthematch-name");
    for(let i=0;i<contentArray.length; i++){
        let data =  selTool(contentArray[i]).text();
        console.log("Player of the Match: ",data);
    }
    // console.log(v);

}

