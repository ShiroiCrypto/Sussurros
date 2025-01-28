const client = require("../../index");
const Discord = require("discord.js")

client.on("messageCreate", message => {

  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {

    const embed = new Discord.EmbedBuilder()
      .setTitle(`${client.user.username}`)
      .setColor(`a5d7ff`)
      .setThumbnail(client.user.avatarURL())
      .setDescription(`> **Oi! Eu sou a \`${client.user.username}\`! 🐤✨ Se precisar de ajuda, é só chamar pelo comando /ajuda. Vou adorar te ajudar! 💖**`)

    message.reply({ embeds: [embed] })
  }
});