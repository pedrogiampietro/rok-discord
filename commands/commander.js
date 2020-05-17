const Discord = require('discord.js');

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
  
  run: async (client, message, args) => {

    comandanteList.forEach(NomeCompleto => {
      
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('👳‍♂️🔍 Todos Comandantes Disponivéis')
      .addField('**Comandantes**', NomeCompleto.nome)
      message.channel.send(embed)

  })

  },

  conf: {},

  get help () {
    return {
      name: 'comandante',
      description: 'Mostra a todos os comandantes disponiveis.',
      usage: 'comandante',
      category: 'Info-Comandante'
    }
  }
}
