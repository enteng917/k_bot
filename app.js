<!--
var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3000, function () {
   console.log('%s listening to %s ', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: '8673857a-3ccd-470a-a079-408e0cdc317e',
    appPassword: '22iKbgbmZa5CaOgxxdSF5ze'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
server.get('/', function (session) {
    session.send("Hello World" );
});

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    seeeion.send(session.message.text);
    session.send("Hello World!!!" );
});
