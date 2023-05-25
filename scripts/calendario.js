// Criar uma nova instância do objeto Date com a data atual
const dataAtual = new Date();

// Obter o mês atual (lembre-se de que os meses são indexados a partir de 0)
const mesAtual = dataAtual.getMonth();

// Definir o ano e o mês desejados para o calendário
const ano = dataAtual.getFullYear(); // Ano desejado
const mes = mesAtual; // Mês desejado (lembre-se de que os meses são indexados a partir de 0)

const inputCalendario = document.querySelector("#input_calendario")
// Definir uma nova instância do objeto Date com o ano e mês desejados
const dataCalendario = new Date(ano, mes, 1);

// Obter o dia da semana do primeiro dia do mês
const diaSemana = dataCalendario.getDay();

// Criar uma tabela para exibir o calendário
const calendario = document.createElement('table');
calendario.className = "table container my-4"

// Cabeçalho da tabela
const cabecalho = calendario.createTHead();
const linhaCabecalho = cabecalho.insertRow();
const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

for (let i = 0; i < 7; i++) {
    const celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = diasSemana[i];
    celulaCabecalho.className = "text-center"
    linhaCabecalho.appendChild(celulaCabecalho);
}

// Corpo da tabela
const corpoTabela = calendario.createTBody();

// Gerar os dias do calendário
let dia = 1;

for (let i = 0; i < 6; i++) {
    const linha = corpoTabela.insertRow();

    for (let j = 0; j < 7; j++) {
        const celula = linha.insertCell();
        celula.className = "dia"

        if (i === 0 && j < diaSemana) {
            // Preencher células vazias antes do primeiro dia do mês
            celula.textContent = '';

        } else if (dia > 31) {
            // Parar de gerar dias se exceder 31
            break;
        } else {
            // Preencher as células com os dias do calendário
            celula.textContent = dia;
            dia++;
        }
    }
}

// Adicionar a tabela ao elemento do DOM desejado
const containerCalendario = document.getElementById('container-calendario');
containerCalendario.appendChild(calendario);


//Pegar os valores do input
const selectMes = document.querySelector("#mesInput");
selectMes.addEventListener("change", atualizarCalendario);

function atualizarCalendario() {

    // Exemplo: Limpar o conteúdo anterior do container-calendario
    const containerCalendario = document.getElementById('container-calendario');
    containerCalendario.innerHTML = '';

    // Obter o valor selecionado do select
    const mesSelecionado = selectMes.value;

    // Converter o valor do mês para um número (lembrando que os meses são indexados a partir de 0)
    const mes = parseInt(mesSelecionado, 10);
    // Definir uma nova instância do objeto Date com o ano e mês desejados
    const dataCalendario = new Date(ano, mes, 1);

    // Restante do código para gerar e exibir o calendário com base na nova data
    // Obter o dia da semana do primeiro dia do mês
    const diaSemana = dataCalendario.getDay();

    // Criar uma tabela para exibir o calendário
    const calendario = document.createElement('table');
    calendario.className = "table container my-4"

    // Cabeçalho da tabela
    const cabecalho = calendario.createTHead();
    const linhaCabecalho = cabecalho.insertRow();
    const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    
    for (let i = 0; i < 7; i++) {
        const celulaCabecalho = document.createElement('th');
        celulaCabecalho.textContent = diasSemana[i];
        celulaCabecalho.className = "text-center"
        linhaCabecalho.appendChild(celulaCabecalho);
    }

    // Corpo da tabela
    const corpoTabela = calendario.createTBody();

    // Gerar os dias do calendário
    let dia = 1;

    for (let i = 0; i < 6; i++) {
      const linha = corpoTabela.insertRow();
    
      for (let j = 0; j < 7; j++) {
        const celula = linha.insertCell();
        celula.className = "dia";
    
        if (i === 0 && j < diaSemana) {
          // Preencher células vazias antes do primeiro dia do mês
          celula.textContent = "";
        } else if (dia > 31) {
          // Parar de gerar dias se exceder 31
          break;
        } else {
          // Preencher as células com os dias do calendário
          celula.textContent = dia;
    
          const diaEvento = document.querySelectorAll(".dataEvento");
    
          diaEvento.forEach((element) => {
            const parts = element.textContent.split("/");
            const dayEvent = parseInt(parts[0]);
            const monthEvent = parseInt(parts[1]);
    
            if (dia === dayEvent && mes + 1 === monthEvent) {
              celula.style.fontWeight = "bold";
              celula.style.backgroundColor = "var(--cinza)";
            }
          });
    
          dia++;
        }
      }
    }
      
      containerCalendario.appendChild(calendario);
    }      


