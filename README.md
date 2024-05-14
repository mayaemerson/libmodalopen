# 🖼️ Modal de Imagem do Drive para Google Sheets 🚀

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://www.example.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

Lib para exibir imagens do Google Drive em modais personalizados no Google Sheets.

## ✨ Destaques

- **Fácil integração:** Adicione a biblioteca ao seu projeto Apps Script com o Clasp.
- **Com duas funções:** permissoes / onOpen.

## 🛠️ Tecnologias

- Google Apps Script
- Clasp
- VSCode
- Prettier
- Bootstrap 5

## 🚀 Como usar
1. Na Ede do Apps Script em Bibliotecas cole o ID `'17Xi4SigorbUxebXhlPeHow3UxSU7_gFH3evtVDZaFxRs9QtWljxL5D1G'` deixe sempre na verão mais atual.
2. Copie e cole o código no editor do App Script.
3. Depois Execute a função `permissoes()`.
4. Agora de um F5 na planilha ou abra novamete.
5. Se tudo correu bem sua planiha vai funcionar com o modal na abertura da planilha

## Código da planilha (Código.gs)

```javascript
function permissoes() {
  menInit.gerenciarGatilhoUsuarioAtivo();
}

function onOpen() {
 const nomeArquivoImg = 'welcome.jpg'// aqui o nome do arquivo que esta a imgam jpg ou png  lembrando que a imagem tem que está publica.
  const setWidth = '' //Largura do showModal, se não for informado o valor do width vamos assumir que ele e 800
  const setHeight = '' //Altura do showModal, se não for informado o valor do height vamos assumir que ele e 600
  const title = 'Tenha um ótimo trabalho...' // Aqui e sua mensagem
 //Saudações de bom dia se deseja usar deixe com está se não marque como false
 const saudacoes = true


  menInit.abrirModalComImagem(nomeArquivoImg,setWidth,setHeight,title,saudacoes)
}


## 🤝 Contribuindo

Contribuições são bem-vindas! Consulte o guia de contribuição para saber como ajudar.

# libmodalopen
