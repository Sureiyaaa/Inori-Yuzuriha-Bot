const superagent = require("snekfetch");
const Discord = require('discord.js')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {  
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/blowjob')
        .end((err, response) => {
      const pussyembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(color.inori)
  message.channel.send(pussyembed);
    })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blowjob"],
  permLevel: 0,
};

exports.help = {
  name: "blowjob",
  description: "NSFW Blowjob.",
  usage: "blowjob",
};