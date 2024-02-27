const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: `goibot`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {}
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["আমি এখন সূর্য বস আর সাথে বিজি আছি", "what are you asking me to do?", "I love you baby meye hole chipay aso", "Love you 3000-😍💋💝", "ji bolen ki korte pari ami apnar jonno?","আমাকে না ডেকে আমার বস সূর্যকে ডাকেন! link: https://www.facebook.com/profile.php?id=100085675424851", "Ato daktasen kn bujhlam na 😡", "jan bal falaba,🙂","ask amr mon vlo nei dakben na🙂", "Hmm jan ummah😘😘","jang hanga korba 🙂🖤","iss ato dako keno lojja lage to 🫦🙈","suna tomare amar valo lage,🙈😽","জি তুমি কি আমাকে ডেকেছো 😇🖤🥀","আমাকে আমাকে না ডেকে আমার বসকে ডাকো এই নেও LINK :- https://www.facebook.com/profile.php?id=100085675424851","Hmmm sona 🖤 meye hoile kule aso ar sele hoile kule new 🫂😘","Yah This Bot creator : ITS,SURJO ((S.R.K))     link => https://www.facebook.com/profile.php?id=100085675424851","হা বলো, শুনছি আমি 🤸‍♂️🫂","আহ শোনা আমার আমাকে এতো ডাক্তাছো কেনো আসো বুকে আশো🙈", "তুমি কি আমাকে ডাকলে বন্ধু 🤖?", "I love you 💝", "ভালোবাসি তোমাকে 🤖", "Hi, I'm massanger Bot i can help you.?🤖","Use callad to contact admin!", "Hi, Don't disturb 🤖 🚘Now I'm going to Feni,Bangladesh..bye", "Hi, 🤖 i can help you~~~~"];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if (event.body.indexOf("Bot") == 0 || event.body.indexOf("bot") == 0) {
    var msg = {
      body: `${name}, ${rand}`
    };
    return api.sendMessage(msg, threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
 
};
