function gerenciarGatilhoUsuarioAtivo() {
  // SpreadsheetApp.getUi ()
  // DriveApp.getRootFolder ()
  // UrlFetchApp.fetch ("")
  const usuarioAtivo = Session.getActiveUser().getEmail()
  const gatilhos = ScriptApp.getProjectTriggers()

  // Filtra apenas os gatilhos onOpen do usuário ativo
  const gatilhosUsuarioAtivo = gatilhos.filter(
    gatilho =>
      gatilho.getEventType() === ScriptApp.EventType.ON_OPEN &&
      gatilho.getOwner().getEmail() === usuarioAtivo
  )

  if (gatilhosUsuarioAtivo.length > 0) {
    // O gatilho onOpen já existe, então executa a função principal
  } else {
    // O gatilho onOpen não existe, então cria e executa a função principal
    ScriptApp.newTrigger('onOpen')
      .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
      .onOpen()
      .create()
  }
}

function abrirModalComImagem(nameF, width, height, title, saudacoes) {
  let idIm = idImg(nameF)
  const file = DriveApp.getFileById(idIm)
  const blob = file.getBlob()
  const base64Img = Utilities.base64Encode(blob.getBytes())
  const urlImagem = `data:${blob.getContentType()};base64,${base64Img}`
  const tit = title
  let wid = width
  let heig = height

  if (wid === '') {
    wid = '800'
  }

  if (heig === '') {
    heig = '600'
  }

  const saudacaor = saudacoes ? saudacao() : ''
  const virgula = saudacoes ? ',' : ''
  const htmlOutput = HtmlService.createHtmlOutput(
    `
      <html>
      <header>
      <style>
            /* Estilos para a imagem */
            img {
              max-width: 100%; /* Ajusta a largura máxima para 100% do container */
              height: auto  /* Mantém a proporção da imagem */
            }
          </style>
      </header>
        <body>
          <img src="${urlImagem}" alt="Imagem do Drive">
        </body>
      </html>
    `
  )
    .setTitle('Bem vindo')
    .setWidth(wid)
    .setHeight(heig)

  SpreadsheetApp.getUi().showModalDialog(
    htmlOutput,
    `${saudacaor}${virgula} ${tit}`
  )
}

function idImg(nameFile) {
  const arquivos = DriveApp.getFilesByName(nameFile)

  if (arquivos.hasNext()) {
    const arquivo = arquivos.next()
    return arquivo.getId()
  } else {
    throw new Error(`Arquivo "${nameFile}" não encontrado no Drive.`)
  }
}

const saudacao = () => {
  const agora = new Date()
  const horaBrasilia = parseInt(
    Utilities.formatDate(agora, 'America/Sao_Paulo', 'H'),
    10
  )
  const saudacoes = {
    5: 'Boa noite',
    12: 'Bom dia',
    18: 'Boa tarde',
  }

  if (horaBrasilia < 5 || horaBrasilia >= 18) {
    return saudacoes[5]
  }

  for (const limite in saudacoes) {
    if (horaBrasilia < limite) {
      return saudacoes[limite]
    }
  }

  return saudacoes[5]
}
