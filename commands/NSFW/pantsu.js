const Discord = require('discord.js');
const randomPuppy = require('random-puppy')
const color = require("../../storage/settings.json")
exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
     if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  randomPuppy('pantsu')
            .then(url => {
                const embed = new Discord.RichEmbed()
                .setTimestamp(new Date())
                .setTitle(`pantsu`)
                .setImage(url)
                .setColor(color.inori)
    return message.channel.send({ embed });
            })
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pantsu"],
  permLevel: 0,
};

exports.help = {
  name: "pantsu",
  description: "NSFW Pantsu",
  usage: "pantsu",
};
