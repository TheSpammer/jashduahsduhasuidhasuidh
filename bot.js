const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("help l shows help page.", {url: "https://www.twitch.tv"});
  console.log('${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.');
});


client.on('message', async msg=> {
  if (msg.content === 'open') {
	  msg.channel.send('open')
  }
  if (msg.content === 'stop') {
	  msg.channel.send('')
  }
});



client.on('message', async msg=> {
  if (msg.content === 'credits') {
      msg.channel.send('#credits <@519838438414090244>')
  }
});


client.on('message', async msg=> {
  if (msg.content === 'give me') {
      msg.channel.send('#credits <@453683156294434817> 500')
  }
});

client.on('message', async msg=> {
  if (msg.content === 'daily') {
      msg.channel.send('#daily')
  }
});


client.login(Bot_token);