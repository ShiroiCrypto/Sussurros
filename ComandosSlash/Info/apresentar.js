const Discord = require("discord.js");
const corSombrio = parseInt('2d1433', 16); // Roxo sombrio
const corVermelhoEscuro = parseInt('8b0000', 16); // Vermelho escuro

module.exports = {
  name: "apresentar", // Nome do comando
  description: "Apresentação sinistra do bot.", // Descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let dono = "1332736517281681419"; // ID do dono (Shiroi)
    let bot = client.user.tag;
    let avatar_bot = client.user.displayAvatarURL({ dynamic: true });
    let ping = client.ws.ping;

    let embed = new Discord.EmbedBuilder()
      .setColor(corSombrio) // Usando o roxo sombrio como cor principal
      .setAuthor({ name: bot, iconURL: avatar_bot })
      .setFooter({ text: bot, iconURL: avatar_bot })
      .setTimestamp(new Date())
      .setThumbnail(avatar_bot)
      .setDescription(`🕯️ **Olá, mortal...** 🕯️

Eu sou **${client.user.username}**, uma entidade das sombras, criada por **Shiroi** para vagar por este mundo digital... 🌑✨

Minha existência é um mistério, e meu propósito é trazer um toque de escuridão e mistério para sua vida. 🖤🔮

> **Criador:** Shiroi (ou Simeon)  
> **Ping:** \`${ping}ms\`  
> **Feito com Node.js e Discord.js, envolto em trevas...**  

Cuidado com o que deseja... Nem tudo é o que parece. 👁️‍🗨️`);

    interaction.reply({ embeds: [embed], ephemeral: true });
  }
};