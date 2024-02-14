const fs = require("fs");

let isEnabled = true; 

module.exports.config = {
  name: "🙃",
  version: "1.0.0", 
  permission: 0,
  credits: "Rahad",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (isEnabled && event.body.indexOf("🙃") == 0) {
    var msg = {
      body: "--চাইলেই যদি ভোলা যেতো...!\nতাহলে সুসাইড বলে কিছুই থাকত না..!🙂\n𝗠𝗼𝗵𝗮𝗺𝗺𝗮𝗱 𝗥𝗮𝗵𝗮𝗱 🙂",
      attachment: fs.createReadStream(__dirname + `/noprefix/rahad6.mp4`)
    }
    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
  }
}

module.exports.toggle = function() {
  isEnabled = !isEnabled; 
  return isEnabled ? "Script enabled!" : "Script disabled!";
}

module.exports.command = function({ api, event, client }) {
  const message = '/💏 off successful';
  api.sendMessage(message, event.threadID);
  return module.exports.toggle();
}
