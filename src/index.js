const express = require('express');
const mongoose = require('mongoose');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

const url = 'mongodb://admin:qwer1234@ds123675.mlab.com:23675/twitterclonedb'
mongoose.connect(url, { useNewUrlParser: true });

app.use((req, res, next) => {
    req.io = io;

    return next();
});


app.use(cors());
app.use(express.json());
app.use(require('./routes'));

const port = process.env.PORT || 6789

server.listen(port, () => {
    console.log(' Server started on port ' + port);
});