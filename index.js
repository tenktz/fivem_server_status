// no no don't touch me there this is my no no squere
const Discord = require('discord.js');
const client = new Discord.Client();

// FIVEM STATUS 

const request = require('request');

var players = "0";

// CONFIG
const { token } = require('./config.json');

/////////////////// STATUS SERWERA FIVEM (GORILLARP)

client.on('ready', async () => {
    setInterval(async () => {
        await request(`http://your_ip_here:port/info.json`, async (error) => {
        if (error) {
            client.user.setActivity(`OFFLINE`, {
                type: 'PLAYING',
            });
        } else {
            await request(`http://your_ip_here:port/players.json`, async (error, response, playerss) => {
                players = JSON.parse(playerss);
                client.user.setActivity(`${players.length}/32 players`, {
                    type: 'PLAYING',
                });
            });
        }
    });
}, 10 * 1000);
});

/// LOGOWANIE

client.once('ready', () => {
    console.log(`Logged as ${client.user.tag} correctly!`)
});

client.login(token);