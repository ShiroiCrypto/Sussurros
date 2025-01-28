// => Status: Sistema de Informações no Console.
const client = require("../../index");
const Discord = require('discord.js');

client.on(`ready`, () => {
  console.clear()
  console.log(`👻  | Bot logado com sucesso em ` + client.user.username + `
👻  | Bot conectado a DataBase (SayV14)
👻  | Desenvolvido por (Shiroi)`);
});

// => Client: Sistema de Status do Bot.

client.on("ready", () => {
  const messages = [
    `👁️‍🗨️ Sussurro nas sombras de ${client.guilds.cache.size} servidores...`, // Status 1
    `🕯️ ${client.users.cache.size} almas ouvem meus segredos...`, // Status 2
    `🌑 O véu se abre... (${new Date().toLocaleTimeString()})`, // Status 3
    `🔮 A escuridão observa. [${client.guilds.cache.size} covis]`, // Status 4
    `💀 Os mortos sussurram: "${client.user.username}"...` // Status 5
  ]

  var position = 0;

  setInterval(() => client.user.setPresence({
    activities: [{
      name: `${messages[position++ % messages.length]}`,
      type: Discord.ActivityType.Streaming,
      url: 'https://www.twitch.tv/TwitchStatusServer'
    }]
  }), 1000 * 10);

  client.user.setStatus("online");
});