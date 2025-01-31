const fs = require("fs")

module.exports = async (client) => {

//====Handler das Slahs====\\
const SlashsArray = []

  fs.readdir(`././ComandosSlash/`, (erro, pasta) => {
  pasta.forEach(subpasta => {
fs.readdir(`././ComandosSlash/${subpasta}/`, (erro, arquivos) => {
  arquivos.forEach(arquivo => {  
  if(!arquivo?.endsWith('.js')) return;
  arquivo = require(`../ComandosSlash/${subpasta}/${arquivo}`);
  if(!arquivo?.name) return;
client.slashCommands.set(arquivo?.name, arquivo); 
  SlashsArray.push(arquivo)
  });
    });
  });
});

fs.readdir(`././ComandosPrefix/`, (erro, pasta) => {
  pasta.forEach(subpasta => {
fs.readdir(`././ComandosPrefix/${subpasta}/`, (erro, arquivos) => {
  arquivos.forEach(arquivo => {  
  if(!arquivo?.endsWith('.js')) return;
  comando = require(`../ComandosPrefix/${subpasta}/${arquivo}`);
client.prefixCommands.set(arquivo.replace(/.js/g, ""), comando); 
    if(comando?.aliases?.length){
      comando.aliases.forEach(cmd => client.prefixCommands.set(cmd, comando))
    }
  });
    });
  });
});
  
client.on("ready", async () => {

//Este código serve pra registrar as slashs em 1 só servidor específico.
  /*
  const guild = client.guilds.cache.get("id do seu servidor")
  
  if(!guild) {
    console.log("O servidor específicado para registrar as slashs é inválido.", "Desligando...")
    process.exit();
  }
  
  guild.commands.set(SlashsArray);
*/
//Caso quiser registrar as slashs no cache global, substitua o código acima por esse: 

client.application.commands.set(SlashsArray);

 // Mas lembre-se! Registrar as slashs no cache global demora entre 1 e 3 horas, já em algum servidor específico é instantâneo. Eu aconcelho fazer todos os comandos em um servidor e depois que tudo estiver pronto passa-los para o global.
    });

//====Handler dos eventin====\\

  fs.readdir(`././Eventos/`, (erro, pasta) =>{
  pasta.forEach(subpasta =>{
fs.readdir(`././Eventos/${subpasta}/`, (erro, arquivos) =>{
  arquivos.forEach(arquivo =>{       
  if(!arquivo.endsWith('.js')) return; require(`../Eventos/${subpasta}/${arquivo}`); 
  });
    });
  });
});
};