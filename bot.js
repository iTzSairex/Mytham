const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message',  async  message  =>  {
  let  user  =  message.mentions.users.first();
  let  reason  =  message.content.split(' ').slice(2).join(' ');
if(message.content.startsWith(prefix  +  'warn'))  {
  message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('**للأسف لا تمتلك صلاحيات' );
  if(!user)  return  message.channel.send("**  -  mention  a  member  **")
  if(!reason)  return  message.channel.send("**  -  Type  Reason  **")
  let  reportembed  =  new  Discord.RichEmbed()
  .setTitle(`**New  Warned User !**`)
.addField("**-  Warned  User:**",  `[${user}  with  ID  ${user.id}]`)
.addField('**-  Warned  By:**',`[${message.author.tag} with id ${message.author.id}]`)
.addField('**-  Reason:**',  `[${reason}]`,  true)
.addField("**-  Warned  in:**",`[${message.channel.name}]`)
.addField("**-  Time & Date:**",`[${message.createdAt}]`)
.setFooter("Positive System")
.setColor('RANDOM')
let incidentchannel = message.guild.channels.find(`name`, "warns");
if(!incidentchannel) return message.channel.send("Can't find warns channel.");
incidentchannel.send(reportembed);
message.reply(`**:warning: ${user} has been warned !:warning:**`).then(msg  =>  msg.delete(3000));
user.send(`**:warning: You are has been warned in ${message.guild.name} reason: ${reason} :warning:**`)
}

})
