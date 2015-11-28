var app = require('app');//represents an instance of electron app
/* represents an instance of the browser window that we're going to create */
var BrowserWindow = require('browser-window');
/* ready - everying is ready to start. */
app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 800, height: 600
  });
  /* Loads the new file into the mainWindow object or when the browser window
     appear, then load the file listed in the loadUrl method */
     mainWindow.loadURL('file://' + __dirname +'/index.html');
})
