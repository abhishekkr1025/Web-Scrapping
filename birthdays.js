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
    let teams = $(".match-info.match-info-MATCH .team");
    let wteam = "";
    for(let i = 0;i<teams.length;i++){
        let hasClass = $(teams[i]).hasClass("team-gray");
        let teamName  = $(teams[i]).find(".name-detail");
        teamsName = teamName.text();
        if(hasClass==false){
           wteam = teamName.text().trim();
        //    console.log(wteam);
        }
        
    }
    let innings = $(".card.content-block.match-scorecard-table>.Collapsible");
    for(let i = 0;i<innings.length;i++){
       let allBatsMenTable = $(innings[i]).find(".table.batsman");
       let allBatsMen = $(allBatsMenTable).find("tr");
       for(let j = 0;j<allBatsMen.length;j++){
           let allColsOfBatsMen = $(allBatsMen[j]).find("td");
           let isBatsMan = $(allColsOfBatsMen[0]).hasClass("batsman-cell");
           if(isBatsMan==true){
               let batsManName = $(allColsOfBatsMen[0]).find("a").attr("href");
               let Batsman = $(allColsOfBatsMen[0]).text();
               let fullLink = "https://www.espncricinfo.com"+batsManName;
               getBirthDays(fullLink,Batsman,teamsName);
            //    console.log(fullLink)
           }
       }
       
    }

    
}

function getBirthDays(url,name,team){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        } else{
            // console.log()
           extractBirthDay(html,name,team);
        }
    }

    
}

function extractBirthDay(html,name,team){
    let $ = cheerio.load(html);
    let detailsArray  = $(".player-card-description");
    let birthday = $(detailsArray[1]).text();
    // console.log(`${name} plays for ${team} and was born on ${birthday}`);
    // console.log(birthday)
}