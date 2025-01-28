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
      .setDescription(`> **🕯️ Eu sou \`${client.user.username}\`... Um sussurro nas sombras. Se precisar de ajuda, invoque o comando \`/ajuda\`. Mas cuidado... nem toda ajuda vem sem um preço...**`);
    message.reply({ embeds: [embed] })
  }
});