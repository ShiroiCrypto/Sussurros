const Discord = require("discord.js")
const corAmareloClaro = parseInt('FFEB3B', 16); // Amarelo claro
const corAmareloEscuro = parseInt('FBC02D', 16); // Amarelo escuro

module.exports = {
  name: "apresentar", // Nome do comando
  description: "Apresentação do bot para a Fabi.", // Descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let dono = "297141392235560960"; // ID do dono (Shiroi)
    let bot = client.user.tag;
    let avatar_bot = client.user.displayAvatarURL({ dynamic: true });
    let ping = client.ws.ping;

    let embed = new Discord.EmbedBuilder()
    .setColor(corAmareloClaro) // Usando o amarelo claro como cor principal
    .setAuthor({ name: bot, iconURL: avatar_bot })
    .setFooter({ text: bot, iconURL: avatar_bot })
    .setTimestamp(new Date())
    .setThumbnail(avatar_bot)
    .setDescription(`Olá, **Fabi**! 🥰

Eu sou a **FabizinhaBOT**, e fui feita especialmente para você como um presente do **Shiroi**! 💖🎁  

Fui criada para alegrar seus dias, com muito carinho e amor, trazendo funcionalidades divertidas e fofas para você! 🐥💕

> **Desenvolvedor:** Shiroi (ou Simeon)  
> **Ping:** \`${ping}ms\`  
> **Feito com muito carinho em Node.js usando Discord.js**.  

Espero que você goste de mim! 💖😊`)

    interaction.reply({ embeds: [embed], ephemeral: true })
  }
}
