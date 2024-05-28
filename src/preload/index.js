const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  queryDatabase: (config, query) => ipcRenderer.invoke('query-database', config, query),
  saveConfig: (config) => ipcRenderer.invoke('save-config', config),
  loadConfigs: () => ipcRenderer.invoke('load-configs'),
  removeConfig: (configName) => ipcRenderer.invoke('remove-config', configName),
  connectToDB: (formData) => ipcRenderer.invoke('connect-to-db', formData),
});