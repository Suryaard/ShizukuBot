/*

 * Simple base bot whatsapp
 * Created by Anggazyy ZcoderX
 * Support by ChatGPT Assistant
 * Jangan delete credit ya ^^
 
 Contact Support:
 📞 Whatsapp : wa.me/6288804148639
 ☎ Telegram : t.me/anggazyydev
 
*/

require("./settings/cfg")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const cheerio = require('cheerio')
const speed = require('performance-now')
const os = require('os')
const path = require('path')
const archiver = require('archiver')
const timestampp = speed();
const latensi = speed() - timestampp
const { deobfuscate } = require('obfuscator-io-deobfuscator');
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom, formatp } = require('./serverside/libary/myfunc')
const { spotifyDown } = require('./serverside/libary/spotify')
const prem = require("./serverside/libary/premium");
const { ytdl } = require('./serverside/libary/ytdl');
let premium = JSON.parse(fs.readFileSync('./serverside/system/premium.json'));

module.exports = async (anggazyy, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""


const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (anggazyy.user.id.split(':')[0]+'@s.whatsapp.net' || anggazyy.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await anggazyy.decodeJid(anggazyy.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const isPrem = isCreator ? true : prem.checkPremiumUser(m.sender, premium)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''

const groupMetadata = m.isGroup ? await anggazyy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false


// Database path
let linkRegex = /https:\/\/open\.spotify\.com\/track\/[0-9A-Za-z]+/i;


// Console message
if (m.message) {
console.log(
    chalk.inverse(' 📬  [ Message ] ') + 
    ' ' + 
    chalk.black.bgGreen(new Date().toLocaleString()) + 
    ' ' + 
    chalk.black.bgBlue(budy || m.mtype) + '\n' +
    chalk.magenta('📣 Dari: ') + chalk.green(pushname) + ' ' + chalk.yellow(`(${m.sender})`) + '\n' +
    chalk.bgMagenta('📍 Di: ') + chalk.green(m.isGroup ? 'Grup' : 'Private Chat') + ' ' + chalk.green(from) + 
    '\n' + chalk.greenBright('✧──────── ANGGAZYY OFC ─────────✧')
   );
 }

// Self & public
if (!anggazyy.false) {
if (!m.key.fromMe) return
} 

// Function Sinkron
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
  }



    
    
// Variable 

const fkontak = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'Anggazyy Developer. C',
                    "jpegThumbnail": ''
                          }
                        }
                      }


const totalFitur = () =>{
            var mytext = fs.readFileSync("./anggazyy.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        
const imageUrls = [
        'https://j.top4top.io/p_3221erxmh1.jpg',
        'https://c.top4top.io/p_322152rrk1.jpg',
        'https://pomf2.lain.la/f/omoyqod.jpg',
        'https://pomf2.lain.la/f/3h85exj.jpg',
        'https://pomf2.lain.la/f/w8frl7l4.jpg',
        'https://pomf2.lain.la/f/8ml6d8zt.jpg',
        'https://pomf2.lain.la/f/omoyqod.jpg'
    ];

    // Randomized Image © Anggazyy Developer. C
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

const reply = async (teks) => {
return anggazyy.sendMessage(m.chat, {
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `Made by Suryatzyy Developer`,
body: `🔴 Active : ${runtime(process.uptime())}`,
previewType: "VIDEO",
thumbnail: randomImageUrl,
sourceUrl: `https://anggazyysite.vercel.app`,
mediaUrl: `https://c.top4top.io/p_322152rrk1.jpg`
}
},
text: teks
}, {
quoted: m
})
}


// Function Asinkron ( Async )
async function deobfuscateCode(text) {
        const result = deobfuscate(text);
        return result;
}
    

async function EncryptJs(code) {
    let res = await fetch(`https://api.alyachan.dev/api/obfuscator?code=${code}&apikey=keymu`);
    let jsonResponse = await res.json(); // Mendapatkan respons JSON

    if (jsonResponse.status) {
        return jsonResponse.data; // Mengembalikan bagian data dari respons (kode yang telah diobfuscate)
    } else {
        throw new Error(jsonResponse.message || 'Terjadi kesalahan dalam obfuscation');
    }
}


