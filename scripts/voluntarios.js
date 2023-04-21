import integrantes from '../data/integrantes.js'

const table = document.querySelector('table');
insereDados()


//FUNÇÃO INSERIR TABELA DINÂMICA
function insereDados() {
    table.innerHTML = ""

    const firstRow = table.insertRow();
    firstRow.insertAdjacentHTML('beforeend', '<th>Nome</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Categoria</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th></th>');
    firstRow.insertAdjacentHTML('beforeend', '<th></th>');
    firstRow.insertAdjacentHTML('beforeend', '<th></th>');

    for (let i = 0; i < integrantes.length; i++) {
        const row = table.insertRow();
        const divVazia = table.insertRow()
        const nomeCell = row.insertCell();
        const categoriaCell = row.insertCell();
        const botaoModal = row.insertCell()
        const botaoEdit = row.insertCell();
        const botaoExclui = row.insertCell()
        const modal = row.insertCell()


        nomeCell.innerHTML = `${integrantes[i].nome} ${integrantes[i].sobrenome}`;

        if (integrantes[i].categoria2 !== "") {
            categoriaCell.innerHTML = `${integrantes[i].categoria} e ${integrantes[i].categoria2}`
        } else {
            categoriaCell.innerHTML = `${integrantes[i].categoria}`
        }

        if (integrantes[i].nome === "") {
            row.style.display = "none";
        }

        botaoEdit.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="edita" src="../icon/pen-to-square-regular.svg"></button>`
        botaoExclui.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="exclui" src="../icon/trash-can-regular.svg"></button>`
        botaoModal.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="visualiza" src="../icon/square-minus-regular.svg"></button>`
        const visualiza = document.querySelector('#visualiza')
        botaoModal.addEventListener('click', (e) => {
            e.preventDefault()
            visualiza.style.transform = 'rotate(90deg)';   
            modal.classList.toggle('d-block')
            console.log(visualiza)   
        })

        divVazia.appendChild(modal)
        modal.setAttribute("colspan", "6")
        modal.style.display = 'none'
        modal.innerHTML = `
        <p><strong>#id:</strong> ${integrantes[i].id}</p>
        <p><strong>Nome:</strong> ${integrantes[i].nome}</p>
        <p><strong>Sobrenome:</strong> ${integrantes[i].sobrenome}</p>
        <p><strong>Posicao:</strong> ${integrantes[i].posicao}</p>
        <p><strong>Categoria:</strong> ${integrantes[i].categoria}</p>
        <p><strong>Categoria 2:</strong> ${integrantes[i].categoria2}</p>
        <p><strong>Nascimento:</strong> ${integrantes[i].nascimento}</p>
        <p><strong>Telefone:</strong> ${integrantes[i].telefone}</p>
        `
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
    firstRow.insertAdjacentHTML('beforeend', '<th>Visualizar</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Editar</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Excluir</th>');

    for (let i = 0; i < filtrado.length; i++) {
        const row = table.insertRow();
        const nomeCell = row.insertCell();
        const categoriaCell = row.insertCell();

        const botaoModal = row.insertCell()
        const botaoEdit = row.insertCell();
        const botaoExclui = row.insertCell()

        nomeCell.innerHTML = `${filtrado[i].nome} ${filtrado[i].sobrenome}`;
        if (filtrado[i].categoria2 !== "") {
            categoriaCell.innerHTML = `${filtrado[i].categoria} e ${filtrado[i].categoria2}`
        } else {
            categoriaCell.innerHTML = filtrado[i].categoria
        }

        botaoEdit.innerHTML = `<button class="btn"><img class="icones__voluntarios" src="../icon/pen-to-square-regular.svg"></button>`
        botaoExclui.innerHTML = `<button class="btn"><img class="icones__voluntarios" src="../icon/trash-can-regular.svg"></button>`
        botaoModal.innerHTML = `<button class="btn"><img class="icones__voluntarios" src="../icon/square-minus-regular.svg"></button>`

        if (filtrado[i].nome === "") {
            row.style.display = "none";
        }
    }


}