import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('April 22 2023 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let audio = `./mp3/nexep.opus`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *Donasi • Dana* 〕ꕥ━⬣
┃✾ Gopay  085876043014]
┃✾ Ovo  [085876043014]
┃✾ Saweria  [h-]
┗━━━━ꕥ
┏━━ꕥ〔 *NOTE* 〕ꕥ━⬣
┃ Ingin donasi? Wa.me/6285876043014
┃ _Hasil donasi akan digunakan buat sewa_
┃ _atau beli *RDP/VPS* agar bot bisa jalan_
┃ _24jam tanpa kendala_
┗━━━━ꕥ
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, audio, './mp3/nexep.opus', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow Tiktok My Bestie`, sourceUrl: 'https://www.tiktok.com/@achelooze295', thumbnail: await (await fetch('https://i.ibb.co/3RSVFP3/bawah.png')).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler