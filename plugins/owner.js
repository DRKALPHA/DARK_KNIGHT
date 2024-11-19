const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♂️ DARK KNIGHT Whatsapp Bot*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: 𝐃𝐑𝐊 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 (ᴋᴀᴠɪɴᴅᴜ ꜱᴜʀᴀɴɢᴀ)
*| ɴᴜᴍʙᴇʀ*: https://wa.me/94713824099
*| ʏᴏᴜᴛᴜʙᴇ*: https://www.youtube.com/@drkdeveloper2008
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://chat.whatsapp.com/LOiF4xeL6sW9nIfEKtbUSr

 ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʀᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/7ycck2S/1128228183je8291ww8i2.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
