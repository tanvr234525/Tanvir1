module.exports.config = {
	name: "mal",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "See pictures of baby dragons",
    prefix: true,
    category: "user",
    usages: "",
    cooldowns: 5,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apikanna.the-matrix.repl.co').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `⚡️This is Kanna <3\n⚡️Number of photos available: ${count} Photo`,
            attachment: fs.createReadStream(__dirname + `/cache/kanna.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/kanna.${ext}`)).on("close", callback);
      })
}
