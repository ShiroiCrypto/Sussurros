module.exports = {
  aliases: ["falar", "speak"],
  run: async (client, message, args) =>{
   message.reply(`${args.join(" ")}\nPor: ${message.author}`)
  }
 }