async function EncryptJs2(code) {
    let res = await fetch(`https://ai.xterm.codes/api/tools/js-protector?code=${code}&key=keymu`);
    let jsonResponse = await res.json(); // Mendapatkan respons JSON
    return jsonResponse.data; // Mengembalikan bagian data dari respons
}


    
switch(command) {
case 'menu': 
let menu = `

*Informasi Script:*
*Version* : *1.0*
*Type* : *Case*
*Libary*: *@Whiskeysockets/baileys*
*Active* : *${runtime(process.uptime())}*

*_Don't let yourself fall again in the midst of a big mistake for yourself. 💭_*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
𐓷 *Tools*
⇝ tourl *Reply image*
⇝ get *Input url*
⇝ encrypt *Input code*
⇝ encryptv2 *Input code*
⇝ decrypt *Input code*

𐓷 *Downloader*
⇝ spotify *Url music*
⇝ tiktok *Url tiktok*
⇝ play *Title song*
⇝ mediafire *Input link*


𐓷 *Creator*
⇝ backup *Backup Script*
⇝ clear *Session*
⇝ self *Pribadi only*
⇝ public *Everyone*
⇝ addprem *Input number*
⇝ delprem *Input number*
⇝ getcase *Get fitur*
⇝ renamecase *Rename fitur*
⇝ addcase *Add fitur*
⇝ hapuscase *Delete fitur*
⇝ getfunc *Get function*
⇝ editcase *Edit structur*
⇝ >
⇝ =>
⇝ $
`
 anggazyy.sendMessage(m.chat, {
    video: {
        url: 'https://files.catbox.moe/keg4qr.mp4'
    },
    caption: menu,
    gifPlayback: true,
    gifAttribution: 1,
    contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
            showAdAttribution: true,
            title: '𐙚 Devil Travaz - Auto',
            body: 'Bot whatsapp multi fungsi using whiskeysockets/baileys make a simple.',
            thumbnailUrl: randomImageUrl,
            sourceUrl: 'https://anggazyysite.vercel.app',
            mediaType: 1,
            renderLargerThumbnail: true
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '0@newsletter',
            newsletterName: 'Powered by : Anggazyy',
            serverMessageId: -1
        }
    }
}, { quoted: fkontak });
 break


    
case 'get': {
if (!isCreator) return m.reply('You do not have permission to access this feature.');
if (!text) return m.reply("Please Input url.\nExample: .get https://anggazyysite.vercel.app");
try {
var check = await fetchJson(text);
let jsonContent = JSON.stringify(check, null, 2);
await anggazyy.sendMessage(m.chat, { document: Buffer.from(jsonContent, 'utf-8'), fileName: 'index.html', mimetype: 'text/html' }, { quoted: m, caption: 'Sukses Fetching' });
    } catch (e) {
        return m.reply(e.toString());
    }
}
break;

case 'sc':
case 'script':
m.reply(`Halo! aku menggunakan script dari Anggazyy\nLink: *https://github.com/AnggazyyZcoder/ShizukuBot*`)
break


