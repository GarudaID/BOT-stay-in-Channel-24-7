
██╗░░██╗░█████╗░██╗██╗░░██╗██╗███╗░░██╗
██║░██╔╝██╔══██╗██║╚██╗██╔╝██║████╗░██║
█████═╝░███████║██║░╚███╔╝░██║██╔██╗██║
██╔═██╗░██╔══██║██║░██╔██╗░██║██║╚████║
██║░╚██╗██║░░██║██║██╔╝╚██╗██║██║░╚███║
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝
////////////////////////////////////////////////////////////////////////
const { TOKEN, CHANNEL_ID, SERVER_ID, YT_LINK } = require("./config.json");
const { STATUS } = require("./status.json")
const discord = require("discord.js");
const client = new discord.Client();
const ytdl = require('ytdl-core');
const { keep_alive } = require("./keep_alive");

client.on('ready', async () => {
  console.log("Started streaming " + (YT_LINK) + ` as ${client.user.tag}`);
  client.user.setActivity((STATUS),{ type: 'STREAMING',
  url: 'https://zone-id.my.id/'});
  let channel = client.channels.cache.get(CHANNEL_ID) || await client.channels.fetch(CHANNEL_ID)

  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(YT_LINK))
})
////////////////////////////////////////////////////////
        
██╗░░██╗░█████╗░██╗██╗░░██╗██╗███╗░░██╗
██║░██╔╝██╔══██╗██║╚██╗██╔╝██║████╗░██║
█████═╝░███████║██║░╚███╔╝░██║██╔██╗██║ if u use this code please tag KaiXin#5925
██╔═██╗░██╔══██║██║░██╔██╗░██║██║╚████║
██║░╚██╗██║░░██║██║██╔╝╚██╗██║██║░╚███║
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚═╝╚═╝░░╚══╝
////////////////////////////////////////////////////////

setInterval(async function() {
  if(!client.voice.connections.get(SERVER_ID)) {
    let channel = client.channels.cache.get(CHANNEL_ID) || await client.channels.fetch(CHANNEL_ID)
    if(!channel) return;

    const connection = await channel.join()
    connection.play(ytdl(YT_LINK))
  }
}, 20000)

client.login(TOKEN)
