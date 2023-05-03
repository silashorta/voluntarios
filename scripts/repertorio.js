import cancoes from '../data/repertorio.js'

const table = document.querySelector('table');
insereDados()


//FUNÇÃO INSERIR TABELA DINÂMICA
function insereDados() {
    table.innerHTML = ""

    for (let i = 0; i < cancoes.length; i++) {

        const row = document.createElement('div')
        row.className = 'row'
        row.id = 'row'
        table.appendChild(row)
        row.innerHTML = `
        <div class="accordion container my-1" id="accordionExample">
            <div class="accordion-item ">
            <h2 class="accordion-header">
                <button class="accordion-button bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${cancoes[i].id}" aria-expanded="false" aria-controls="collapse${cancoes[i].id}">
                <div><strong id="idTitulo">#${cancoes[i].id} <span class="idTitulo__titulo">${cancoes[i].titulo}</span></strong><div>
                <div><em>${cancoes[i].subtitulo}</em><div>
                </button>
            </h2>
            <div id="collapse${cancoes[i].id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-light">
                    <div class="d-flex">
                        <div class="col">
                            <p><em>${cancoes[i].interprete}</em></p>
                            <div>
                                <div class="">
                                    <a href="${cancoes[i].linkYoutube}" target="blank"><img class="iconYoutube" src="../icon/youtube.png" alt="ícone Youtube"></img> <div>${cancoes[i].titulo}</div></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <p>Tom Feminino: ${cancoes[i].tomFeminino}</p>
                            <p>Tom Masculino: ${cancoes[i].tomMasculino}</p>
                            <p>BPM: ${cancoes[i].andamento}</p>
                            <p>Compasso: ${cancoes[i].compasso}</p>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p>Tags:</p>
                    </div>
                    <hr>
                    <div>
                        ${cancoes[i].cifra}
                    </div>
                    <hr>
                    <div>
                    <button class="btn"><img class="icones__voluntarios" src="../icon/file-arrow-down-solid.svg"></button>
                    <button class="btn"><img class="icones__voluntarios" src="../icon/pen-to-square-regular.svg"></button>
                    <button class="btn"><img class="icones__voluntarios" src="../icon/trash-can-regular.svg"></button>
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
    table.innerHTML = "";
    insereDadosFiltrados(filtrado);
}


//FUNÇÃO INSERIR VOLUNTÁRIOS FILTRADOS
function insereDadosFiltrados(filtrado) {
    
    table.innerHTML = `<p px-4><strong>${filtrado.length}</strong> resultado(s) encontrado(s).</p>`
    
    
    for (let i = 0; i < filtrado.length; i++) {

        const row = document.createElement('div')
        row.className = 'row'
        row.id = 'row'
        table.appendChild(row)
        row.innerHTML = `
        <div class="accordion container my-1" id="accordionExample">
            <div class="accordion-item ">
            <h2 class="accordion-header">
                <button class="accordion-button bg-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${filtrado[i].id}" aria-expanded="false" aria-controls="collapse${filtrado[i].id}">
                <div><strong id="idTitulo">#${filtrado[i].id} <span class="idTitulo__titulo">${filtrado[i].titulo}</span></strong><div>
                <div><em>${filtrado[i].subtitulo}</em><div>
                </button>
            </h2>
            <div id="collapse${filtrado[i].id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body bg-light">
                    <div class="d-flex">
                        <div class="col">
                            <p><em>${filtrado[i].interprete}</em></p>
                            <div>
                                <div class="">
                                    <a href="${filtrado[i].linkYoutube}" target="blank"><img class="iconYoutube" src="../icon/youtube.png" alt="ícone Youtube"></img> <div>${filtrado[i].titulo}</div></a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <p>Tom Feminino: ${filtrado[i].tomFeminino}</p>
                            <p>Tom Masculino: ${filtrado[i].tomMasculino}</p>
                            <p>BPM: ${filtrado[i].andamento}</p>
                            <p>Compasso: ${filtrado[i].compasso}</p>
                        </div>
                    </div>
                    <hr>
                    <div>
                        <p>Tags:</p>
                    </div>
                    <hr>
                    <div>
                        ${filtrado[i].cifra}
                    </div>
                    <hr>
                    <div>
                    <button class="btn"><img class="icones__voluntarios" src="../icon/file-arrow-down-solid.svg"></button>
                    <button class="btn"><img class="icones__voluntarios" src="../icon/pen-to-square-regular.svg"></button>
                    <button class="btn"><img class="icones__voluntarios" src="../icon/trash-can-regular.svg"></button>
                    </div>
                </div>
            </div>
        </div>`
    }

}

