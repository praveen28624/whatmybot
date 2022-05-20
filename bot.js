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





