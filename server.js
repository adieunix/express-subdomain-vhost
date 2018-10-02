const connect = require('connect');
const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const vhost = require('vhost');
const app = express();

/* STG */
var stg = connect();
stg.use(serveStatic('public/stg/www/'));

/* LIVE */
var live = connect();
live.use(serveStatic('public/live/'));

app.use(bodyParser.json());

/* VHOST */
app.use(vhost('stg.mitelor.id', stg)); 
app.use(vhost('live.mitelor.id', live));

// Start server
var port = 3124;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});