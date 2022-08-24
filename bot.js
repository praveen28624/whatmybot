const { Client, LocalAuth } = require('whatsapp-web.js');
const fsp = require('fs/promises');
const { ARQ } = require("arq-js");
var QRCode = require('qrcode');

const arq = new ARQ("https://arq.hamker.in","EZHTQV-JGRJVJ-FVSZND-YAEONX-ARQ");

const client = new Client({
  authStrategy: new LocalAuth(),
puppeteer: {
		args: ['--no-sandbox'],
	}
});

client.on('qr', qr => {
    QRCode.toDataURL(qr, function (err, url) {
  console.log("http://"+url)
})
});

client.on('ready', () => {
    console.log('Client is ready!');
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

client.on('message', async msg => {
 const chat = await msg.getChat()
let data = await fsp.readFile('bid.txt', { encoding: 'utf8' });
 var bid = data.split("\n");
 if ( bid.includes(msg.from)===false && msg.fromMe===false && chat.isGroup===false){
await chat.sendStateTyping();
let rs=await arq.translate(msg.body,"en");
let b=await arq.luna(rs["translatedText"],1947773913);
let nrs=await arq.translate(b,"si");
await msg.reply(nrs["translatedText"]);} 
else if (msg.body === "/stop" && msg.fromMe===true && chat.isGroup===false) {
await fsp.appendFile("bid.txt",msg.from+"\n")}
else if (msg.body === "/start" && msg.fromMe===true && chat.isGroup===false) {
const data = await fsp.readFile('bid.txt', { encoding: 'utf8' });
var bid = data.split("\n");
let position = bid.indexOf(msg.from);
bid.splice(position,1);
bid.splice (bid.length-1,1);
for(x in bid){await fsp.writeFile("bid.txt",bid[x]+"\n");}; }
else if () {msg.body === "/tstop" && msg.fromMe===true && chat.isGroup===false) {
await fsp.appendFile("bid.txt",msg.from+"\n");
await sleep(900000);
let data = await fsp.readFile('bid.txt', { encoding: 'utf8' });
var bid = data.split("\n");
let position = bid.indexOf(msg.from);
bid.splice(position,1);
bid.splice (bid.length-1,1);
for(x in bid){await fsp.writeFile("bid.txt",bid[x]+"\n");}; }
});

client.initialize();





