const Discord = require('discord.js')
const moment = require('moment')

/* comandantes lendários, de Alexandre o Grande até Seondeok */
/* comandantes épicos, de Baibars até Sun Tzu */
/* comandantes elite, de Constânça até Sárka */
/* comandantes avançados, de Centurião até Atiradora */ 

const comandanteList = [
  { nome: 'Alexandre o Grande' },
  { nome: 'Cao Cao' },
  { nome: 'Carlos Martel' },
  { nome: 'Cleopatra VII' },
  { nome: 'Constantine I' },
  { nome: 'El Cid' },
  { nome: 'Frederico I' },
  { nome: 'Genghis Khan' },
  { nome: 'Hannibal Barca' },
  { nome: 'Julio Cesar' },
  { nome: 'Mehmed II' },
  { nome: 'Minamoto no Yohitsune' },
  { nome: 'Richard I' },
  { nome: 'Saladin' },
  { nome: 'Yi Seong Gye' },
  { nome: 'AEthelflaed' },
  { nome: 'Carlos Magno' },
  { nome: 'Edward de Woodstock' },
  { nome: 'Tomyris' },
  { nome: 'Seondeok' },
  { nome: 'Baibars' },
  { nome: 'Belisarius' },
  { nome: 'Boudica' },
  { nome: 'Eulji Mundeok' },
  { nome: 'Hermann' },
  { nome: 'Joana DArc' },
  { nome: 'Kusunoki Masashige' },
  { nome: 'Lohar' },
  { nome: 'Osman I' },
  { nome: 'Pelagius' },
  { nome: 'Cipião africano' },
  { nome: 'Sun Tzu' },
  { nome: 'Constânça' },
  { nome: 'Gaius Marius' },
  { nome: 'Lancelote' },
  { nome: 'Tomoe Gozen' },
  { nome: 'Sárka' },
  { nome: 'Centurião' },
  { nome: 'Guardião da cidade' },
  { nome: 'Lanceiro dragão' },
  { nome: 'Atiradora' },

]

module.exports = {

  run: function (client, message, args) {
      
        const displayInformacoes = {
            displayAvatar : "Todos displayAvatarURL",
            autor : "Pedro",
            Informacoes : {
                displayAvatarURL : "https://bit.ly/2LGQyjz",
                displayImgTalento : "https://i.imgur.com/S5W1bwt.png",
                nome : 'Alexandre o Grande',
                tipo : 'Lendário',
                especialidade : 'Infantaria, Versalidade, Ataque.',
                poder : '4.700'
            },
        }

    const inline = true
    const embed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setThumbnail(displayInformacoes.Informacoes.displayAvatarURL)
      .setAuthor('🤖 Minhas informações')
      .addField('**Meu nome**', displayInformacoes.Informacoes.nome)
      .addField('**Raridade**', displayInformacoes.Informacoes.tipo)
      .addField('**Poder**', `🛡 ${displayInformacoes.Informacoes.poder}`, true)
      .addField('**Especialidade**', `🗡📚⚔️  ${displayInformacoes.Informacoes.especialidade}`, true)
      .setImage(displayInformacoes.Informacoes.displayImgTalento, true)

    message.channel.send(embed)
  },

  conf: {},

  get help () {
    return {
      name: 'alexandreogrande',
      description: 'Mostra todos os atributos do comandante Alexandre o Grande.',
      usage: 'alexandreogrande',
      category: 'Info-Comandante'
    }
  }
}

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
