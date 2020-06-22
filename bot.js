const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["Me Big Brain",
             "Go To Hell Satan!",
             "STOP MENTIONING ME!",
             "*-Mechanical Keyboard Sounds-*",
             "You Cant Mention Me I Mention YOU! @here",
             "Screw You",
             "Foxy is a little shit",
             "Im The Best Guy In The Server!",
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
 else if(message.content.includes("or")) {
  message.channel.send("Or What?");
  }
  else if(message.content.includes("madison")) {
  message.channel.send("Nice Name");
  }
  else if(message.content == "wolfie") {
  message.channel.send("What Do You Want?");
  }
  else if(message.content == "שלום") {
  message.channel.send("Translation Please... Alien");
  }
  else if(message.content.includes("me big brain")) {
  message.channel.send("No You Small Brain Foxy, Im The Big Brain!");
  }
  else if(message.content.includes("later")) {
  message.channel.send("There Is No Later Its Today!!!");
  }
  else if(message.content.includes("beat")) {
  message.channel.send("Stop Scorpio Bad No Beating Foxy");
  }
  else if(message.content.includes("minecraft")) {
  message.channel.send("Is A Nice Game");
  }
  else if(message.content.includes("youtube")) {
  message.channel.send("HEHE Scorpio Leaving Foxy");
  }
  else if(message.content.includes("foxy")) {
  message.channel.send("Foxy Is Probably Crying In An Allyway Or Something, I Dont Care!");
  }
  else if(message.content.includes("scorpio")) {
  message.channel.send("Madison Is Cool");
  }
  else if(message.content.includes("crush")) {
  message.channel.send("Someone Has A Crush On Somebody HEHE");
  }
  else if(message.content.includes("meme")) {
  message.channel.send("Foxys Memes Are So Bad I Puked On My Razer BlackWidow, Fuck You Foxy!");
  }
  else if(message.content.includes("cute")) {
  message.channel.send("Who You Callin Cute?");
  }
  else if(message.content.includes("foxes")) {
  message.channel.send("Foxes Are Cool I Need One Right Now!");
  }
});

bot.login(process.env.BOT_TOKEN);
