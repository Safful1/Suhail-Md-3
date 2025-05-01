const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_37_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYyLFxuICAgICAgICA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDY0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqVjRMcTlCUTBBbnVPbEwvWkNUa0VuNXRWTkdKanFNZ0FTZzBja0Jsbm9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3VVJzUFNlelNYNlY5c0RYU0JGNzVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwYTY0ZDRmLWU5MmEtNDIwMi04MWE4LTdhM2UxMmY1ZDI2ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICA2MyxcbiAgICAgIDEyNyxcbiAgICAgIDIxNCxcbiAgICAgIDQsXG4gICAgICAzNCxcbiAgICAgIDE4NSxcbiAgICAgIDE0NyxcbiAgICAgIDk3LFxuICAgICAgMTUwLFxuICAgICAgMTgxLFxuICAgICAgODMsXG4gICAgICAxNixcbiAgICAgIDEwMSxcbiAgICAgIDE1OCxcbiAgICAgIDE1OSxcbiAgICAgIDExLFxuICAgICAgMTg0LFxuICAgICAgNDEsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTUyLFxuICAgICAgMjUwLFxuICAgICAgMyxcbiAgICAgIDQ2LFxuICAgICAgMTE2LFxuICAgICAgMjA3LFxuICAgICAgMTA1LFxuICAgICAgMjI5LFxuICAgICAgNDQsXG4gICAgICAxMTcsXG4gICAgICA1NixcbiAgICAgIDUwLFxuICAgICAgNzAsXG4gICAgICAxOSxcbiAgICAgIDE5MCxcbiAgICAgIDIyMSxcbiAgICAgIDIxNixcbiAgICAgIDIxMixcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZYRDVaNExMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNTYyMzg5Nzg6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2Mzg0ODc4MzI4MjE5MzoyOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJzX2FmZnVs8J+kjVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01TS2pQRUhFSkx2ejhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidzQ2M0pWRWUrVjlrUXRiZXArUHJoUkRwNVIvemJ0UjAzNnRtbFFZamhnOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwQitOSis1T1VuUFMrR1BZTktoSUd4ZitUdEFhRndrM0tPSGk0eitweHNsdU9VM2xNQXlyTWxaUXBtd01FVEpFREc1eitBUVdhaUNZVm03YXllaThpdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwcStJYmdjb0t3RGt1T1plSzhwaFg2T2VtaUFOYTMrSjNSdm9TY2lNWWZMYk9qcWY3OXlrWU53d20wNzcwbzFLMktOYktjVWQ5VHgvaEpMK2hYbENqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNTYyMzg5Nzg6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDYxMzkwMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPMHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU8wei5qc29uIjogIntcImtleURhdGFcIjpcImJXc1l0Qjk0WE5DZGpVUC9EL0xCdVFHbzQveVl3Njdzb3A5N3NRdjFSVGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExNjIyNDMyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ2MTM5MDMxNjI0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
