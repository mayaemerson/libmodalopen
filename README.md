# 🖼️ showModalDialog Ao Abrir a planilha 🚀

[![Drive](https://img.shields.io/badge/Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)](#)
[![Sheets](https://img.shields.io/badge/Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white)](#)
[![JS](https://img.shields.io/badge/JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Node](https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Clasp](https://img.shields.io/badge/Clasp-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white)](#)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)


Biblioteca para exibir imagens do Google Drive em modais personalizados no Google Sheets.

## ✨ Destaques

- **Fácil integração:** Adicione a biblioteca ao seu projeto Apps Script com o Clasp.
- **Com duas funções:** `permissoes` / `onOpen`.
- **Configure:** `nomeArquivoImg` - `setWidth setHeight` -  `title` - `saudacoes`.

## 🛠️ Tecnologias

- Google Apps Script
- Clasp
- VSCode
- Prettier

## 🚀 Como usar

1. No Editor do Apps Script, em "Bibliotecas", cole o ID da biblioteca (`17Xi4SigorbUxebXhlPeHow3UxSU7_gFH3evtVDZaFxRs9QtWljxL5D1G`).

<div align="center">
<img src="./imagem/incluedlib/conectarlib.png" alt="Texto alternativo" width="500" height="250">
</div>

2. Copie e cole o código abaixo no editor do App Script.

```javascript
function permissoes() {
function permissoes() {
  menInit.gerenciarGatilhoUsuarioAtivo();
}

function onOpen() {
  const nomeArquivoImg = 'welcome.jpg'; // Nome do arquivo da imagem (jpg ou png), que deve estar pública.
  const setWidth = ''; // Largura do showModal (opcional, padrão: 800)
  const setHeight = ''; // Altura do showModal (opcional, padrão: 600)
  const title = 'Tenha um ótimo trabalho...'; 
  const saudacoes = true; // Exibir saudações (opcional, padrão: true)

  menInit.abrirModalComImagem(nomeArquivoImg, setWidth, setHeight, title, saudacoes);
}
```
3. Execute a função `permissoes()`.

<div align="center">
<img src="./imagem/incluedlib/execucoes.png" alt="Texto alternativo" width="500" height="250">
</div>

4. Atualize a planilha (F5) ou abra-a novamente.
Se tudo correu bem, sua planilha exibirá o modal ao abrir.
<div align="center">
<img src="./imagem/incluedlib/telaplanilha.png" alt="Texto alternativo" width="500" height="250">
</div>

 ## 🤝 Contribuições são bem-vindas!

 Este projeto é de código aberto e sua colaboração é muito apreciada! Se você tiver alguma ideia, sugestão de melhoria, correção de bugs ou qualquer outra contribuição, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Juntos, podemos tornar esta biblioteca ainda mais útil e completa para a comunidade! 😊

