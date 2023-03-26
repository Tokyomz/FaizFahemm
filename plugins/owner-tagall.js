const cooldown = 1000
let handler = async(m, { conn, usedPrefix, text, participants }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastlimit))
    if (new Date - user.lastlimit <= cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`*ᴛᴀɢ-ᴀʟʟ* ʀᴇᴄᴇɴᴛʟʏ ᴜsᴇᴅ, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.

⏱️ ${timers.toTimeString()}`.trim(), './media/cooldown.jpg', [[`ᴍᴇɴᴜ`, `${usedPrefix}valor`]], m, {asLocation: true})
  let teks = `${text ? text : '*––––––『 TAG All 』––––––*'}\n\n${readMore}`
		      	for (let mem of participants) {
		            teks += `\n@${mem.id.split('@')[0]}`
				}
            await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
    user.lastlimit = new Date * 1
}
handler.help = ['otagall <message>']
handler.tags = ['group']
handler.command = /^(otagall|oall)$/i

handler.group = true
handler.limit = true
handler.admin = false
handler.owner = true
handler.cooldown = cooldown

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)