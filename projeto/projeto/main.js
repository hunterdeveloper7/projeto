const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    let win = new BrowserWindow({
        width: 375,  // Simulando tamanho de um celular (iPhone X)
        height: 812,
        webPreferences: {
            nodeIntegration: false
        }
    });

    // Carregar o HTML local
    win.loadFile(path.join(__dirname, "public/index.html"));

    // Remover o menu padrão do Electron
    win.setMenu(null);
}

app.whenReady().then(createWindow);
