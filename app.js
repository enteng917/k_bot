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

var luis = 'https://api.projectoxford.ai/luis/v1/application?id=23da40c1-2009-4a4b-8298-474a0f929ed6&subscription-key=41d38fbedaa14628869b6883d45de360';
var recognizer = new builder.LuisRecognizer(luis);
var intents = new builder.IntentDialog({ recognizers: [recognizer] });

bot.dialog('/', intents);
intents.do('greeting', function(session, args) {
    session.send('greeting');
    session.send(args);
});


//=========================================================
// Bots Dialogs
//=========================================================

//bot.dialog('/', function (session) {
//    session.send(session.message);
//    intents.replyReceived(session);
//});


