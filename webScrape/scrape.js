const cheerio = require('cheerio');
const request = require('request');

request('https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States', (error, response, html)=>{
if(!error && response.statusCode == 200){
//console.log(html);
 const $ = cheerio.load(html);

 const siteHeading = $('.p-personal-label');

 //console.log(siteHeading.html());
 //console.log(siteHeading.text());
const output = siteHeading.find('h3').text();
console.log(output);
}      
});
phone Uint8Array