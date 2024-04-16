import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (_, params) => {
  console.log(params)

  return [
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' }
  ]
})
