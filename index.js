const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const fs = require('fs')
const appMenu = require('./config/menu')

let backups, late = [
    {
      label: 'backups',
      submenu: [
        {
          label: 'about',
          selector: 'orderFrontStandardAboutPanel:'
        }
      ]
    }
  ]
const createWindow = () => {
  backups = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 500,
    title: 'backups',
    zoomToPageWidth: true,
    titleBarStyle: 'hidden',
    frame: false,
    show: false
  })

  const menu = Menu.buildFromTemplate(late)
  Menu.setApplicationMenu(menu)

  backups.loadURL(`file://${__dirname}/dev/index.html`)
  backups.webContents.on( 'did-finish-load', () => backups.show())
  backups.on('close', e => backups = null)
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  app.quit()
})
app.on('activate',() => {
  if (app == null) {
    createWindow()
  }
  backups.show()
})
