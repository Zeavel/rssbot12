const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();



var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("." + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}


client.on('message', message => {
    if(message.content.includes("-rss"))
    {
        var url = message.content.substring(5)
        console.log(url)
        var cheerio = require('cheerio');
        var request = require('request');

        request(url, function (error, response, body) {
          if (!error) {
              
            var $ = cheerio.load(body)
            var name = $("body > div.content > div > div:nth-child(3) > div > h1").text()
         
           
       
    
message.channel.send("-apl "+name)
        
        
        
        
      
        }})
    }
    if(message.content.includes("info"))
    {
       
        var prefix = message.content.split("info")[0]
        if(prefix != "")
        {
            client.guilds.get("351491707554103296").channels.get("564800728061706261").fetchMessage("565411651344400384")
            .then(ms=>{
if(ms.content.includes(prefix))
{
    var num = ms.content.split("darud").indexOf(prefix)
    client.guilds.get("351491707554103296").channels.get("564800728061706261").fetchMessage("565411537486086144")
    .then(mse=>{
var url = mse.content.split("darud")[num]
var cheerio = require('cheerio');
var request = require('request');
console.log(url)
request(url, function (error, response, body) {
  if (!error) {
      
    var $ = cheerio.load(body)
    var name = $("body > div.content > div > div:nth-child(3) > div > h1").text()
    var status = $("body > div.content > div > div:nth-child(3) > div > div.row > div.col-12.col-md-7 > table > tbody > tr:nth-child(3) > td:nth-child(2) > button").text()
    var playerss = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
    var map = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(8) > td:nth-child(2) > strong").text()
    var regsin = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(9) > td:nth-child(2)").text()
     var mapimg;
    var mapimg2;
   console.log(body)
    if($("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src") != undefined)
    {
        mapimg = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src").replace(/[']/g, "%27").replace(/[ ]/g,"%20")
        mapimg2= "https://squad-servers.com"+mapimg  
    }
    else
    {
        mapimg2 = ''
    }
    var players = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(6) > div > div").text()//.replace(/[,]/g,"\n")
    var location = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").text()
   var color;
   if(status === "Online")
   {
       color = "#00FF00"
   }
   else
   {
       color = "#FF0000"
   }

    const Discord = require('discord.js')
    const embed = new Discord.RichEmbed()
    .setThumbnail("https://cdn.discordapp.com/attachments/486990358455123978/523920686570405898/2_2.png")
    .setTitle(name)
    .setImage(mapimg2)
    
    .addField("Players", "**"+playerss+"**")
    .addField("Status", "**"+status+"**")
    .addField("Location", "**"+location+"**")
    .addField("Map", "**"+map+"**")
    .addField("Registered since", "**"+regsin+"**")
    .setColor(color)
    .setFooter(players)
    message.channel.send({embed})





}})
    })
}
            })
          
        }
      
    }
   if(commandIs("info-", message))
   { 
    
    var cheerio = require('cheerio');
    var request = require('request');
  var urle = "https://squad-servers.com/server/7507/"
    request(urle, function (error, response, body) {
      if (!error) {
          
        var $ = cheerio.load(body)
        var name = $("body > div.content > div > div:nth-child(3) > div > h1").text()
        var status = $("body > div.content > div > div:nth-child(3) > div > div.row > div.col-12.col-md-7 > table > tbody > tr:nth-child(3) > td:nth-child(2) > button").text()
        var playerss = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
        var map = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(8) > td:nth-child(2) > strong").text()
        var regsin = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(9) > td:nth-child(2)").text()
         var mapimg;
        var mapimg2;
       
        if($("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src") != undefined)
        {
            mapimg = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src").replace(/[']/g, "%27").replace(/[ ]/g,"%20")
            mapimg2= "https://squad-servers.com"+mapimg  
        }
        else
        {
            mapimg2 = ''
        }
        var players = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(6) > div > div").text()//.replace(/[,]/g,"\n")
        var location = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").text()
       var color;
       if(status === "Online")
       {
           color = "#00FF00"
       }
       else
       {
           color = "#FF0000"
       }

        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/486990358455123978/523920686570405898/2_2.png")
        .setTitle(name)
        .setImage(mapimg2)
        
        .addField("Players", "**"+playerss+"**")
        .addField("Status", "**"+status+"**")
        .addField("Location", "**"+location+"**")
        .addField("Map", "**"+map+"**")
        .addField("Registered since", "**"+regsin+"**")
        .setColor(color)
        .setFooter(players)
        message.channel.send({embed})
    
    
    
    
  
    }})
   }
  if(commandIs("info", message))
   { 
       if(message.content===".info")
       {
             var cheerio = require('cheerio');
    var request = require('request');
  var urle = "https://squad-servers.com/server/7998/"
    request(urle, function (error, response, body) {
      if (!error) {
          
        var $ = cheerio.load(body)
        var name = $("body > div.content > div > div:nth-child(3) > div > h1").text()
        var status = $("body > div.content > div > div:nth-child(3) > div > div.row > div.col-12.col-md-7 > table > tbody > tr:nth-child(3) > td:nth-child(2) > button").text()
        var playerss = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(4) > td:nth-child(2) > strong").text().trim()
        var map = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(8) > td:nth-child(2) > strong").text()
        var regsin = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(9) > td:nth-child(2)").text()
         var mapimg;
        var mapimg2;
       
        if($("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src") != undefined)
        {
            mapimg = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-5 > div:nth-child(3) > img").attr("src").replace(/[']/g, "%27").replace(/[ ]/g,"%20")
            mapimg2= "https://squad-servers.com"+mapimg  
        }
        else
        {
            mapimg2 = ''
        }
        var players = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(6) > div > div").text()//.replace(/[,]/g,"\n")
        var location = $("body > div.content > div > div:nth-child(3) > div > div:nth-child(4) > div.col-12.col-md-7 > table > tbody > tr:nth-child(5) > td:nth-child(2) > a").text()
       var color;
       if(status === "Online")
       {
           color = "#00FF00"
       }
       else
       {
           color = "#FF0000"
       }

        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/486990358455123978/523920686570405898/2_2.png")
        .setTitle(name)
        .setImage(mapimg2)
        
        .addField("Players", "**"+playerss+"**")
        .addField("Status", "**"+status+"**")
        .addField("Location", "**"+location+"**")
        .addField("Map", "**"+map+"**")
        .addField("Registered since", "**"+regsin+"**")
        .setColor(color)
        .setFooter(players)
        client2.guilds.get(message.guild.id).channels.get(message.channel.id).send({embed})
       
    
    
    
    
  
    }})
       }
    
   }
  });

client.login(process.env.BOT_TOKEN);
