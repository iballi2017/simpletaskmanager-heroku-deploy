//Install express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const app_path = './dist/ng11-template';

// Serve only the static files form the dist directory
app.use('/', express.static(path.join(__dirname, app_path)));

app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, app_path + 'index.html')),
);

// Start the app by listening on the default Heroku port
app.listen(PORT, ()=> console.log(`app listening to ${PORT}`));