case "play": {
if (!text) return m.reply(`*Example:* ${prefix + command} phdotograph`)
if (!yangbener) return m.reply(`${global.anjg}`)
let search = await yts(text);
let telaso = search.all[0].url;
var responsek = await ytdl(telaso)
var puki = responsek.data.mp3
anggazyy.sendMessage(m.chat, { audio: { url: puki },
mimetype: "audio/mpeg",
fileName: "kiuu.mp3",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: search.all[0].title,
sourceUrl: search.all[0].timestamp,
thumbnailUrl: search.all[0].thumbnail,
}}},{quoted:m})
}
break
case "backup":{
if (!isCreator) return m.reply('You do not have permission to access this feature.');
if (!yangbener) return m.reply(`${global.anjg}`)
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await anggazyy.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break        

case "tourl": {
if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) return m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let q = m.quoted ? m.quoted : m
anggazyy.sendMessage(from, {
react: {
text: '🎁',
key: m.key
}
});
let media = await q.download()
let uploadImage = require('./serverside/libary/catmoe')
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`Your Link : ${link}\nExpired Date : Liftime`)
}
break
case 'spotify':
  if (!text) return m.reply(`Urlnya mana?\n*Contoh:* ${prefix + command} https://open.spotify.com/track/xxxxxx`)
  anggazyy.sendMessage(m.chat, { react: { text: '👒', key: m.key }})
  let urlSpo = linkRegex.test(text)
  if (!urlSpo) return m.reply(`Hanya Support Url Track *(music)*\n*Contoh Url:* https://open.spotify.com/track/xxxxxx`)
  let response = await spotifyDown(text)
  let { nama, title, durasi, thumb, url } = response
  
  if (response) {
  let cap = `*© 𝖲𝗉𝗈𝗍𝗂𝖿𝗒 𝖬𝗎𝗌𝗂𝖼*

*[🏷️] Info Music*
* *Title:* ${title}
* *Durasi:* ${durasi}
* *Artis:* ${nama}
* *Spotify:* ${text}

\`Kamu Dapat Mencari Music Spotify\`\n*Caranya:* ${prefix}spotisearch <music name>`
  await anggazyy.sendMessage(m.chat, { text: cap, contextInfo: { mentionedJid: [m.sender], externalAdReply: { mediaUrl: '', mediaType: 1, title: title, body: '© Anggazyy Developer', thumbnailUrl: thumb, sourceUrl: '', renderLargerThumbnail: true, showAdAttribution: false } } }, { quoted: m });
 anggazyy.sendMessage(m.chat, { audio: { url: url }, mimetype: 'audio/mp4' }, { quoted: m })
  } else {
     m.m.reply(eror)
    }
  break
        
