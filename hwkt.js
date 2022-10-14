const url = "https://www.espncricinfo.com/series/west-indies-in-india-2021-22-1278661/india-vs-west-indies-3rd-odi-1278678/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
request(url,cb);
function cb(err,response,html){
    if(err){
        console.log(err);
    } else{
        extractHTML(html);
    }
    
}

function extractHTML(html){
    let $ = cheerio.load(html);
    // full page search
    let content = $(".match-info.match-info-MATCH .team");
    // console.log($(content[0]).text())
    let wteam;
    for(let i = 0;i<content.length;i++){
        let hasClass = $(content[i]).hasClass("team-gray");
        if(hasClass==false){
           let teamNameElement = $(content[i]).find(".name-detail");
        //    console.log(teamName.text());
           wteam = teamNameElement.text().trim();
        }
        
    }
    
    let inningsArray = $(".card.content-block.match-scorecard-table>.Collapsible");
    // let htmlStr = "";
    for(let i = 0;i<inningsArray.length;i++){
        let teamNameElem = $(inningsArray[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        let hwkt = 0;
        let hwktName = "";
        let maxRun = 0;
        let mBatman = "";
        if(wteam==teamName){
            console.log(teamName);
            let tableElem = $(inningsArray[i]).find(".table.bowler");
            let tableElem2 = $(inningsArray[i]).find(".table.batsman");
            let allBowlers = $(tableElem).find("tr");
            let allBatsMen = $(tableElem2).find("tr");
           
            for(let k = 0;k<allBatsMen.length-3;k++){
               let allColsOfBatsMen = $(allBatsMen[k]).find("td");
            //    console.log($(allColsOfBatsMen[0]).text()," ",$(allColsOfBatsMen[2]).text());
               
               let batsman = $(allColsOfBatsMen[0]).text();
               let runs = $(allColsOfBatsMen[2]).text();
            //    console.log(runs);
               if(runs>maxRun){
                   maxRun = runs;
                   mBatman = batsman;
               }
            }
            console.log(mBatman,maxRun);
            for(let j = 0;j<allBowlers.length;j++){
                let allColsOfPlayer = $(allBowlers[j]).find("td");
                let playerName = $(allColsOfPlayer[0]).text();
                let playerWkt = $(allColsOfPlayer[4]).text();
               if(playerWkt>hwkt){
                   hwkt = playerWkt;
                   hwktName = playerName;
               }
               
            }
            console.log(hwktName,hwkt);
            console.log(`Winning team: ${wteam} and ${hwktName} took highest ${hwkt} wickets`);
            console.log(`Winning team: ${wteam} and ${mBatman} scored ${maxRun} runs`);
        }
    }
    // console.log(htmlStr);
    
}