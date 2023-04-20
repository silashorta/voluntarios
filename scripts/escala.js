import cancoes from '../data/repertorio.js'
import integrantes from '../data/integrantes.js';

const selectEscala = document.querySelector('#selectEscala');

const botaoAddSelect = document.querySelector('#adicionarVoluntario')
botaoAddSelect.addEventListener('click', function (event) {
    event.preventDefault();
    addSelect()
})

function addSelect() {
    const divSelectEscala = document.querySelector('.divSelectEscala');
    const novoDiv = document.createElement('div');
    novoDiv.id = 'voluntario'
    const novoSelect = document.createElement('select');
    novoSelect.id = 'novoSelect';
    novoSelect.classList.add('divSelectEscala')
    const removeVoluntario = document.createElement('button')
    removeVoluntario.id = 'removeVoluntario'
    removeVoluntario.classList.add('btn')
    removeVoluntario.classList.add('btn-outline-danger')
    removeVoluntario.value = 'X'
    removeVoluntario.innerHTML = 'X'

    for (let i = 0; i < integrantes.length; i++) {
        const option = document.createElement('option');
        option.value = `${integrantes[i].nome} ${integrantes[i].sobrenome}`;
        option.textContent = `${integrantes[i].nome} ${integrantes[i].sobrenome}`;
        novoSelect.appendChild(option);
    }

    novoDiv.appendChild(novoSelect);
    novoDiv.appendChild(removeVoluntario);

    removeVoluntario.addEventListener('click', function (event) {
        event.preventDefault();

        const pai = this.parentNode;
        pai.remove();
    })


    divSelectEscala.insertBefore(novoDiv, document.querySelector('#adicionarVoluntario'));
}

const botaoAddCancoes = document.querySelector('#adicionarCancoes')
botaoAddCancoes.addEventListener('click', function (event) {
    event.preventDefault();
    btnAddCancoes()
})

function btnAddCancoes() {
    const divSelectCancoes = document.querySelector('.divSelectCancoes');
    const novoDivCancoes = document.createElement('div')
    novoDivCancoes.id = 'cancao'
    const novoSelectCancoes = document.createElement('select');
    novoSelectCancoes.id = 'novoSelectCancoes';
    novoSelectCancoes.classList.add('divSelectEscala');
    const removeCancoes = document.createElement('button');
    removeCancoes.id = 'removeCancoes'
    removeCancoes.classList.add('btn')
    removeCancoes.classList.add('btn-outline-danger')
    removeCancoes.value = 'X'
    removeCancoes.innerHTML = 'X'

    for (let i = 0; i < cancoes.length; i++) {
        const optionCancoes = document.createElement('option');
        optionCancoes.value = cancoes[i].titulo;
        optionCancoes.textContent = cancoes[i].titulo;
        novoSelectCancoes.appendChild(optionCancoes);
    }

    novoDivCancoes.appendChild(novoSelectCancoes);
    novoDivCancoes.appendChild(removeCancoes);

    removeCancoes.addEventListener('click', function (event) {
        event.preventDefault();

        const pai = this.parentNode;
        pai.remove();
    })

    divSelectCancoes.insertBefore(novoDivCancoes, document.querySelector('#adicionarCancoes'));
}

//FUNÇÃO ENVIAR ESCALA
const titulo = document.querySelector('#titulo')
const data = document.querySelector('#data')
const horario = document.querySelector('#horario')
const descricao = document.querySelector('#descricao')

const botaoEnviaEscala = document.querySelector('#botaoEnviaEscala')
const tituloModal = document.querySelector('#escala__titulo')
const dataModal = document.querySelector('#escala__data')
const horarioModal = document.querySelector('#escala__horario')
const descricaoModal = document.querySelector('#escala__descricao')
const participantesModal = document.querySelector('#escala__participantes')
const cancoesModal = document.querySelector('#escala__cancoes')


document.querySelector('#staticBackdrop').addEventListener('shown.bs.modal', function () {

})

botaoEnviaEscala.addEventListener('click', () => {
    enviaModal()
})
function enviaModal() {
    tituloModal.innerHTML = titulo.value
    dataModal.innerHTML = data.value
    horarioModal.innerHTML = horario.value
    descricaoModal.innerHTML = descricao.value

    // Seleciona os selects criados dinamicamente
    const selectsParticipantes = document.querySelectorAll('#novoSelect')
    // Cria um array para armazenar as opções selecionadas
    const optionsParticipantes = [];
    // Percorre os selects e adiciona as opções selecionadas no array
    selectsParticipantes.forEach(select => {
        const opcaoSelecionada = select.value;
        if (opcaoSelecionada) {
            optionsParticipantes.push(opcaoSelecionada);
        }
    });
    participantesModal.innerHTML = `${optionsParticipantes.join(`<br>`)}`
    
    // Seleciona os selects criados dinamicamente
    const selectsCancoes = document.querySelectorAll('#novoSelectCancoes')
    // Cria um array para armazenar as opções selecionadas
    const optionsCancoes = [];
    // Percorre os selects e adiciona as opções selecionadas no array
    selectsCancoes.forEach(select => {
        const cancaoSelecionada = select.value;
        if (cancaoSelecionada) {
            optionsCancoes.push(cancaoSelecionada);
        }
    });
    cancoesModal.innerHTML = `${optionsCancoes.join(`<br>`)}`
}