case 'tiktok': {
async function tiktok(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

 const response = await axios({
 method: 'POST',
 url: 'https://tikwm.com/api/',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'Cookie': 'current_language=en',
 'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
 },
 data: encodedParams
 });
 const videos = response.data.data;
 const result = {
 title: videos.title,
 cover: videos.cover,
 origin_cover: videos.origin_cover,
 no_watermark: videos.play,
 watermark: videos.wmplay,
 music: videos.music
 };
 resolve(result);
 } catch (error) {
 reject(error);
 }
 });
}
if (args.length == 0) return m.reply(`☘️ *Link Tiktoknya Mana?*`)
if (!isUrl(args[0])) return m.reply('⚠️ *Itu Bukan Link Yang Benar*')
m.reply(mess.wait)
let cap = ``
let res = await tiktok(`${args[0]}`)
anggazyy.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: cap, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
anggazyy.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break
case 'clear': {
if (!isCreator) return m.reply('You do not have permission to access this feature.');
                fs.readdir("./sessionserver", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return m.reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return m.reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    m.reply(teks)
                    await sleep(2000)
                    m.reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./sessionserver/${file}`)
                    });
                    await sleep(2000)
                    m.reply("Successfully deleted all the trash in the session folder")
                });
            }
            break

     
case 'self': {
if (!isCreator) return m.reply('You do not have permission to access this feature.')
anggazyy.public = false
m.reply(`Succes switch mode bot sekarang mode self`)
}
break

case 'public': {
if (!isCreator) return m.reply('You do not have permission to access this feature')
anggazyy.public = true
m.reply(`Succes switch mode bot sekarang mode public`)
}
break

case 'decrypt':
    if (!isPrem) return m.reply('*You do not have permission to access this feature.*');
    if (!text) return m.reply('Mana textnya');
    const memek = await deobfuscate(text);
    const water = `/*\n * Deobfuscated By Anggazyy Developer\n * Buy Script Pv me\n*/\n\n`;
    const lastt = water + memek; 
    await anggazyy.sendMessage(m.chat, { 
        document: Buffer.from(lastt, 'utf-8'), 
        fileName: 'deobfuscated_code.js', 
        mimetype: 'application/javascript' 
    }, { quoted: m, caption: 'Sukses Deobfuscation' });

    break;
case 'encrypt':
    if (!isPrem) return m.reply('*Khusus premium atau developer bot.*');
    if (!text) return m.reply('Mana textnya');

    // Proses deobfuscation
    const kkkk = await EncryptJs(text);

    // Pastikan hasilDeobfuscate adalah string dan hapus tanda kutip di awal dan akhir
    const cleanResult = kkkk.replace(/^"|"$/g, ''); // Menghapus tanda kutip di awal dan akhir

    // Tambahkan watermark di awal hasil
    const watermark = `/*\n * Obfuscated By Anggazyy Developer\n * Buy Script Pv me\n\n*/\n\n`;
    const finalResult = watermark + cleanResult; // Gabungkan watermark dengan hasil asli

    // Mengirim hasil sebagai file JavaScript
    await anggazyy.sendMessage(m.chat, { 
        document: Buffer.from(finalResult, 'utf-8'), 
        fileName: 'obfuscated_code.js', // Nama file yang akan dikirim
        mimetype: 'application/javascript' // MIME type untuk JavaScript
    }, { quoted: m, caption: 'Suksess' });

    break;
case 'mediafire': {
    async function mediafiredll(url) {
        const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
        const $ = cheerio.load(res.data);
        
        const fileurl = $('#downloadButton').attr('href');
        const filename = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div')
            .attr('title')
            .replaceAll(' ', '')
            .replaceAll('\n', '');
        
        const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
        const filesize = $('#downloadButton').text()
            .replace('Download', '')
            .replace('(', '')
            .replace(')', '')
            .replace('\n', '')
            .replace('\n', '')
            .replace('                         ', '')
            .replaceAll(' ', '');
        
        let filetype = '';
        let rese = await axios.head(fileurl);
        filetype = rese.headers['content-type'];

        return { filename, filesize, date, filetype, fileurl };
    }

    let input = `*Example*: ${prefix + command} https://www.mediafire.com/xxxxxxx*`;
    
    if (!text) return m.reply(input);
    
    const dataJson = await mediafiredll(text);
    const { filename, filesize, date, filetype, fileurl } = dataJson
    if (filesize.split('MB')[0] >= 100) {
        return m.reply('*Ih gede banget size nya, gak mao ah😠*');
    }

    await sleep(500);
    
    const caption = `≡ *MEDIAFIRE*

▢ *Name* : ${filename}
▢ *Size* : ${filesize}
▢ *Type* : ${filetype}
▢ *UploadAt*: ${date}`;

     anggazyy.sendMessage(m.chat, { document : { url : fileurl}, fileName : filename, caption: caption, mimetype: filetype }, { quoted : m });
}
break;
case 'addprem': {
if (!isCreator) return m.reply('Khusus developer')
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau yang berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
} else {
var cekap = await anggazyy.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
break
case 'renamecase':
    if (!q) return m.reply('Format tidak valid. Contoh: renamecase izintes|izintesnew');
    if (!isCreator) return m.reply('Khusus owner');

    // Pisahkan input menjadi nama case lama dan nama case baru
    const [oldCaseName, newCaseName] = q.split('|').map(name => name.trim());

    if (!oldCaseName || !newCaseName) {
        return m.reply('Format tidak valid. Contoh: renamecase izintes|izintesnew');
    }

    // Path ke file yang berisi switch-case
    const rinembos = path.join(__dirname, 'anggazyy.js');

    try {
        // Baca file secara sinkron
        let data = fs.readFileSync(rinembos, 'utf8');

        // Ekspresi reguler untuk mencari case berdasarkan nama lama
        const caseRegex = new RegExp(`case\\s+'${oldCaseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex === -1) {
            return m.reply(`Case '${oldCaseName}' tidak ditemukan.`);
        }

        // Cari case berikutnya setelah case yang dicari
        const nextCasePattern = /case\s+'/g;
        nextCasePattern.lastIndex = startIndex + 1;
        const nextCaseMatch = nextCasePattern.exec(data);

        // Update nama case
        const updatedData = data.replace(caseRegex, `case '${newCaseName}':`);
        
        // Tulis kembali ke file
        fs.writeFileSync(rinembos, updatedData, 'utf8');
        m.reply(`Case '${oldCaseName}' sukses menjadi '${newCaseName}'!`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat membaca atau menulis file.');
    }
    break;
    case 'editcase':
    if (!q) return m.reply('Mana case yang ingin diedit? Format: .editcase case \'namafitur\':\n\n<kode baru>');
    if (!isCreator) return m.reply('Khusus owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return m.reply('Format tidak benar. Contoh: .editcase case \'namafitur\':\n\n<kode baru>');
    }

    const caseName = match[1]; 
    const newCode = q.replace(caseNameRegex, '').trim(); 

   
    const filenyabang = path.join(__dirname, 'anggazyy.js');

    try {
        
        let data = fs.readFileSync(filenyabang, 'utf8');
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);

            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }

           
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);

            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }

            if (endIndex !== -1) {
                const updatedCode = `case '${caseName}':\n${newCode}\n`;
                data = data.slice(0, startIndex) + updatedCode + data.slice(endIndex);
                fs.writeFileSync(filenyabang, data, 'utf8');
                m.reply(`Succesfully update case ${q}!`);
            } else {
                m.reply('Maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            m.reply('Sorry, case nya gada di file anggazyy.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('Eror, silahkan cek console untuk lihat apa yang eror');
    }
    break;
    case 'getfunc':
    if (!isCreator) return m.reply('Khusus owner');
    
    const anggazyyZcoder = path.join(__dirname, 'anggazyy.js');
    
    try {
        const data = fs.readFileSync(anggazyyZcoder, 'utf8');
        
        if (!q) {
           
            const funcRegex = /async function (\w+)\s*\([^)]*\)\s*{/g;
            let functionsList = [];
            let match;

            
            while ((match = funcRegex.exec(data)) !== null) {
                functionsList.push(match[1]); 
            }

            if (functionsList.length > 0) {

                m.reply(`Mau cari function apa?\n\n${functionsList.map((func, index) => `${index + 1}. ${func}`).join('\n')}`);
            } else {
                m.reply('Tidak ada async function yang ditemukan.');
            }
            return; 
        }

        
        const funcRegex = new RegExp(`async function ${q}\\s*\\([^)]*\\)\\s*{`, 'g');
        const startIndex = data.search(funcRegex);
        
        if (startIndex !== -1) {
            let openBrackets = 0;
            let endIndex = startIndex;
            for (let i = startIndex; i < data.length; i++) {
                if (data[i] === '{') {
                    openBrackets++;
                } else if (data[i] === '}') {
                    openBrackets--;
                    if (openBrackets === 0) {
                        endIndex = i;
                        break;
                    }
                }
            }
            
            const extrakbang = data.slice(startIndex, endIndex + 1);
            m.reply(`*YOUR FUNCTION*:\n\n${extrakbang}`);
        } else {
            m.reply('Nama func nya gada bro, coba cari lain');
        }
    } catch (err) {
        console.error(err);
        m.reply('Error! cek console mu.');
    }
    break;
case 'addcase': {
    if (!q) return m.reply('Mana case yang ingin ditambahkan? Format: .addcase case \'namafitur\':\n\n<kode baru>');
    
    if (!isCreator) return m.reply('Khusus owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return m.reply('Format tidak benar. Contoh: .addcase case \'namafitur\':\n\n<kode baru>');
    }

    const caseName = match[1]; 
    const newCode = q.replace(caseNameRegex, '').trim(); // Mengambil kode baru setelah nama case

    // Memastikan tidak ada 'break;' di akhir kode baru
    const hasBreak = newCode.endsWith('break;');
    if (hasBreak) {
        newCode = newCode.slice(0, -6).trim(); // Menghapus 'break;' jika ada
    }

    const filenyabang = path.join(__dirname, 'anggazyy.js');

    try {
        let data = fs.readFileSync(filenyabang, 'utf8');
        const insertPosition = data.lastIndexOf('break;'); // Mencari posisi terakhir dari break;

        if (insertPosition !== -1) {
            // Membuat string untuk case baru
            const newCaseCode = `\ncase '${caseName}':\n${newCode}\n`;
            // Menyisipkan case baru setelah break terakhir
            data = data.slice(0, insertPosition + 'break;'.length) + newCaseCode + data.slice(insertPosition + 'break;'.length);
            fs.writeFileSync(filenyabang, data, 'utf8');
            m.reply(`Case '${caseName}' telah berhasil ditambahkan.`);
        } else {
            m.reply('Gagal menemukan posisi untuk menambahkan case. Pastikan format case di dalam file benar.');
        }
    } catch (err) {
        console.error(err);
        m.reply('Error, silahkan cek console untuk lihat apa yang eror');
    }
    }
    break;


case 'hapuscase':{
if (!q) return m.reply('Mana case yang ingin dihapus? Format: .hapuscase case \'namafitur\'');

    if (!isCreator) return m.reply('Khusus owner');

    const caseNameRegex = /case\s+'([^']+)':/; 
    const match = q.match(caseNameRegex);

    if (!match) {
        return m.reply('Format tidak benar. Contoh: .hapuscase case \'namafitur\'');
    }

    const caseName = match[1]; 
    const ZcoderAnggazyynihboss = path.join(__dirname, 'anggazyy.js');

    try {
        let data = fs.readFileSync(ZcoderAnggazyynihboss, 'utf8');
        const caseRegex = new RegExp(`case\\s+'${caseName}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);

        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);

            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }

            // Mencari case berikutnya
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);

            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }

            if (endIndex !== -1) {
                // Menghapus case dari file
                data = data.slice(0, startIndex) + data.slice(endIndex);
                fs.writeFileSync(ZcoderAnggazyynihboss, data, 'utf8');
                m.reply(`Case '${caseName}' telah berhasil dihapus.`);
            } else {
                m.reply('Maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            m.reply('Sorry, case nya tidak ada di file anggazyy.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('Error, silahkan cek console untuk lihat apa yang eror');
    }
    }
    break;
        
        case 'getcase':
    if (!q) return m.reply('Mana nama case yang ingin diambil?');
   if (!isCreator) return m.reply('Khusus owner')
    // Path ke file yang berisi switch-case
    const filePath = path.join(__dirname, 'anggazyy.js');
    
    try {
        // Baca file secara sinkron
        const data = fs.readFileSync(filePath, 'utf8');
        
        // Ekspresi reguler untuk mencari case berdasarkan nama
        const caseRegex = new RegExp(`case\\s+'${q}'\\s*:\\s*`, 'g');
        const startIndex = data.search(caseRegex);
        
        if (startIndex !== -1) {
            let endIndex = -1;
            const breakPattern = /break\s*;/g;
            breakPattern.lastIndex = startIndex;
            const breakMatch = breakPattern.exec(data);
            
            if (breakMatch) {
                endIndex = breakMatch.index + breakMatch[0].length;
            }
            
            // Cari case berikutnya setelah case yang dicari
            const nextCasePattern = /case\s+'/g;
            nextCasePattern.lastIndex = startIndex + 1;
            const nextCaseMatch = nextCasePattern.exec(data);
            
            if (nextCaseMatch && (endIndex === -1 || nextCaseMatch.index < endIndex)) {
                endIndex = nextCaseMatch.index;
            }
            
            if (endIndex !== -1) {
                // Ekstrak isi case
                const caseCode = data.slice(startIndex, endIndex);
                m.reply(`Nih case:\n\n${caseCode}`);
            } else {
                // Jika tidak ditemukan batas akhir
                m.reply('Maaf, tidak ditemukan akhir yang jelas untuk case tersebut.');
            }
        } else {
            // Jika case tidak ditemukan, kirimkan pesan
            m.reply('Maaf, case tidak ada dalam file anggazyy.js');
        }
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat membaca file.');
    }
    break;



