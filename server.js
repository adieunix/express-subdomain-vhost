const connect = require('connect');
const express = require('express');
const bodyParser = require('body-parser');
const vhost = require('vhost');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

/* STG.ID */
var stg = express();
stg.use(function(req, res){
    if (!module.parent) console.log(req.vhost);
    res.end('Welcome to STG');
});

/* LIVE.ID */
var live = express();
live.use(function(req, res){
    if (!module.parent) console.log(req.vhost);
    res.end('Welcome to LIVE');
});

/* VHOST */
app.use(vhost('stg.mitelor.id', stg)); 
app.use(vhost('live.mitelor.id', live));

// Start server
var port = 3124;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});