```js
const { default: makeWASocket, useSingleFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');

const { state, saveState } = useSingleFileAuthState('./session.json');

async function startNovaBot() {
    const socket = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: require('pino')({ level: 'silent' }),
    });

    socket.ev.on('creds.update', saveState);

    socket.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            if ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
                startNovaBot();
            } else {
                console.log('Bot logged out');
            }
        }
        if (connection === 'open') {
            console.log('✅ NOVA-MD is now connected!');
        }
    });

    socket.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;
const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
        const sender = msg.key.remoteJid;

        if (text === '.ping') {
            await socket.sendMessage(sender, { text: '🏓 Nova-MD is alive!' });
        }

        // Ajoute ici d'autres commandes selon ton besoin
    });
}

startNovaBot();
```

Assure-toi d’avoir installé ces dépendances :
```bash
npm install @whiskeysockets/baileys pino
```

Et que ton fichier `session.json` existe après un premier scan du QR code.
