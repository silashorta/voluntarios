const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// configurar o body-parser para interpretar os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// criar rota para receber os dados do formulário
app.post('/adicionar-cancao', (req, res) => {
  // obter os dados do formulário a partir do objeto req.body
  const { titulo, subtitulo, interprete, tomFeminino, tomMasculino, andamento, compasso } = req.body;

  // criar objeto com os dados da nova canção
  const novaCancao = {
    id: Date.now(),
    titulo,
    subtitulo,
    interprete,
    tomFeminino,
    tomMasculino,
    andamento,
    compasso
  };

  // ler o conteúdo do arquivo repertorio.js
  fs.readFile('repertorio.js', 'utf8', (err, data) => {
    if (err) throw err;

    // converter o conteúdo do arquivo em um objeto JavaScript
    const repertorio = JSON.parse(data);

    // adicionar a nova canção ao repertório
    repertorio.cancoes.push(novaCancao);

    // converter o repertório de volta para uma string JSON
    const repertorioJSON = JSON.stringify(repertorio);

    // escrever a nova string JSON no arquivo repertorio.js
    fs.writeFile('repertorio.js', repertorioJSON, 'utf8', (err) => {
      if (err) throw err;

      // enviar resposta indicando que a operação foi realizada com sucesso
      res.send('Canção adicionada com sucesso!');
    });
  });
});

app.listen(3000, () => console.log('Servidor iniciado na porta 3000.'));
