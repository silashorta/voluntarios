import eventos from "../data/eventos.js"



for (let i = 0; i < eventos.length; i++) {
    const element = eventos[i];
    
    const eventosContainer = document.querySelector('#eventos__main')
    const eventosItem = document.createElement('div')
    eventosContainer.className = 'row row-cols-1 row-cols-md-3 g-4'
    eventosContainer.appendChild(eventosItem)
    eventosItem.innerHTML = `
    <div class="container my-4">
        <div class="col">
            <div class="card card_item">
                <img src="image/escalas/ministerio-de-louvor.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.titulo}</h5>
                    <p class="card-text">${element.data}</p>
                    <p class="card-text">${element.horario}</p>
                    <p class="card-text">${element.descricao}</p>
                    <p class="card-text">${element.cancoes}</p>
                    <p class="card-text">${element.voluntarios}</p>
                    <p class="card-text card-footer"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
    `
    
}