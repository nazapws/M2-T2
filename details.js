let datos = fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((response) => response.json())
.then(even => {

const queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get("id")

let arrayeventos = even.events
console.log(arrayeventos)

const t = arrayeventos.filter(valor => id == valor.id)
console.log(t)
const a = document.getElementById("dif")

let imprimir = " ";

imprimir += 
` <div class="detalle">
<figure class="figure2">
<img src="${t.image}" class="figure-img img-fluid rounded" alt="foto de ${t.image}">
    
</figure>   
<div class="titulo">
<h5 class="card-title titulotarj">${t.name}</h5>
      <div class="precio1"><b>Fecha:</b> ${t.date}</div>
      <p class="card-text"><b>Description:</b>${t.description}</p>
      <div class="precio1"><b>Categoría: </b> ${t.category}</div>
      <div class="precio1"><b>Lugar: </b>${t.place}</div>
      <div class="precio1"><b>Capacidad:</b> ${t.capacity}</div>
      <div class="precio1"><b>Asistencia:</b> ${t.assistance}</div>
        <div class="precioyboton">
        <p class="precio1"><b>Price: </b>${t.price} $</p>
</div> 
</div> `

a.innerHTML = imprimir


})