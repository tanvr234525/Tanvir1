/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "ig",
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🥵🥵🥵"
 ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/GdW6OYn.jpg",
"https://i.imgur.com/UsAYKD5.jpg",
"https://i.imgur.com/G6DysxM.jpg",
"https://i.imgur.com/637pUB5.jpg",
"https://i.imgur.com/Kbl9SW9.jpg",
"https://i.imgur.com/4Iqydzj.jpg",
"https://i.imgur.com/LoNuWSK.jpg",
"https://i.imgur.com/bGdqOJq.jpg",
"https://i.imgur.com/wxUshib.jpg",
"https://i.imgur.com/jCNFEka.jpg",
"https://i.imgur.com/SaeL75Q.jpg",
"https://i.imgur.com/cwTHcXI.jpg",
"https://i.imgur.com/8kXEK7t.jpg",
"https://i.imgur.com/0FPDgzP.jpg",
"https://i.imgur.com/af3GpqK.jpg",
"https://i.imgur.com/717yLGr.jpg",
"https://i.imgur.com/mce4XfF.jpg",
"https://i.imgur.com/2YYFjUA.jpg",
"https://i.imgur.com/NDQgQLa.jpg",
"https://i.imgur.com/nxHA5Om.jpg",
"https://i.imgur.com/7wwdqUg.jpg",
"https://i.imgur.com/7E926sj.jpg",
"https://i.imgur.com/3g2HDAF.jpg",
"https://i.imgur.com/ZiRbOxp.jpg",
"https://i.imgur.com/4MoMIpu.jpg",
"https://i.imgur.com/2ketnbi.jpg",
"https://i.imgur.com/BdL1ubr.jpg",
"https://i.imgur.com/RSMtQFs.jpg"
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
