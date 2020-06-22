const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["Me Big Brain",
             "Go To Hell Satan!",
             "STOP MENTIONING ME!",
             "*-Mechanical Keyboard Sounds-*",
             "You Cant Mention Me I Mention YOU! @here",
             "screw you",
             "Foxy is a little shit",
             "Im The Best Guy In The Server!",
             "Scorpio? More Like Scorpion HAHAHAHA!!!",
             "Foxy? More Like Cocksy"
             ];

bot.on('ready', () => {

    console.log('I am ready!');
    bot.user.setActivity("I HATE YOU ALL!!!", { type: 'PLAYING' });

});

 

bot.on('message', message => {

  if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
  }
  else if(message.content == "or") {
  message.channel.send("Or What?");
  }
  else if(message.content == "Madison") {
  message.channel.send("Thats You're Real Name?!? HAHHAHAHAH");
  }
  
});

bot.login(process.env.BOT_TOKEN);
