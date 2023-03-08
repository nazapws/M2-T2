let eventosPasados = []
let eventosFuturos = []
const eventos = data.events
const fechaActual = data.currentDate
const arreglofechas = []

for (let b=0; b<eventos.length; b++){
    arreglofechas.push(eventos[b].date)
}



function compararFecha(valor1, arrayDeFechas, arrayDeEventos, arrayAntes, arrayDespues){
    {
    if(valor1>arrayDeFechas[i]){
    arrayAntes.push(arrayDeEventos[i])
    }
    else{
    arrayDespues.push(arrayDeEventos[i])}
    }
}

for(i=0; i<eventos.length;i++){
    compararFecha(fechaActual, arreglofechas, eventos, eventosPasados, eventosFuturos)
}

console.log(eventosPasados)


let principal = document.getElementById("main")

let tarjetas =  " "
let div1 = document.createElement("div")
div1.classList.add("d-flex")
let divrow = document.createElement("div")
divrow.classList.add("row")
principal.appendChild(divrow)
divrow.appendChild(div1) 

for (even of eventosPasados){
    
    tarjetas += `
    
<div class="card" style="width: 15rem;">
<div class="img-inicio">
  <img src="${even.image}" class="card-img-top" alt="...">
</div>
<div class="card-body">
  <h5 class="card-title">${even.name}</h5>
  <p class="card-text">${even.description}</p>
    <div class="precioyboton">
    <p class="precio">Price: ${even.price} $</p>
    <a href="./details.html" class="ver btn btn-secondary p-1 text-white btn-opacity-50">Ver mas</a>
    </div>
</div>
</div>`

}

div1.innerHTML = tarjetas