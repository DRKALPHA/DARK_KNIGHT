const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🥷 DARK KNIGHT Repastitory Information*

*| ɴᴀᴍᴇ*: 𝙳𝙰𝚁𝙺 𝙺𝙽𝙸𝙶𝙷𝚃
*| 𝙲𝚁𝙴𝙰𝚃𝙴𝚁*: 𝙺𝙰𝚅𝙸𝙽𝙳𝚄 𝚂𝚄𝚁𝙰𝙽𝙶𝙰 (𝙳𝚁𝙺 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁)
*| ɴᴜᴍʙᴇʀ*: 94713824099
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦https://github.com/DRKALPHA/DARK_KNIGHT

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦https://www.youtube.com/@drkdeveloper2008

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙺𝙰𝚅𝙸𝙽𝙳𝚄 𝚂𝚄𝚁𝙰𝙽𝙶𝙰
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7f0d7a04a30a602307e3d.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
