import cancoes from '../data/repertorio.js'

const table = document.querySelector('table');
insereDados()

//FUNÇAO TONALIDADE
const tonalidade = document.querySelector('.tonalidade')
tonalidade.innerHTML =
    ``

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
                    <div class="tonalidade">
                        <select class="form-select" id="tomSelect" onchange="tomSeleciona()">
                            <option class="optionTom" value="C">C | Am</option>
                            <option class="optionTom" value="C#">C# | A#m</option>
                            <option class="optionTom" value="D">D | Bm</option>
                            <option class="optionTom" value="Eb">Eb | Cm</option>
                            <option class="optionTom" value="E">E | C#m</option>
                            <option class="optionTom" value="F">F | Dm</option>
                            <option class="optionTom" value="F#">F# | D#m</option>
                            <option class="optionTom" value="G">G | Em</option>
                            <option class="optionTom" value="Ab">Ab | Fm</option>
                            <option class="optionTom" value="A">A | F#m</option>
                            <option class="optionTom" value="Bb">Bb | Gm</option>
                            <option class="optionTom" value="B">B | G#m</option>
                        </select>
                    </div>
                    <div class="letra">
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

        const tom = document.querySelector('#tomSelect');
        const I = document.querySelectorAll('.I');
        const II = document.querySelectorAll('.II');
        const III = document.querySelectorAll('.III');
        const IV = document.querySelectorAll('.IV');
        const V = document.querySelectorAll('.V');
        const VI = document.querySelectorAll('.VI');
        const VII = document.querySelectorAll('.VII');


        tom.addEventListener('click', tomSeleciona)
        tom.addEventListener('touchstart', tomSeleciona)

        function tomSeleciona() {
            console.log(tom.value)
            for (let i = 0; i < I.length; i++) {
                if (tom.value === 'C') {
                    I[i].textContent = 'C';
                } else if (tom.value === 'C#') {
                    I[i].textContent = 'C#';
                } else if (tom.value === 'D') {
                    I[i].textContent = 'D';
                } else if (tom.value === 'Eb') {
                    I[i].textContent = 'Eb';
                } else if (tom.value === 'E') {
                    I[i].textContent = 'E';
                } else if (tom.value === 'F') {
                    I[i].textContent = 'F';
                } else if (tom.value === 'F#') {
                    I[i].textContent = 'F#';
                } else if (tom.value === 'G') {
                    I[i].textContent = 'G';
                } else if (tom.value === 'Ab') {
                    I[i].textContent = 'Ab';
                } else if (tom.value === 'A') {
                    I[i].textContent = 'A';
                } else if (tom.value === 'Bb') {
                    I[i].textContent = 'Bb';
                } else if (tom.value === 'B') {
                    I[i].textContent = 'B';
                }
            }
            for (let i = 0; i < II.length; i++) {
                if (tom.value === 'C') {
                    II[i].textContent = 'D';
                } else if (tom.value === 'C#') {
                    II[i].textContent = 'D#';
                } else if (tom.value === 'D') {
                    II[i].textContent = 'E';
                } else if (tom.value === 'Eb') {
                    II[i].textContent = 'F';
                } else if (tom.value === 'E') {
                    II[i].textContent = 'F#';
                } else if (tom.value === 'F') {
                    II[i].textContent = 'G';
                } else if (tom.value === 'F#') {
                    II[i].textContent = 'G#';
                } else if (tom.value === 'G') {
                    II[i].textContent = 'A';
                } else if (tom.value === 'Ab') {
                    II[i].textContent = 'Bb';
                } else if (tom.value === 'A') {
                    II[i].textContent = 'B';
                } else if (tom.value === 'Bb') {
                    II[i].textContent = 'C';
                } else if (tom.value === 'B') {
                    II[i].textContent = 'C#';
                }
            }
            for (let i = 0; i < III.length; i++) {
                if (tom.value === 'C') {
                    III[i].textContent = 'E';
                } else if (tom.value === 'C#') {
                    III[i].textContent = 'E#';
                } else if (tom.value === 'D') {
                    III[i].textContent = 'F#';
                } else if (tom.value === 'Eb') {
                    III[i].textContent = 'G';
                } else if (tom.value === 'E') {
                    III[i].textContent = 'G#';
                } else if (tom.value === 'F') {
                    III[i].textContent = 'A';
                } else if (tom.value === 'F#') {
                    III[i].textContent = 'A#';
                } else if (tom.value === 'G') {
                    III[i].textContent = 'B';
                } else if (tom.value === 'Ab') {
                    III[i].textContent = 'C';
                } else if (tom.value === 'A') {
                    III[i].textContent = 'C#';
                } else if (tom.value === 'Bb') {
                    III[i].textContent = 'D';
                } else if (tom.value === 'B') {
                    III[i].textContent = 'D#';
                }
            }
            for (let i = 0; i < IV.length; i++) {
                if (tom.value === 'C') {
                    IV[i].textContent = 'F';
                } else if (tom.value === 'C#') {
                    IV[i].textContent = 'F#';
                } else if (tom.value === 'D') {
                    IV[i].textContent = 'G';
                } else if (tom.value === 'Eb') {
                    IV[i].textContent = 'Ab';
                } else if (tom.value === 'E') {
                    IV[i].textContent = 'A';
                } else if (tom.value === 'F') {
                    IV[i].textContent = 'Bb';
                } else if (tom.value === 'F#') {
                    IV[i].textContent = 'B';
                } else if (tom.value === 'G') {
                    IV[i].textContent = 'C';
                } else if (tom.value === 'Ab') {
                    IV[i].textContent = 'Db';
                } else if (tom.value === 'A') {
                    IV[i].textContent = 'D';
                } else if (tom.value === 'Bb') {
                    IV[i].textContent = 'Eb';
                } else if (tom.value === 'B') {
                    IV[i].textContent = 'E';
                }
            }
            for (let i = 0; i < V.length; i++) {
                if (tom.value === 'C') {
                    V[i].textContent = 'G';
                } else if (tom.value === 'C#') {
                    V[i].textContent = 'G#';
                } else if (tom.value === 'D') {
                    V[i].textContent = 'A';
                } else if (tom.value === 'Eb') {
                    V[i].textContent = 'Bb';
                } else if (tom.value === 'E') {
                    V[i].textContent = 'B';
                } else if (tom.value === 'F') {
                    V[i].textContent = 'C';
                } else if (tom.value === 'F#') {
                    V[i].textContent = 'C#';
                } else if (tom.value === 'G') {
                    V[i].textContent = 'D';
                } else if (tom.value === 'Ab') {
                    V[i].textContent = 'Eb';
                } else if (tom.value === 'A') {
                    V[i].textContent = 'E';
                } else if (tom.value === 'Bb') {
                    V[i].textContent = 'F';
                } else if (tom.value === 'B') {
                    V[i].textContent = 'F#';
                }
            }
            for (let i = 0; i < VI.length; i++) {
                if (tom.value === 'C') {
                    VI[i].textContent = 'A';
                } else if (tom.value === 'C#') {
                    VI[i].textContent = 'A#';
                } else if (tom.value === 'D') {
                    VI[i].textContent = 'B';
                } else if (tom.value === 'Eb') {
                    VI[i].textContent = 'C';
                } else if (tom.value === 'E') {
                    VI[i].textContent = 'C#';
                } else if (tom.value === 'F') {
                    VI[i].textContent = 'D';
                } else if (tom.value === 'F#') {
                    VI[i].textContent = 'D#';
                } else if (tom.value === 'G') {
                    VI[i].textContent = 'E';
                } else if (tom.value === 'Ab') {
                    VI[i].textContent = 'F';
                } else if (tom.value === 'A') {
                    VI[i].textContent = 'F#';
                } else if (tom.value === 'Bb') {
                    VI[i].textContent = 'G';
                } else if (tom.value === 'B') {
                    VI[i].textContent = 'G#';
                }
            }
            for (let i = 0; i < VII.length; i++) {
                if (tom.value === 'C') {
                    VII[i].textContent = 'B';
                } else if (tom.value === 'C#') {
                    VII[i].textContent = 'B#';
                } else if (tom.value === 'D') {
                    VII[i].textContent = 'C#';
                } else if (tom.value === 'Eb') {
                    VII[i].textContent = 'D';
                } else if (tom.value === 'E') {
                    VII[i].textContent = 'D#';
                } else if (tom.value === 'F') {
                    VII[i].textContent = 'E';
                } else if (tom.value === 'F#') {
                    VII[i].textContent = 'E#';
                } else if (tom.value === 'G') {
                    VII[i].textContent = 'F#';
                } else if (tom.value === 'Ab') {
                    VII[i].textContent = 'G';
                } else if (tom.value === 'A') {
                    VII[i].textContent = 'G#';
                } else if (tom.value === 'Bb') {
                    VII[i].textContent = 'A';
                } else if (tom.value === 'B') {
                    VII[i].textContent = 'A#';
                }
            }
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
                    <div class="tonalidade">
                        <select class="form-select" id="selectTom" onchange="selecionaTom">
                            <option class="optionTom" value=""</option>
                            <option class="optionTom" value="C">C | Am</option>
                            <option class="optionTom" value="C#">C# | A#m</option>
                            <option class="optionTom" value="D">D | Bm</option>
                            <option class="optionTom" value="Eb">Eb | Cm</option>
                            <option class="optionTom" value="E">E | C#m</option>
                            <option class="optionTom" value="F">F | Dm</option>
                            <option class="optionTom" value="F#">F# | D#m</option>
                            <option class="optionTom" value="G">G | Em</option>
                            <option class="optionTom" value="Ab">Ab | Fm</option>
                            <option class="optionTom" value="A">A | F#m</option>
                            <option class="optionTom" value="Bb">Bb | Gm</option>
                            <option class="optionTom" value="B">B | G#m</option>
                        </select>
                    </div>
                    <div class="letra">
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


        //FUNÇÃO SELECIONA TOM

        const tom = document.querySelector('#selectTom');
        const I = document.querySelectorAll('.I');
        const II = document.querySelectorAll('.II');
        const III = document.querySelectorAll('.III');
        const IV = document.querySelectorAll('.IV');
        const V = document.querySelectorAll('.V');
        const VI = document.querySelectorAll('.VI');
        const VII = document.querySelectorAll('.VII');

        tom.value == cancoes.tomFeminino

        tom.addEventListener('click', selecionaTom)
        tom.addEventListener('touchstart', selecionaTom)

        function selecionaTom() {
            console.log(tom.value)
            for (let i = 0; i < I.length; i++) {
                if (tom.value === 'C') {
                    I[i].textContent = 'C';
                } else if (tom.value === 'C#') {
                    I[i].textContent = 'C#';
                } else if (tom.value === 'D') {
                    I[i].textContent = 'D';
                } else if (tom.value === 'Eb') {
                    I[i].textContent = 'Eb';
                } else if (tom.value === 'E') {
                    I[i].textContent = 'E';
                } else if (tom.value === 'F') {
                    I[i].textContent = 'F';
                } else if (tom.value === 'F#') {
                    I[i].textContent = 'F#';
                } else if (tom.value === 'G') {
                    I[i].textContent = 'G';
                } else if (tom.value === 'Ab') {
                    I[i].textContent = 'Ab';
                } else if (tom.value === 'A') {
                    I[i].textContent = 'A';
                } else if (tom.value === 'Bb') {
                    I[i].textContent = 'Bb';
                } else if (tom.value === 'B') {
                    I[i].textContent = 'B';
                }
            }
            for (let i = 0; i < II.length; i++) {
                if (tom.value === 'C') {
                    II[i].textContent = 'D';
                } else if (tom.value === 'C#') {
                    II[i].textContent = 'D#';
                } else if (tom.value === 'D') {
                    II[i].textContent = 'E';
                } else if (tom.value === 'Eb') {
                    II[i].textContent = 'F';
                } else if (tom.value === 'E') {
                    II[i].textContent = 'F#';
                } else if (tom.value === 'F') {
                    II[i].textContent = 'G';
                } else if (tom.value === 'F#') {
                    II[i].textContent = 'G#';
                } else if (tom.value === 'G') {
                    II[i].textContent = 'A';
                } else if (tom.value === 'Ab') {
                    II[i].textContent = 'Bb';
                } else if (tom.value === 'A') {
                    II[i].textContent = 'B';
                } else if (tom.value === 'Bb') {
                    II[i].textContent = 'C';
                } else if (tom.value === 'B') {
                    II[i].textContent = 'C#';
                }
            }
            for (let i = 0; i < III.length; i++) {
                if (tom.value === 'C') {
                    III[i].textContent = 'E';
                } else if (tom.value === 'C#') {
                    III[i].textContent = 'E#';
                } else if (tom.value === 'D') {
                    III[i].textContent = 'F#';
                } else if (tom.value === 'Eb') {
                    III[i].textContent = 'G';
                } else if (tom.value === 'E') {
                    III[i].textContent = 'G#';
                } else if (tom.value === 'F') {
                    III[i].textContent = 'A';
                } else if (tom.value === 'F#') {
                    III[i].textContent = 'A#';
                } else if (tom.value === 'G') {
                    III[i].textContent = 'B';
                } else if (tom.value === 'Ab') {
                    III[i].textContent = 'C';
                } else if (tom.value === 'A') {
                    III[i].textContent = 'C#';
                } else if (tom.value === 'Bb') {
                    III[i].textContent = 'D';
                } else if (tom.value === 'B') {
                    III[i].textContent = 'D#';
                }
            }
            for (let i = 0; i < IV.length; i++) {
                if (tom.value === 'C') {
                    IV[i].textContent = 'F';
                } else if (tom.value === 'C#') {
                    IV[i].textContent = 'F#';
                } else if (tom.value === 'D') {
                    IV[i].textContent = 'G';
                } else if (tom.value === 'Eb') {
                    IV[i].textContent = 'Ab';
                } else if (tom.value === 'E') {
                    IV[i].textContent = 'A';
                } else if (tom.value === 'F') {
                    IV[i].textContent = 'Bb';
                } else if (tom.value === 'F#') {
                    IV[i].textContent = 'B';
                } else if (tom.value === 'G') {
                    IV[i].textContent = 'C';
                } else if (tom.value === 'Ab') {
                    IV[i].textContent = 'Db';
                } else if (tom.value === 'A') {
                    IV[i].textContent = 'D';
                } else if (tom.value === 'Bb') {
                    IV[i].textContent = 'Eb';
                } else if (tom.value === 'B') {
                    IV[i].textContent = 'E';
                }
            }
            for (let i = 0; i < V.length; i++) {
                if (tom.value === 'C') {
                    V[i].textContent = 'G';
                } else if (tom.value === 'C#') {
                    V[i].textContent = 'G#';
                } else if (tom.value === 'D') {
                    V[i].textContent = 'A';
                } else if (tom.value === 'Eb') {
                    V[i].textContent = 'Bb';
                } else if (tom.value === 'E') {
                    V[i].textContent = 'B';
                } else if (tom.value === 'F') {
                    V[i].textContent = 'C';
                } else if (tom.value === 'F#') {
                    V[i].textContent = 'C#';
                } else if (tom.value === 'G') {
                    V[i].textContent = 'D';
                } else if (tom.value === 'Ab') {
                    V[i].textContent = 'Eb';
                } else if (tom.value === 'A') {
                    V[i].textContent = 'E';
                } else if (tom.value === 'Bb') {
                    V[i].textContent = 'F';
                } else if (tom.value === 'B') {
                    V[i].textContent = 'F#';
                }
            }
            for (let i = 0; i < VI.length; i++) {
                if (tom.value === 'C') {
                    VI[i].textContent = 'A';
                } else if (tom.value === 'C#') {
                    VI[i].textContent = 'A#';
                } else if (tom.value === 'D') {
                    VI[i].textContent = 'B';
                } else if (tom.value === 'Eb') {
                    VI[i].textContent = 'C';
                } else if (tom.value === 'E') {
                    VI[i].textContent = 'C#';
                } else if (tom.value === 'F') {
                    VI[i].textContent = 'D';
                } else if (tom.value === 'F#') {
                    VI[i].textContent = 'D#';
                } else if (tom.value === 'G') {
                    VI[i].textContent = 'E';
                } else if (tom.value === 'Ab') {
                    VI[i].textContent = 'F';
                } else if (tom.value === 'A') {
                    VI[i].textContent = 'F#';
                } else if (tom.value === 'Bb') {
                    VI[i].textContent = 'G';
                } else if (tom.value === 'B') {
                    VI[i].textContent = 'G#';
                }
            }
            for (let i = 0; i < VII.length; i++) {
                if (tom.value === 'C') {
                    VII[i].textContent = 'B';
                } else if (tom.value === 'C#') {
                    VII[i].textContent = 'B#';
                } else if (tom.value === 'D') {
                    VII[i].textContent = 'C#';
                } else if (tom.value === 'Eb') {
                    VII[i].textContent = 'D';
                } else if (tom.value === 'E') {
                    VII[i].textContent = 'D#';
                } else if (tom.value === 'F') {
                    VII[i].textContent = 'E';
                } else if (tom.value === 'F#') {
                    VII[i].textContent = 'E#';
                } else if (tom.value === 'G') {
                    VII[i].textContent = 'F#';
                } else if (tom.value === 'Ab') {
                    VII[i].textContent = 'G';
                } else if (tom.value === 'A') {
                    VII[i].textContent = 'G#';
                } else if (tom.value === 'Bb') {
                    VII[i].textContent = 'A';
                } else if (tom.value === 'B') {
                    VII[i].textContent = 'A#';
                }
            }
        }
    }
}