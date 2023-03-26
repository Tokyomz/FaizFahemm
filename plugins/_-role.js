const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Bronze V': 0,
    'Bronze IV': 5,
    'Bronze III': 10,
    'Bronze II': 15,
    'Bronze I': 20,
    'Silver V': 25,
    'Silver IV': 30,
    'Silver III': 35,
    'Silver II': 40,
    'Silver I': 45,
    'Gold V': 50,
    'Gold IV': 55,
    'Gold III': 60,
    'Gold II': 65,
    'Gold I': 70,
    'Diamond V': 75,
    'Diamond IV': 80,
    'Diamond III': 85,
    'Diamond II': 90,
    'Diamond I': 95,
    'Master V': 100,
    'Master IV': 105,
    'Master III': 110,
    'Master II': 115,
    'Master I': 120,
    'Grand Master V': 125,
    'Grand Master IV': 130,
    'Grand Master III': 135,
    'Grand Master II': 140,
    'Grand Master I': 145,
    'Conqueror V': 150,
    'Conqueror IV': 155,
    'Conqueror III': 160,
    'Conqueror II': 165,
    'Conqueror I': 170,
    'Grand Conqueror V': 175,
    'Grand Conqueror IV': 180,
    'Grand Conqueror III': 185,
    'Grand Conqueror II': 190,
    'Grand Conqueror I': 195,
    'Supreme Conqueror ': 200,
    'THE CHALLANGER': 205
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}