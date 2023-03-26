let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.furry)}”`, m)
}
handler.help = ['Furrycek']
handler.tags = ['game']
handler.command = /^(Furrycek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.furry = [
'Furry Level : 4%\n\nAMAN BANGET!',
'Furry Level : 7%\n\nMasih Aman',
'Furry Level : 12%\n\nAman Kok',
'Furry Level : 22%\n\nHampir Aman',
'Furry Level : 27%\n\nFurry dikit',
'Furry Level : 35%\n\nFurry ¼',
'Furry Level : 41%\n\nDah lewat dri Aman',
'Furry Level : 48%\n\nSetengah Furry',
'Furry Level : 56%\n\nPlayer Arknek ya lu?',
'Furry Level : 64%\n\nLumayan Furry',
'Furry Level : 71%\n\nDiluar Nalar ke Furry an lu',
'Furry Level : 1%\n\n99% LU GAK Furry!',
'Furry Level : 77%\n\nGak akan Salah Lagi dah ke Furry an lu',
'Furry Level : 83%\n\nFurry Tingkat Tinggi',
'Furry Level : 89%\n\nFurry Banget!',
'Furry Level : 94%\n\nPaling Furry se Semesta',
'Furry Level : 100%\n\nSOLID SOLID SOLID',
'Furry Level : 100%\n\nSOLID SOLID SOLID',
'Furry Level : 100%\n\nSOLID SOLID SOLID',
'Furry Level : 100%\n\nSOLID SOLID SOLID',
]