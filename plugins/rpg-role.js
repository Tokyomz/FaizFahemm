let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
let rol = `${htki} ROLE ${htka}

Your Role : ${user.role}

List Role = 

Bronze V
Bronze IV
Bronze III
Bronze II
Bronze I
Silver V
Silver IV
Silver III
Silver II
Silver I
Gold V
Gold IV
Gold III
Gold II
Gold I
Diamond V
Diamond IV
Diamond III
Diamond II
Diamond I
Master V
Master IV
Master III
Master II
Master I
Grand Master V
Grand Master IV
Grand Master III
Grand Master II
Grand Master I
Conqueror V
Conqueror IV
Conqueror III
Conqueror II
Conqueror I
Grand Conqueror V
Grand Conqueror IV
Grand Conqueror III
Grand Conqueror II
Grand Conqueror I
Supreme Conqueror
THE CHALLANGER`
conn.reply(m.chat, rol, )
}
handler.command = ['role']

export default handler