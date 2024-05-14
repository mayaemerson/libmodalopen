# 🖼️ Modal de Imagem do Drive para Google Sheets 🚀

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://www.example.com)](#)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

Lib para exibir imagens do Google Drive em modais personalizados no Google Sheets.

## ✨ Destaques

- **Fácil integração:** Adicione a biblioteca ao seu projeto Apps Script com o Clasp.
- **Com duas funções:** `permissoes` / `onOpen`.

## 🛠️ Tecnologias

- Google Apps Script
- Clasp
- VSCode
- Prettier

## 🚀 Como usar

1. No Editor do Apps Script, em "Bibliotecas", cole o ID da biblioteca (`17Xi4SigorbUxebXhlPeHow3UxSU7_gFH3evtVDZaFxRs9QtWljxL5D1G`).
![Incluir Biblioteca](./imagem/incluedlib/conectarlib.png) 

2. Copie e cole o código abaixo no editor do App Script.
```javascript
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
4. Atualize a planilha (F5) ou abra-a novamente.
5. Se tudo correu bem, sua planilha exibirá o modal ao abrir.

## 🤖 Código da planilha (Código.gs)


 ##