case 'delprem': {
if (!isCreator) return m.reply('Khusus developer')
if (!args[0]) return m.reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./serverside/system/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
} else {
var cekpr = await anggazyy.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./serverside/system/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
}}
break




case 'encryptv2':
    if (!isPrem) return m.reply('*Khusus premium atau developer bot.*');
    if (!text) return m.reply('Mana textnya');
    // Proses deobfuscation
    const kkkkk = await EncryptJs2(text);

    // Pastikan hasilDeobfuscate adalah string dan hapus tanda kutip di awal dan akhir
    const cleanResulti = kkkkk.replace(/^"|"$/g, ''); // Menghapus tanda kutip di awal dan akhir

    // Tambahkan watermark di awal hasil
    const watermarkk = `/*\n * Obfuscated By Anggazyy Developer\n * Buy Script Pv me\n\n*/\n\n`;
    const utm = watermarkk + cleanResulti; // Gabungkan watermark dengan hasil asli

    // Mengirim hasil sebagai file JavaScript
    await anggazyy.sendMessage(m.chat, { 
        document: Buffer.from(utm, 'utf-8'), 
        fileName: 'obfuscated_code.js', // Nama file yang akan dikirim
        mimetype: 'application/javascript' // MIME type untuk JavaScript
    }, { quoted: m, caption: 'Suksess' });

    break;
  
    


default:
   
    
                
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})

