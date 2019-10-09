import app from "./app";

const https = require('https');
const fs    = require('fs');
const options = { 
    key: fs.readFileSync('./cert/orekey.pem'),
    cert: fs.readFileSync('./cert/orecert.pem')
    };
        
        
const server = https.createServer(options, app).listen(app.get("port"), () => {
    console.log("  App is running at https://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

export default server;