//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/task-management-app__simple-web-application__frontend-software__angular-11'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/task-management-app__simple-web-application__frontend-software__angular-11/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);