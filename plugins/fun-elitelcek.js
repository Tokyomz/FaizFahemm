let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.elite)}”`, m)
}
handler.help = ['elitecek']
handler.tags = ['game']
handler.command = /^(elitecek|elitcek)$/i
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

global.elite = [
'Elite Level : 4%\n\nAMAN BANGET!',
'Elite Level : 7%\n\nMasih Aman',
'Elite Level : 12%\n\nAman Kok',
'Elite Level : 22%\n\nHampir Aman',
'Elite Level : 27%\n\nElite dikit',
'Elite Level : 35%\n\nElite ¼',
'Elite Level : 41%\n\nDah lewat dri Aman',
'Elite Level : 48%\n\nSetengah Elite',
'Elite Level : 56%\n\nLu Elite juga',
'Elite Level : 64%\n\nLumayan Elite',
'Elite Level : 71%\n\nUltra keElitean lu',
'Elite Level : 1%\n\n99% LU GAK Elite!',
'Elite Level : 77%\n\nGak akan Salah Lagi dah Elitenya lu',
'Elite Level : 83%\n\nElite Tingkat Tinggi',
'Elite Level : 89%\n\nElite Banget!',
'Elite Level : 94%\n\nPaling Elite se Semesta',
'Elite Level : 100%\n\nANDA TERMASUK GOLONGAN DIKA\nGOLONGAN SUPER ELITE',
'Elite Level : 100%\n\nANDA TERMASUK GOLONGAN DIKA\nGOLONGAN SUPER ELITE',
'Elite Level : 100%\n\nANDA TERMASUK GOLONGAN DIKA\nGOLONGAN SUPER ELITE',
'Elite Level : 100%\n\nANDA TERMASUK GOLONGAN DIKA\nGOLONGAN SUPER ELITE',
]