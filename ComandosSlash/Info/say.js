const { ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: "say",
    description: "O bot fala alguma coisa.",
    type: ApplicationCommandType.ChatInput,
    options: [
      {
        name: "texto",
        description: "O texto que o bot vai falar",
        type:  ApplicationCommandOptionType.String,
        required: true
      }
    ],
    run: async (client, interaction) => {
      const say = interaction.options.getString("texto")
      interaction.reply(`${say}\nBy: ${interaction.user}`)
    }
}