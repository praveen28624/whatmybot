const { Client, LegacySessionAuth } = require('whatsapp-web.js');
const fs = require('fs');
const fsp = require('fs/promises');

let session = JSON.parse("");

const client = new Client({
  authStrategy: new LegacySessionAuth({
    session: session
  })
});

client.on('message', async msg => {
  const chid = msg.from+"\n";
 
 b   f() 
        const media = await msg.downloadMedia()
        // do something with the media data here
    }
});

client.on('message', message => {
	if((message.body == '/tstop' || message.body == "/stop") && message.fromMe) {
		const logger = fs.createWriteStream('bid.txt', {
  flags: 'a'});
logger.write(message.from+"\n");
	}
});

client.on('message', messag => {
	if(messag.body === '/start' && messag.fromMe) {
		 const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    
 var bid = data.split("\n");
  let position = bid.indexOf(messag.from);
bid.splice(position,1);
bid.splice (bid.length-1,1);
const logge = fs.createWriteStream('bid.txt', {
  flags: 'w'});
for(x in bid){logge.write(bid[x]+"\n");};	}
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

client.on('message', async mssg => {
await sleep(900000);
if(mssg.body === '/start' && mssg.fromMe) {
		 let data = await fs.readFile('bid.txt', { encoding: 'utf8' });
 var bid = data.split("\n");
  let position = bid.indexOf(mssg.from);
bid.splice(position,1);
bid.splice (bid.length-1,1);
const logge = fs.createWriteStream('bid.txt', {
  flags: 'w'});
for(x in bid){await logge.write(bid[x]+"\n");};

});





