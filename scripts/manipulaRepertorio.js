const fs = require('fs');

// Função para ler o conteúdo do arquivo
function lerArquivo(caminhoArquivo) {
  try {
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf8');
    return conteudo;
  } catch (error) {
    console.error(`Erro ao ler o arquivo ${caminhoArquivo}: ${error}`);
    return null;
  }
}

// Função para escrever conteúdo no arquivo
function escreverArquivo(caminhoArquivo, conteudo) {
  try {
    fs.writeFileSync(caminhoArquivo, conteudo, 'utf8');
    console.log(`Arquivo ${caminhoArquivo} atualizado com sucesso.`);
  } catch (error) {
    console.error(`Erro ao escrever no arquivo ${caminhoArquivo}: ${error}`);
  }
}

// Função para adicionar uma nova canção ao repertório
function adicionarCancao(titulo, subtitulo, interprete, tomFeminino, tomMasculino, andamento, compasso) {
  const caminhoArquivo = '../data/repertorio.js';

  // Ler o conteúdo atual do arquivo
  const conteudoAtual = lerArquivo(caminhoArquivo);

  // Encontrar a posição do "export default"
  const exportDefaultIndex = conteudoAtual.indexOf('export default');

  if (exportDefaultIndex !== -1) {
    // Separar o conteúdo antes e depois do "export default"
    const conteudoAntesExportDefault = conteudoAtual.slice(0, exportDefaultIndex);
    const conteudoDepoisExportDefault = conteudoAtual.slice(exportDefaultIndex);
  
    // Encontrar a posição do fechamento do array de objetos (']')
    const fechamentoArrayIndex = conteudoAntesExportDefault.lastIndexOf(']');
  
    if (fechamentoArrayIndex !== -1) {
      // Separar o conteúdo do array de objetos e o restante do conteúdo antes do "export default"
      const arrayObjetos = conteudoAntesExportDefault.slice(fechamentoArrayIndex);
      const conteudoAntesArrayObjetos = conteudoAntesExportDefault.slice(0, fechamentoArrayIndex);
  
      // Criar o novo objeto de canção
      const novoObjeto = `{
    "titulo": "${titulo}",
    "subtitulo": "${subtitulo}",
    "interprete": "${interprete}",
    "tomFeminino": "${tomFeminino}",
    "tomMasculino": "${tomMasculino}",
    "andamento": "${andamento}",
    "compasso": "${compasso}"
  }`;
  
      // Atualizar o conteúdo com o novo objeto de canção
      const novoConteudo = `${conteudoAntesArrayObjetos},${novoObjeto}${arrayObjetos}${conteudoDepoisExportDefault}`;
  
      // Escrever o novo conteúdo no arquivo
      escreverArquivo(caminhoArquivo, novoConteudo);
    } else {
      console.error('Não foi possível encontrar o fechamento do array de objetos no arquivo.');
    }
  }
}  

// Exemplo de uso:
const titulo = 'Minha Canção';
const subtitulo = 'Canção de Teste';
const interprete = 'Eu mesmo';
const tomFeminino = 'C#';
const tomMasculino = 'D';
const andamento = '2023-05-10';
const compasso = '4/4';

// Chamar a função para adicionar a nova canção
adicionarCancao(titulo, subtitulo, interprete, tomFeminino, tomMasculino, andamento, compasso);
