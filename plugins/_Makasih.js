import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` Sama - Sama Kak ☺️ : By AyameBot"* `
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Sama - sama kak', sourceUrl: owner, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(Makasih|Terima kasih|thanks)$/i
handler.command = new RegExp

export default handler