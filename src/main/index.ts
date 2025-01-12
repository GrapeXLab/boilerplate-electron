import { app, BrowserWindow, ipcMain } from 'electron'
import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { createWindow } from './window'
import { initializeLogger } from './logger'

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  is.dev && initializeLogger(ipcMain)

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
