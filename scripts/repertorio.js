import cancoes from '../data/repertorio.js'

const table = document.querySelector('table');
insereDados()


//FUNÇÃO INSERIR TABELA DINÂMICA
function insereDados() {
    table.innerHTML = ""

    for (let i = 0; i < cancoes.length; i++) {
        /*         const row = document.createElement('div')
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
        
                const tituloCell = document.createElement('div');
                tituloCell.className = '';
                tituloCell.id = 'idTitulo';
                col1.appendChild(tituloCell);
        
                if (cancoes[i].titulo === '') {
                    row.style.display = 'none';
                } else {
                    tituloCell.innerHTML = `<strong>${cancoes[i].titulo}</strong> 
                                        <p class="subtitulo">${cancoes[i].subtitulo}</p>`;
                }
        
        
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
                botaoModal.innerHTML = `<button class="btn"><img class="icones__voluntarios" id="visualiza" src="../icon/trash-can-regular.svg"></button>` */

        const row = document.createElement('div')
        row.className = 'row'
        row.id = 'row'
        table.appendChild(row)
        row.innerHTML = `
        <div class="accordion container" id="accordionExample">
            <div class="accordion-item ">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${cancoes[i].id}" aria-expanded="false" aria-controls="collapse${cancoes[i].id}">
                <div><strong id="idTitulo">#${cancoes[i].id} ${cancoes[i].titulo}</strong><div>
                <div><em>${cancoes[i].subtitulo}</em><div>
                </button>
            </h2>
            <div id="collapse${cancoes[i].id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-light">
                    <div class="d-flex">
                        <div class="col">
                            <p><em>${cancoes[i].interprete}</em></p>
                            <div>
                                <a href="${cancoes[i].linkYoutube}" target="blank">
                                <div><img class="iconYoutube" src="../icon/youtube.png" alt="ícone Youtube"></img></div>
                                ${cancoes[i].titulo}</a>
                            </div>
                        </div>
                        <div class="col">
                            <p>Tom Feminino: ${cancoes[i].tomFeminino}</p>
                            <p>Tom Masculino: ${cancoes[i].tomMasculino}</p>
                            <p>BPM: ${cancoes[i].andamento}</p>
                            <p>Compasso: ${cancoes[i].compasso}</p>
                        </div>
                    </div>
                    <div>
                        <p>Tags</p>
                    </div>
                </div>
            </div>
        </div>`

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
        cancao.id.toString().toLowerCase().includes(nome)
        || cancao.titulo.toLowerCase().includes(nome)
        || cancao.subtitulo.toLowerCase().includes(nome)
        || cancao.interprete.toLowerCase().includes(nome)
        || cancao.tomFeminino.toLowerCase().includes(nome)
        || cancao.tomMasculino.toLowerCase().includes(nome)
        || cancao.andamento.toString().toLowerCase().includes(nome)
        || cancao.compasso.toLowerCase().includes(nome)
    );
    console.log(filtrado)
    table.innerHTML = "";
    insereDadosFiltrados(filtrado);
}


//FUNÇÃO INSERIR VOLUNTÁRIOS FILTRADOS
function insereDadosFiltrados(filtrado) {

    for (let i = 0; i < filtrado.length; i++) {
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
        idCell.innerHTML = `#<strong>${filtrado[i].id}</strong>`;

        const tituloCell = document.createElement('div')
        tituloCell.className = ''
        tituloCell.id = "idTitulo"
        col1.appendChild(tituloCell)
        tituloCell.innerHTML = `<strong>${filtrado[i].titulo}</strong> 
                                    <p class="subtitulo">${filtrado[i].subtitulo}</p>`;

        const interpreteCell = document.createElement('div')
        interpreteCell.className = ''
        interpreteCell.id = "idInterprete"
        col1.appendChild(interpreteCell)
        interpreteCell.innerHTML = `<em>${filtrado[i].interprete}</em>`;

        const tomFemininoCell = document.createElement('div')
        tomFemininoCell.className = ''
        tomFemininoCell.id = "idTomFeminino"
        col2.appendChild(tomFemininoCell)
        tomFemininoCell.innerHTML = `<span><strong>Tom Feminino: </strong></span>${filtrado[i].tomFeminino}`;

        const tomMasculinoCell = document.createElement('div')
        tomMasculinoCell.className = ''
        tomMasculinoCell.id = "idTomMasculino"
        col2.appendChild(tomMasculinoCell)
        tomMasculinoCell.innerHTML = `<span><strong>Tom Masculino: </strong></span>${filtrado[i].tomMasculino}`;

        const andamentoCell = document.createElement('div')
        andamentoCell.className = ''
        andamentoCell.id = "idAndamento"
        col2.appendChild(andamentoCell)
        andamentoCell.innerHTML = `<strong>BPM</strong>: ${filtrado[i].andamento}`;

        const compassoCell = document.createElement('div')
        compassoCell.className = ''
        compassoCell.id = "idCompasso"
        col2.appendChild(compassoCell)
        compassoCell.innerHTML = `<strong>Compasso</strong>: ${filtrado[i].compasso}`;

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

