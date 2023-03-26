let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Hitomi tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(kannaon)$/i

handler.admin = true
handler.owner = true

export default handler