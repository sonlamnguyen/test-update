'use strict';

/* eslint-disable no-path-concat, import/no-unresolved */

const { app, BrowserWindow } = require('electron');
const updater                = require('electron-simple-updater');


updater.init({
  checkUpdateOnStart: false,
  autoDownload: false,
  url: 'https://raw.githubusercontent.com/sonlamnguyen/test-update/master/updates.json',
  version: '0.0.1'
});

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    autoHideMenuBar: true,
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
