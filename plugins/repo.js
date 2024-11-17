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

let dec = `*🧚‍♂️ NETHU MD Repastitory Information*

*| ɴᴀᴍᴇ*: ɴᴇᴛʜᴜ-ᴍᴅ
*| ᴏᴡɴᴇʀ*: ɴᴇᴛʜᴍɪᴋᴀ ᴋᴀᴜꜱʜᴀʟʏᴀ (ꜱʟ ɴᴇᴛʜᴜ ᴍᴀx)
*| ɴᴜᴍʙᴇʀ*: 94704227534
*| ᴠᴇʀꜱɪᴏɴ*: 1.0.0


*📡 REPO LINK*
🔗◦https://github.com/Nethmikakaushalyaherath/NETHU-MD

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://www.youtube.com/@SlNethuMax

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴜ ᴍᴀx
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7f0d7a04a30a602307e3d.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
