const readline = require("readline-sync");

const configuracoes = {
    tema: "escuro",
    idioma: "pt-BR",
    notificacoes: true,
    autoSave: false,
    fonte: "16px"
};

const chaves = ["tema", "idioma", "notificacoes", "autoSave", "fonte"];

for (let i = 0; i < chaves.length; i++) {
    console.log(chaves[i] + ": " + configuracoes[chaves[i]]);
}