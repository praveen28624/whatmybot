const { Client, LegacySessionAuth } = require('whatsapp-web.js');
const fs = require('fs');

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
		 let data =fs.readFileSync('bid.txt', 'utf8');
 var bid = data.split("\n");
  let position = bid.indexOf(messag.from);
bid.splice(position,1);
bid.splice (bid.length-1,1);
const logge = fs.createWriteStream('bid.txt', {
  flags: 'w'});
for(x in bid){logge.write(bid[x]+"\n");};	}
});




