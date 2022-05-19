const { Client, LegacySessionAuth } = require('whatsapp-web.js');
const fs = require('fs');

let session = JSON.parse("");
const logger = fs.createWriteStream('new.txt', {
  flags: 'a'});
const filePath = 'bid.txt';
const fd = fs.openSync(filePath, 'w');

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



