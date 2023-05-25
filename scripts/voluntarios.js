import integrantes from '../data/integrantes.js'

const table = document.querySelector('#tabela');
insereDados()


//FUNÇÃO INSERIR TABELA DINÂMICA
function insereDados() {
    table.innerHTML = ""
    for (let i = 0; i < integrantes.length; i++) {

        const row = document.createElement('div')
        row.className = 'row'
        row.id = 'row'
        table.appendChild(row)
        row.innerHTML = `
        <div class="accordion container my-1" id="accordionExample">
          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button bg-light collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse${integrantes[i].id}" aria-expanded="false"
                aria-controls="collapse${integrantes[i].id}">
                <div>
                  <strong id="idTitulo">#${integrantes[i].id} <span
                      class="idTitulo__titulo">${integrantes[i].nome} ${integrantes[i].sobrenome}</span></strong>
                  <div>
              </button>
            </h2>
            <div id="collapse${integrantes[i].id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body bg-light">
                <div class="d-flex">
                  <div class="col">
                    <p>#id: ${integrantes[i].id}</p>  
                    <p>Nome: ${integrantes[i].nome}</p>  
                    <p>Sobrenome: ${integrantes[i].sobrenome}</p>  
                    <p>Cargo: ${integrantes[i].posicao}</p>  
                    <p>Posição 1: ${integrantes[i].categoria}</p>  
                    <p>Posição 2: ${integrantes[i].categoria2}</p>  
                    <p>Nascimento: ${integrantes[i].nascimento}</p>  
                    <p>Telefone: ${integrantes[i].telefone}</p>  
                  </div>
                </div>
                <hr>
                <div>
                  <p>Tags:</p>
                </div>
                <hr>
                <div>
                  <button class="btn"><img class="icones__voluntarios" src="../icon/pen-to-square-regular.svg"></button>
                  <button class="btn"><img class="icones__voluntarios" src="../icon/trash-can-regular.svg"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `

        //LIMPAR LINHA EM BRANCO
        if (`${integrantes[i].nome}` == ""){
            row.innerHTML = ""
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
    const quantidadeFiltrado = filtrado.length.toString().padStart(2, '0');
    table.innerHTML = `<p class="px-4"><strong>${quantidadeFiltrado}</strong> resultado(s) encontrado(s).</p>`

    for (let i = 0; i < filtrado.length; i++) {
        const row = document.createElement('div')
        row.className = 'row'
        row.id = 'row'
        table.appendChild(row)
        row.innerHTML = `
        <div class="accordion container my-1" id="accordionExample">
          <div class="accordion-item ">
            <h2 class="accordion-header">
              <button class="accordion-button bg-light collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapse${filtrado[i].id}" aria-expanded="false"
                aria-controls="collapse${filtrado[i].id}">
                <div>
                  <strong id="idTitulo">#${filtrado[i].id} <span
                      class="idTitulo__titulo">${filtrado[i].nome} ${filtrado[i].sobrenome}</span></strong>
                  <div>
              </button>
            </h2>
            <div id="collapse${filtrado[i].id}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body bg-light">
                <div class="d-flex">
                  <div class="col">
                    <p>#id: ${filtrado[i].id}</p>  
                    <p>Nome: ${filtrado[i].nome}</p>  
                    <p>Sobrenome: ${filtrado[i].sobrenome}</p>  
                    <p>Cargo: ${filtrado[i].posicao}</p>  
                    <p>Posição 1: ${filtrado[i].categoria}</p>  
                    <p>Posição 2: ${filtrado[i].categoria2}</p>  
                    <p>Nascimento: ${filtrado[i].nascimento}</p>  
                    <p>Telefone: ${filtrado[i].telefone}</p>  
                  </div>
                </div>
                <hr>
                <div>
                  <p>Tags:</p>
                </div>
                <hr>
                <div>
                  <button class="btn"><img class="icones__voluntarios" src="../icon/pen-to-square-regular.svg"></button>
                  <button class="btn"><img class="icones__voluntarios" src="../icon/trash-can-regular.svg"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    }
}