const Discord = require('discord.js');

const bot = new Discord.Client();

var facts = ["Me Big Brain",
             "Go To Hell Satan!",
             "STOP MENTIONING ME!",
             "*-Mechanical Keyboard Sounds-*",
             "Scorpio Is The Best Boi Ever!!",
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
  
  if(message.author.bot) return;
  else if(message.isMemberMentioned(bot.user)) {
  var fact = Math.floor(Math.random() * facts.length);
  message.channel.send(facts[fact]);
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
  if(message.content == "me big brain" && message.author.id == "366890040153866251") {
  message.channel.send("No You Small Brain Foxy, Im The Big Brain!");
  }
  else if(message.content.includes("later")) {
  message.channel.send("There Is No Later Its Today!!!");
  }
  if(message.content == "beat" && message.author.id == "682616027582169138") {
  message.channel.send("Stop Scorpio Bad No Beating Foxy");
  }
  else if(message.content.includes("minecraft")) {
  message.channel.send("Is A Nice Game");
  }
  else if(message.content.includes("youtube")) {
  message.channel.send("HEHE Scorpio Leaving Foxy");
  }
  else if(message.content.includes("Foxy")) {
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
  else if(message.content == "with you") {
  message.channel.send("HEHE Laugh Laugh Lmao");
  }
  else if(message.content.includes("kill")) {
  message.channel.send("Dont Kill Him Its My Fault!");
  }
  else if(message.content.includes("XD")) {
  message.channel.send("You Are Laughing With Me Or Because Of Me?");
  }
  else if(message.content == "because of you") {
  message.channel.send("Well Fuck You Then!");
  }
  else if(message.content == "wanna play roblox?") {
  message.channel.send("https://cdn.discordapp.com/attachments/712832607955714111/724912999999078400/IMG_20200620_184823.jpg https://media.discordapp.net/attachments/712832607955714111/724913000297005166/IMG_20200620_184838.jpg");
  }
  else if(message.content == "No.") {
  message.channel.send("https://cdn.discordapp.com/attachments/712832607955714111/724917812832894996/IMG_20200623_120448.jpg");
  }
});

bot.login(process.env.BOT_TOKEN);
