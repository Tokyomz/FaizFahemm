let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Ayame Tidur Dulu 🥱 📴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['AyameBot(on/off)']
handler.tags = ['owner']
handler.command = /^(botoff|ayameoff)$/i

handler.admin = false
handler.group = true
handler.owner = true

export default handler
