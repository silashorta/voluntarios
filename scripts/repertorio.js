import cancoes from '../data/repertorio.js'

const table = document.querySelector('table');
insereDados()


//FUNÇÃO INSERIR TABELA DINÂMICA
function insereDados() {
    table.innerHTML = ""

    const firstRow = table.insertRow();
    firstRow.insertAdjacentHTML('beforeend', '<th>#id</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Título</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Subtítulo</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Intérprete</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Tom Feminino</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Tom Masculino</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Andamento</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Compasso</th>');

    for (let i = 0; i < cancoes.length; i++) {
        const row = table.insertRow();
        const divVazia = table.insertRow()
        const idCell = row.insertCell();
        const tituloCell = row.insertCell();
        const subtituloCell = row.insertCell();
        const interpreteCell = row.insertCell();
        const tomFemininoCell = row.insertCell();
        const tomMasculinoCell = row.insertCell();
        const andamentoCell = row.insertCell();
        const compassoCell = row.insertCell();
        const botaoModal = row.insertCell()
        const botaoEdit = row.insertCell();
        const botaoExclui = row.insertCell()
        const modal = row.insertCell()


        idCell.innerHTML = `<strong>${cancoes[i].id}</strong>`;
        tituloCell.innerHTML = `${cancoes[i].titulo}`;
        subtituloCell.innerHTML = `${cancoes[i].subtitulo}`;
        interpreteCell.innerHTML = `${cancoes[i].interprete}`;
        tomFemininoCell.innerHTML = `${cancoes[i].tomFeminino}`;
        tomMasculinoCell.innerHTML = `${cancoes[i].tomMasculino}`;
        andamentoCell.innerHTML = `${cancoes[i].andamento}`;
        compassoCell.innerHTML = `${cancoes[i].compasso}`;


        if (cancoes[i].titulo === "") {
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
        modal.setAttribute("colspan", "11")
        modal.style.display = 'none'
        modal.innerHTML = `
        <p><strong>#id:</strong> ${cancoes[i].id}</p>
        <p><strong>Título:</strong> ${cancoes[i].titulo}</p>
        <p><strong>Subtítulo:</strong> ${cancoes[i].subtitulo}</p>
        <p><strong>Intérprete:</strong> ${cancoes[i].interprete}</p>
        <p><strong>Tom Feminino:</strong> ${cancoes[i].tomFeminino}</p>
        <p><strong>Tom Masculino:</strong> ${cancoes[i].tomMasculino}</p>
        <p><strong>Andamento:</strong> ${cancoes[i].andamento}</p>
        <p><strong>Compasso:</strong> ${cancoes[i].compasso}</p>
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

    const filtrado = cancoes.filter((cancao) =>
    cancao.id.toLowerCase().includes(nome)
    || cancao.titulo.toLowerCase().includes(nome)
    || cancao.subtitulo.toLowerCase().includes(nome)
    || cancao.interprete.toLowerCase().includes(nome)
    || cancao.tomFeminino.toLowerCase().includes(nome)
    || cancao.tomMasculino.toLowerCase().includes(nome)
    || cancao.andamento ? cancao.andamento.toString().toLowerCase() : ''
    || cancao.compasso.toLowerCase().includes(nome)
);

    table.innerHTML = "";
    insereDadosFiltrados(filtrado);
}


//FUNÇÃO INSERIR VOLUNTÁRIOS FILTRADOS
function insereDadosFiltrados(filtrado) {
    const firstRow = table.insertRow();
    firstRow.insertAdjacentHTML('beforeend', '<th>#id</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Título</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Subtítulo</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Intérprete</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Tom Feminino</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Tom Masculino</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Andamento</th>');
    firstRow.insertAdjacentHTML('beforeend', '<th>Compasso</th>');

    for (let i = 0; i < filtrado.length; i++) {
        const row = table.insertRow();
        const divVazia = table.insertRow()
        const idCell = row.insertCell();
        const tituloCell = row.insertCell();
        const subtituloCell = row.insertCell();
        const interpreteCell = row.insertCell();
        const tomFemininoCell = row.insertCell();
        const tomMasculinoCell = row.insertCell();
        const andamentoCell = row.insertCell();
        const compassoCell = row.insertCell();
        const botaoModal = row.insertCell()
        const botaoEdit = row.insertCell();
        const botaoExclui = row.insertCell()
        const modal = row.insertCell()


        idCell.innerHTML = `${filtrado[i].id}`;
        tituloCell.innerHTML = `${filtrado[i].titulo}`;
        subtituloCell.innerHTML = `${filtrado[i].subtitulo}`;
        interpreteCell.innerHTML = `${filtrado[i].interprete}`;
        tomFemininoCell.innerHTML = `${filtrado[i].tomFeminino}`;
        tomMasculinoCell.innerHTML = `${filtrado[i].tomMasculino}`;
        andamentoCell.innerHTML = `${filtrado[i].andamento}`;
        compassoCell.innerHTML = `${filtrado[i].compasso}`;


        if (filtrado[i].nome === "") {
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
        modal.setAttribute("colspan", "11")
        modal.style.display = 'none'
        modal.innerHTML = `
        <p><strong>#id:</strong> ${filtrado[i].id}</p>
        <p><strong>Título:</strong> ${filtrado[i].titulo}</p>
        <p><strong>Subtítulo:</strong> ${filtrado[i].subtitulo}</p>
        <p><strong>Intérprete:</strong> ${filtrado[i].interprete}</p>
        <p><strong>Tom Feminino:</strong> ${filtrado[i].tomFeminino}</p>
        <p><strong>Tom Masculino:</strong> ${filtrado[i].tomMasculino}</p>
        <p><strong>Andamento:</strong> ${filtrado[i].andamento}</p>
        <p><strong>Compasso:</strong> ${filtrado[i].compasso}</p>
        `
    }


}