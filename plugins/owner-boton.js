let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Pagi kak, Maaf Ayame baru bangun* ')
}


handler.tags = ['owner']
handler.command = /^(boton|ayameon)$/i

handler.group = true
handler.admin = false
handler.owner = true

export default handler
