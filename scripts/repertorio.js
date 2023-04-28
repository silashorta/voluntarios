import cancoes from '../data/repertorio.js'

const table = document.querySelector('table');
insereDados()


//FUNÇÃO INSERIR TABELA DINÂMICA
function insereDados() {
    table.innerHTML = ""

    for (let i = 0; i < cancoes.length; i++) {
        const row = document.createElement('div')
        row.className = 'row linha '
        row.id = 'row'
        table.appendChild(row)
        
        const col1 = document.createElement('div')
        row.className = 'linha'
        col1.id = 'col1'
        row.appendChild(col1)
        
        const col2 = document.createElement('div')
        row.className = 'linha'
        col2.id = 'col2'
        row.appendChild(col2)
        
        const col3 = document.createElement('div')
        row.className = 'linha'
        col3.id = 'col3'
        row.appendChild(col3)

        
        const idCell = document.createElement('div')
        idCell.className = ''
        idCell.id = "idCell"
        col1.appendChild(idCell)
        idCell.innerHTML = `#<strong>${cancoes[i].id}</strong>`;

        const tituloCell = document.createElement('div')
        tituloCell.className = ''
        tituloCell.id = "idTitulo"
        col1.appendChild(tituloCell)
        tituloCell.innerHTML = `<strong>${cancoes[i].titulo}</strong> 
                                <p class="subtitulo">${cancoes[i].subtitulo}</p>`;

        const interpreteCell = document.createElement('div')
        interpreteCell.className = ''
        interpreteCell.id = "idInterprete"
        col1.appendChild(interpreteCell)
        interpreteCell.innerHTML = `<em>${cancoes[i].interprete}</em>`;

        const tomFemininoCell = document.createElement('div')
        tomFemininoCell.className = ''
        tomFemininoCell.id = "idTomFeminino"
        col2.appendChild(tomFemininoCell)
        tomFemininoCell.innerHTML = `<span><strong>Tom Feminino: </strong></span>${cancoes[i].tomFeminino}`;

        const tomMasculinoCell = document.createElement('div')
        tomMasculinoCell.className = ''
        tomMasculinoCell.id = "idTomMasculino"
        col2.appendChild(tomMasculinoCell)
        tomMasculinoCell.innerHTML = `<span><strong>Tom Masculino: </strong></span>${cancoes[i].tomMasculino}`;

        const andamentoCell = document.createElement('div')
        andamentoCell.className = ''
        andamentoCell.id = "idAndamento"
        col2.appendChild(andamentoCell)
        andamentoCell.innerHTML = `<strong>BPM</strong>: ${cancoes[i].andamento}`;

        const compassoCell = document.createElement('div')
        compassoCell.className = ''
        compassoCell.id = "idCompasso"
        col2.appendChild(compassoCell)
        compassoCell.innerHTML = `<strong>Compasso</strong>: ${cancoes[i].compasso}`;

        const botaoEdit = document.createElement('div')
        botaoEdit.className = ''
        botaoEdit.id = "idEdit"
        col3.appendChild(botaoEdit)
        botaoEdit.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="edita" src="../icon/square-minus-regular.svg"></button>`

        const botaoExclui = document.createElement('div')
        botaoExclui.className = ''
        botaoExclui.id = "idExclui"
        col3.appendChild(botaoExclui)
        botaoExclui.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="exclui" src="../icon/pen-to-square-regular.svg"></button>`

        const botaoModal = document.createElement('div')
        botaoModal.className = ''
        botaoModal.id = "idVisualiza"
        col3.appendChild(botaoModal)
        botaoModal.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="visualiza" src="../icon/trash-can-regular.svg"></button>`


        if (tituloCell.textContent === " ") {
            row.style.display = 'none';
          }


        const visualiza = document.querySelector('#visualiza')
        botaoModal.addEventListener('click', (e) => {
            e.preventDefault()
            visualiza.style.transform = 'rotate(90deg)';
            modal.classList.toggle('d-block')
            console.log(visualiza)
        })

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
    const firstRow = document.createElement('div')
    firstRow.id = 'firstRow'
    firstRow.className = 'row nowrap sticky-top bg-light'
    table.appendChild(firstRow)
    firstRow.insertAdjacentHTML('beforeend', '<div class="col idCell"><strong>#id</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Título</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Subtítulo</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Intérprete</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Tom Feminino</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Tom Masculino</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>BPM</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Compasso</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Visualizar</strong>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Editar</strong></div>');
    firstRow.insertAdjacentHTML('beforeend', '<div class="col"><strong>Excluir</strong></div>');

    for (let i = 0; i < filtrado.length; i++) {
        const row = document.createElement('div')
        row.className = 'row align-items-center linha'
        table.appendChild(row)

        const idCell = document.createElement('div')
        idCell.className = 'col idCell'
        row.appendChild(idCell)
        idCell.innerHTML = `<strong>${filtrado[i].id}</strong>`;

        const tituloCell = document.createElement('div')
        tituloCell.className = 'col'
        row.appendChild(tituloCell)
        tituloCell.innerHTML = `${filtrado[i].titulo}`;

        const subtituloCell = document.createElement('div')
        subtituloCell.className = 'col'
        row.appendChild(subtituloCell)
        subtituloCell.innerHTML = `${filtrado[i].subtitulo}`;

        const interpreteCell = document.createElement('div')
        interpreteCell.className = 'col'
        row.appendChild(interpreteCell)
        interpreteCell.innerHTML = `${filtrado[i].interprete}`;

        const tomFemininoCell = document.createElement('div')
        tomFemininoCell.className = 'col'
        row.appendChild(tomFemininoCell)
        tomFemininoCell.innerHTML = `${filtrado[i].tomFeminino}`;

        const tomMasculinoCell = document.createElement('div')
        tomMasculinoCell.className = 'col'
        row.appendChild(tomMasculinoCell)
        tomMasculinoCell.innerHTML = `${filtrado[i].tomMasculino}`;

        const andamentoCell = document.createElement('div')
        andamentoCell.className = 'col'
        row.appendChild(andamentoCell)
        andamentoCell.innerHTML = `${filtrado[i].andamento}`;

        const compassoCell = document.createElement('div')
        compassoCell.className = 'col'
        row.appendChild(compassoCell)
        compassoCell.innerHTML = `${filtrado[i].compasso}`;

        const botaoEdit = document.createElement('div')
        botaoEdit.className = 'col'
        row.appendChild(botaoEdit)
        botaoEdit.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="visualiza" src="../icon/square-minus-regular.svg"></button>`

        const botaoExclui = document.createElement('div')
        botaoExclui.className = 'col'
        row.appendChild(botaoExclui)
        botaoExclui.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="edita" src="../icon/pen-to-square-regular.svg"></button>`

        const botaoModal = document.createElement('div')
        botaoModal.className = 'col'
        row.appendChild(botaoModal)
        botaoModal.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="exclui" src="../icon/trash-can-regular.svg"></button>`

        
        
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