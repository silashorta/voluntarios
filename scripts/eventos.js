import eventos from "../data/eventos.js"

for (let i = 0; i < eventos.length; i++) {
    const element = eventos[i];

    const eventosContainer = document.querySelector('#eventos__main')
    const eventosItem = document.createElement('div')
    eventosItem.id = "eventosItem"
    eventosContainer.className = 'row row-cols-1 row-cols-md-3 g-4'

    const parts = element.data.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const dataEventos = new Date(year, month, day);

    eventosItem.innerHTML = `
    <div class="container my-4">
        <div class="col">
            <div class="card card_item">
                <img src="image/escalas/ministerio-de-louvor.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.titulo}</h5>
                    <p class="card-text dataEvento">${element.data}</p>
                    <p class="card-text">${element.horario}</p>
                    <div class="descricao">
                        <p class="card-text descricao_texto">${element.descricao}</p>
                        <p class="card-text">${element.cancoes}</p>
                        <p class="card-text">${element.voluntarios}</p>
                    </div>
                    <p class="card-text card-footer"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
    `
    // Só exibe o evento de acordo com o mês vigente
    const mesAtual = new Date()
    if (month == mesAtual.getMonth()) {
        eventosContainer.appendChild(eventosItem)
    }


    //Lógica para exibir no calendário o dia referente ao evento do mês vigente

    const diaCalendario = document.querySelectorAll(".dia"); // Pega todos os dias do calendário

    const primeiroDiaMes = new Date(year, month, 1); // Supondo que você já tenha definido as variáveis year e month

    const diaSemanaPrimeiroDia = primeiroDiaMes.getDay(); // Obtém o dia da semana (0 - domingo, 1 - segunda-feira, etc.)

    const diasEmBranco = diaSemanaPrimeiroDia; // O número de dias em branco no início do calendário


    const diaVerificado = diaCalendario[day + diasEmBranco - 1];

    if (diaVerificado && month == mesAtual.getMonth()) {
        diaVerificado.classList.add("diaVerificado");
        diaVerificado.style.backgroundColor = "var(--cinza)"
        console.log()
    }



}

// Ordena os eventos visualmente na tela preservando a ordem de inclusão no enventos.js na pasta data
const itensEventos = Array.from(document.querySelectorAll(".dataEvento"));

// Criar um array com os valores das datas
const datas = itensEventos.map((element) => element.textContent);

// Ordenar o array de datas
datas.sort((a, b) => {
    const [diaA, mesA, anoA] = a.split('/').map(Number);
    const [diaB, mesB, anoB] = b.split('/').map(Number);

    if (anoA !== anoB) {
        return anoB - anoA; // Comparar anos
    }
    if (mesA !== mesB) {
        return mesB - mesA; // Comparar meses
    }
    return diaB - diaA; // Comparar dias
});

const divItens = document.querySelectorAll("#eventos__main");
divItens.forEach((divItem) => {
    divItem.innerHTML = ""; // Limpar o conteúdo de cada elemento #eventosItem
});

// Iterar sobre as datas ordenadas e criar o HTML dinamicamente
datas.forEach((data) => {
    const evento = itensEventos.find((element) => element.textContent === data);
    const cardItem = evento.closest('.card_item');
    divItens.forEach((divItem) => {
        divItem.innerHTML += `
        <div class="container">
            <div class="col">
                ${cardItem.outerHTML}
            </div>
        </div>` // Adicionar o HTML do cardItem em cada elemento #eventosItem
    });
});

//Função para filtrar os eventos pelo mes do input

const mesInput = document.querySelector("#mesInput");
mesInput.addEventListener('change', () => {
    const mesValor = parseInt(mesInput.value) + 1;

    const eventosFiltrados = eventos.filter((evento) => {
        const parts = evento.data.split('/');
        const month = parseInt(parts[1], 10);

        return month === mesValor;
    });

    // Chamar função para exibir apenas os eventos filtrados
    exibirEventos(eventosFiltrados);
});

function exibirEventos(eventosExibicao) {
    const eventosContainer = document.querySelector('#eventos__main');
    eventosContainer.innerHTML = '';

    for (let i = 0; i < eventosExibicao.length; i++) {
        const element = eventosExibicao[i];

        const eventosContainer = document.querySelector('#eventos__main')
        const eventosItem = document.createElement('div')
        eventosItem.id = "eventosItem"
        eventosContainer.className = 'row row-cols-1 row-cols-md-3 g-4'
        eventosContainer.appendChild(eventosItem)
        eventosItem.innerHTML = `
      <div class="container my-4">
          <div class="col">
              <div class="card card_item">
                  <img src="image/escalas/ministerio-de-louvor.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${element.titulo}</h5>
                      <p class="card-text dataEvento">${element.data}</p>
                      <p class="card-text">${element.horario}</p>
                      <div class="descricao">
                          <p class="card-text descricao_texto">${element.descricao}</p>
                          <p class="card-text">${element.cancoes}</p>
                          <p class="card-text">${element.voluntarios}</p>
                      </div>
                      <p class="card-text card-footer"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
              </div>
          </div>
      </div>
      `
        //Aplicar estilo no calendário aos dias dos eventos 
        const diaCalendario = document.querySelectorAll(".dia");
        for (let i = 0; i < eventosExibicao.length; i++) {
            const element = eventosExibicao[i];
            const parts = element.data.split('/');
            const day = parseInt(parts[0], 10);

            for (let j = 0; j < diaCalendario.length; j++) {
                const dia = diaCalendario[j];
                if (dia.textContent.trim() === day.toString()) {
                    dia.style.fontWeight = "700"
                    dia.style.backgroundColor = "var(--cinza)"
                    break;
                }
            }
        }

        // Ordena os eventos visualmente na tela preservando a ordem de inclusão no enventos.js na pasta data
        const itensEventos = Array.from(document.querySelectorAll(".dataEvento"));

        // Criar um array com os valores das datas
        const datas = itensEventos.map((element) => element.textContent);

        // Ordenar o array de datas
        datas.sort((a, b) => {
            const [diaA, mesA, anoA] = a.split('/').map(Number);
            const [diaB, mesB, anoB] = b.split('/').map(Number);

            if (anoA !== anoB) {
                return anoB - anoA; // Comparar anos
            }
            if (mesA !== mesB) {
                return mesB - mesA; // Comparar meses
            }
            return diaB - diaA; // Comparar dias
        });

        const divItens = document.querySelectorAll("#eventos__main");
        divItens.forEach((divItem) => {
            divItem.innerHTML = ""; // Limpar o conteúdo de cada elemento #eventosItem
        });

        // Iterar sobre as datas ordenadas e criar o HTML dinamicamente
        datas.forEach((data) => {
            const evento = itensEventos.find((element) => element.textContent === data);
            const cardItem = evento.closest('.card_item');
            divItens.forEach((divItem) => {
                divItem.innerHTML += `
        <div class="container">
            <div class="col">
                ${cardItem.outerHTML}
            </div>
        </div>` // Adicionar o HTML do cardItem em cada elemento #eventosItem
            });
        });

    }
}