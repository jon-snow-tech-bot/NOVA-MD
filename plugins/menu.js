import config from '../../config.cjs';

// Variable globale à définir au lancement du bot, ex:
// export const startTime = Date.now();
// ou dans ce fichier (mais mieux en dehors pour garder la valeur persistante)
const startTime = Date.now();

const formatRuntime = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours}h ${minutes}m ${seconds}s`;
};

const menu = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "menu") {
    const start = new Date().getTime();
    await m.React('🪆');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    // Récupérer runtime
    const now = Date.now();
    const runtime = formatRuntime(now - startTime);

    // Récupérer mode selon utilisateur - ADAPTE CETTE PARTIE SELON TON CODE
    // Exemple fictif:
    const mode = m.isGroup ? "public" : "private"; // OU selon ta logique

    // Récupérer nom du propriétaire
    const ownerName = config.OWNER_NAME || "JON-SNOW TECV";

    let profilePictureUrl = 'https://files.catbox.moe/q2na0o.jpg'; // image par défaut
    try {
      const pp = await sock.profilePictureUrl(m.sender, 'image');
      if (pp) {
        profilePictureUrl = pp;
      }
    } catch (error) {
      console.error("Failed to fetch profile picture:", error);
    }

    const menuText = `
╭───────────────⭓
│ ʙᴏᴛ : *NOVA-MD*
│ ʀᴜɴᴛɪᴍᴇ : ${runtime}
│ ᴍᴏᴅᴇ : ${mode}
│ ᴘʀᴇғɪx : ${prefix}
│ ᴏᴡɴᴇʀ : ${ownerName}
│ ᴅᴇᴠ : *JON-SNOW*
│ ᴠᴇʀ : *1.𝟶.𝟶*
╰───────────────⭓
───────────────────
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 NOVA-MD
───────────────────
⭓──────────────────⭓『 NOVA-MD-𝗠𝗘𝗡𝗨 』
│ ⬡ menu
│ ⬡ speed
│ ⬡ alive
│ ⬡ sudo
│ ⬡ addpremium
│ ⬡ dev
│ ⬡ allvar
│ ⬡ ping
│ ⬡ owner
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗢𝗪𝗡𝗘𝗥 』
│ ⬡ join
│ ⬡ autoread
│ ⬡ pair
│ ⬡ leave
│ ⬡ autostatusview
│ ⬡ autotyping
│ ⬡ autoblock
│ ⬡ autorecording
│ ⬡ autosticker
│ ⬡ antisticker
│ ⬡ restart
│ ⬡ block
│ ⬡ unblock
│ ⬡ anticall
│ ⬡ antidelete
│ ⬡ upload
│ ⬡ vv
│ ⬡ setstatusmsg
│ ⬡ allcmds
│ ⬡ calculater 
│ ⬡ alwaysonline
│ ⬡ delete
│ ⬡ vv2
│ ⬡ setprefix
│ ⬡ Profile
│ ⬡ repo
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗔𝗜 』
│ ⬡ ai
│ ⬡ bug
│ ⬡ Bot
│ ⬡ report
│ ⬡ gemini
│ ⬡ chatbot
│ ⬡ gpt
│ ⬡ lydia
│ ⬡ inconnu-ai
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗖𝗩𝗧𝗥 』
│ ⬡ attp
│ ⬡ gimage
│ ⬡ mp3
│ ⬡ ss
│ ⬡ url
│ ⬡ url2
│ ⬡ shorten
│ ⬡ sticker
│ ⬡ take
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗦𝗘𝗔𝗥𝗖𝗛 』
│ ⬡ google
│ ⬡ mediafire
│ ⬡ quranvideo
│ ⬡ quraimage
│ ⬡ facebook
│ ⬡ instagram
│ ⬡ tiktok
│ ⬡ lyrics
│ ⬡ ytsearch
│ ⬡ app
│ ⬡ bing
│ ⬡ ipstalk
│ ⬡ imdb
│ ⬡ pinterest
│ ⬡ githubstalk
│ ⬡ image
│ ⬡ ringtone
│ ⬡ playstore
│ ⬡ shazam
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗙𝗨𝗡 』
│ ⬡ getpp
│ ⬡ wcg
│ ⬡ joke
│ ⬡ ttt
│ ⬡ yesorno
│ ⬡ connect4
│ ⬡ rank
│ ⬡ quizz
│ ⬡ movie
│ ⬡ flirt
│ ⬡ givetext
│ ⬡ roast
│ ⬡ anime
│ ⬡ profile
│ ⬡ ebinary
│ ⬡ fetch
│ ⬡ qc
│ ⬡ ppcouple
│ ⬡ poll
│ ⬡ couple
│ ⬡ emojimix
│ ⬡ score
│ ⬡ toqr
│ ⬡ ebinary
│ ⬡ tempmail
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗚𝗥𝗢𝗨𝗣𝗦 』
│ ⬡ kickall
│ ⬡ remove
│ ⬡ tagall
│ ⬡ hidetag
│ ⬡ forward
│ ⬡ getall
│ ⬡ group close
│ ⬡ group open
│ ⬡ add
│ ⬡ vcf
│ ⬡ left
│ ⬡ promoteall
│ ⬡ demoteall
│ ⬡ setdescription
│ ⬡ linkgc
│ ⬡ antilink2
│ ⬡ antilink
│ ⬡ antisticker
│ ⬡ setname
│ ⬡ promote
│ ⬡ demote
│ ⬡ groupinfo
│ ⬡ balance
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗛𝗘𝗡𝗧𝗔𝗜 』
│ ⬡ hneko
│ ⬡ trap
│ ⬡ hwaifu
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD-𝗔𝗨𝗗𝗜𝗢-𝗙𝗫 』
│ ⬡ earrape
│ ⬡ deep
│ ⬡ blown
│ ⬡ bass
│ ⬡ nightcore
│ ⬡ fat
│ ⬡ fast
│ ⬡ robot
│ ⬡ tupai
│ ⬡ smooth
│ ⬡ slow
│ ⬡ reverse
╰──────────────────⭓
⭓──────────────────⭓『 NOVA-MD 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 』
│ ⬡ bonk
│ ⬡ bully
│ ⬡ yeet
│ ⬡ slap
│ ⬡ nom
│ ⬡ poke
│ ⬡ awoo
│ ⬡ wave
│ ⬡ smile
│ ⬡ dance
│ ⬡ smug
│ ⬡ blush
│ ⬡ cringe
│ ⬡ sad
│ ⬡ happy
│ ⬡ shinobu
│ ⬡ cuddle
│ ⬡ glomp
│ ⬡ handhold
│ ⬡ highfive
│ ⬡ yeet
│ ⬡ kick
│ ⬡ kill
│ ⬡ kiss
│ ⬡ cry
│ ⬡ bite
│ ⬡ lick
│ ⬡ pat
│ ⬡ hug
╰──────────────────⭓
───────────────────⭓
⚡ JON-SNOW TECH ⚡
───────────────────⭓
`;

    await sock.sendMessage(m.from, {
      image: { url: profilePictureUrl },
      caption: menuText.trim(),
      contextInfo: {
        forwardingScore: 5,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "NOVA-MD",
          newsletterJid: "120363397722863547@newsletter",
        },
      }
    }, { quoted: m });
  }
};

export default menu;
          
