const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')


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

    ┌────────────────────
    *├ ⏳Uptime----:  ${runtime(process.uptime())}    
    *├ 📟Ram usage-: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
    *├ ⚙️HostName--: ${os.hostname()}
    *├ 👨‍💻Owner-----: ᴋᴀᴠɪɴᴅᴜ ꜱᴜʀᴀɴɢᴀ
    *├ 🧬Version---: 1.0.0
    └───────────────────────

 ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚅𝙸𝙽𝙳𝚄 𝚂𝚄𝚁𝙰𝙽𝙶𝙰`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/xHxXHn1/20241119-160231.jpg`},caption: des},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
