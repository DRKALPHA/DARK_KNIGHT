const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `👋 𝙷𝚎𝚕𝚕𝚘 ${pushname} 𝙸'𝚖 𝚊𝚕𝚒𝚟𝚎 𝚗𝚘𝚠

*Im DARK KNIGHT Whatsapp Bot Create By Kavindu Suranga 🍂✨*

| *Version*: 1.0.0
| *Memory*: 38.09MB/7930MB
| *Runtime*: 1 minute,25 seconds
| *Owner*: ${isMe}

 ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚅𝙸𝙽𝙳𝚄 𝚂𝚄𝚁𝙰𝙽𝙶𝙰`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/xHxXHn1/20241119-160231.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
