<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=8A2BE2&center=true&vCenter=true&width=1000&height=200&lines=NOVA-MD;VERSION+2025;BY+JON+SNOW" alt="Typing SVG" />
  </a>
</p>

<h1 align="center">✨ THE NEXT GEN WHATSAPP BOT ✨<br>BY JON-SNOW</h1>

---

<p align="center">
  <img src="https://files.catbox.moe/621a36.jpg" width="700"/>
</p>

---

<p align="center">
  <a href="https://github.com/jon-snow-tech-bot">
    <img title="Author" src="https://img.shields.io/badge/Author-JON%20SNOW-ff004d?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://whatsapp.com/channel/0029VbB2p44KWEKt0C6sx225">
    <img title="Join WhatsApp Channel" src="https://img.shields.io/badge/Join-WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  </a>
</p>

<p align="center">
  <img src="https://profile-counter.glitch.me/NOVA-MD/count.svg" alt="Visitor Count" />
</p>

---

## ✨ Features

- ✅ QR Code Generator for WhatsApp Pairing  
- ✅ Session Sharing System  
- ✅ Fully Open Source  
- ✅ Auto QR to DM  
- ✅ Session ID Generator (`NOVA-SESSION-ID`)  
- ✅ Multi Deploy Options (Render, Heroku, Koyeb, etc.)

---

## ⚙️ Deploy Easily

### 🔑 Get Your Session ID
[![NOVA-MD SESSION](https://img.shields.io/badge/NOVA%20-MD%20SESSION-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://session-id-9khf.onrender.com)


### 🔑 Get PAIR CODE
[![NOVA-MD PAIR](https://img.shields.io/badge/NOVA%20-MD%20SESSION-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://session-id-9khf.onrender.com)


---

### 🚀 Fork This Repo

<p align="center">
  <a href="https://github.com/jon-snow-tech-bot/NOVA-MD/fork">
    <img src="https://img.shields.io/badge/Fork%20This-Repository-8A2BE2?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

---

### ☁️ Deploy To Platforms

<p align="center">
  <a href="https://replit.com/github/jon-snow-tech-bot/NOVA-MD">
    <img src="https://img.shields.io/badge/Deploy%20To%20Replit-FFA500?style=for-the-badge&logo=replit&logoColor=white" />
  </a>
  <a href="https://railway.app/new/template?template=https://github.com/jon-snow-tech-bot/NOVA-MD">
    <img src="https://img.shields.io/badge/Deploy%20To%20Railway-8B5CF6?style=for-the-badge&logo=railway&logoColor=white" />
  </a>
  <a href="https://render.com/">
    <img src="https://img.shields.io/badge/Deploy%20To%20Render-06B6D4?style=for-the-badge&logo=render&logoColor=white" />
  </a>
</p>

<p align="center">
  <a href="https://dashboard.heroku.com/new?template=https://github.com/jon-snow-tech-bot/NOVA-MD/tree/main">
    <img src="https://img.shields.io/badge/Deploy-Heroku-FF004D?style=for-the-badge&logo=heroku&logoColor=white" />
  </a>
  <a href="https://host.talkdrove.com/share-bot/82">
    <img src="https://img.shields.io/badge/Deploy-TaikDrove-6971FF?style=for-the-badge&logo=google-cloud&logoColor=white" />
  </a>
  <a href="https://app.koyeb.com/services/deploy?type=git&repository=jon-snow-tech-bot/NOVA-MD-V1&ports=3000">
    <img src="https://img.shields.io/badge/Deploy-Koyeb-FF009D?style=for-the-badge&logo=koyeb&logoColor=white" />
  </a>
</p>

---

### 📦 Download the Bot File

<p align="center">
  <a href="https://github.com/jon-snow-tech-bot/NOVA-MD/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/Download%20Bot-file-FF009D?style=for-the-badge&logo=github&logoColor=white" alt="Download Bot File" />
  </a>
</p>

---

### ⚙️ Configuration `.env` File

```env
SESSION_ID="NOVA~MD~"
AUTO_READ_STATUS=true
STATUS_READ_MSG="*Status Seen By NOVA-MD⚡*"
AUTO_STATUS_REPLY=false
AUTO_REJECT_CALLS=false
MODE="public"
WELCOME=false
AUTO_READ_MESSAGES=false
AUTO_TYPING=false
OWNER_NAME="JON-SNOW"
OWNER_NUMBER="50949100359"
AUTO_RECORDING=false
ALWAYS_ONLINE=false
AUTO_BLOCK=true
AUTO_REACT=false
PREFIX="."
```

``` DEPLOY ON WORKFLOW ⚡

name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh

```

## ❤️ Credits
[![GitHub - jon-snow-tech-bot](https://img.shields.io/badge/GitHub-jon-snow--tech-bot-181717?style=for-the-badge&logo=github)](https://github.com/jon-snow-tech-bot)

---
[![ THANKS TO jon-snow-tech-bot](https://img.shields.io/badge/GitHub-jon-snow--tech-bot-181717?style=for-the-badge&logo=github)](https://github.com/jon-snow-tech-bot)
