import integrantes from '../data/integrantes.js'

const table = document.querySelector('table');
insereDados()


//FUNÇÃO INSERIR TABELA DINÂMICA
function insereDados() {
    table.innerHTML = ""

    const firstRow = table.insertRow();
    firstRow.insertAdjacentHTML('beforeend', '<th>Nome</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Categoria</th>');

    for (let i = 0; i < integrantes.length; i++) {
        const row = table.insertRow();
        const nomeCell = row.insertCell();
        const categoriaCell = row.insertCell();

        nomeCell.innerHTML = `${integrantes[i].nome} ${integrantes[i].sobrenome}`;
        if (integrantes[i].categoria2 !== "") {
            categoriaCell.innerHTML = `${integrantes[i].categoria} e ${integrantes[i].categoria2}`
        } else {
            categoriaCell.innerHTML = `${integrantes[i].categoria}`
        }
    }
}


//FUNÇAO LIMPAR CAMPO PESQUISAR
const botaoLimpar = document.querySelector('#input__limpar')
botaoLimpar.addEventListener('click', (e) => {
    e.preventDefault()
    limpaDados()
})
function limpaDados() {
    insereDados()
    const input = document.querySelector('#input');
    input.value = ""
}


//FUNÇÃO PESQUISAR VOLUNTÁRIO
const botaoPesquisar = document.querySelector('#input__pesquisar')
botaoPesquisar.addEventListener('click', (e) => {
    e.preventDefault()
    pesquisar()
})
function pesquisar() {
    const input = document.querySelector('#input');
    const nome = input.value.toLowerCase();

    const filtrado = integrantes.filter((voluntario) =>
        voluntario.nome.toLowerCase().includes(nome)
        || voluntario.sobrenome.toLowerCase().includes(nome)
        || voluntario.categoria.toLowerCase().includes(nome)
        || voluntario.categoria2.toLowerCase().includes(nome));

    table.innerHTML = "";
    insereDadosFiltrados(filtrado);
}


//FUNÇÃO INSERIR VOLUNTÁRIOS FILTRADOS
function insereDadosFiltrados(filtrado) {
    const firstRow = table.insertRow();
    firstRow.insertAdjacentHTML('beforeend', '<th>Nome</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Categoria</th>');

    for (let i = 0; i < filtrado.length; i++) {
        const row = table.insertRow();
        const nomeCell = row.insertCell();
        const categoriaCell = row.insertCell();

        nomeCell.innerHTML = `${filtrado[i].nome} ${filtrado[i].sobrenome}`;
        if (filtrado[i].categoria2 !== "") {
            categoriaCell.innerHTML = `${filtrado[i].categoria} e ${filtrado[i].categoria2}`
        } else {
            categoriaCell.innerHTML = filtrado[i].categoria
        }
    }
}