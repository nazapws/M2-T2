console.log([document])


let dat = fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((response) => response.json())
.then(even => {

let eventos = even.events
let principal = document.getElementById("nuevo")
let tarjetas =  " "

for (even of eventos){
    
    tarjetas += `
    
    <div class="card" style="width: 15rem;">
    <div class="img-inicio">
      <img src="${even.image}" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">${even.name}</h5>
      <div class="precio"><b>Fecha:</b> ${even.date}</div>
      <p class="card-text">${even.description}</p>
      <div class="precioyboton">
        <p class="precio"><b>Price: </b>${even.price} $</p>
        <a href="./details.html?id=${even._id}" class="ver btn btn-secondary p-1 text-white btn-opacity-50">Ver mas</a>
        </div>
    </div>
    </div>`

}


principal.innerHTML = tarjetas


const check = document.getElementById("cate")
const barratexto = document.getElementById("barra")

barratexto.addEventListener("input", ()=>{
    let primerFiltro = filtrarBarra(eventos,barratexto.value)
    //console.log(primerFiltro)
    let segundoFiltro = filtrarChecks(primerFiltro)
    //console.log(segundoFiltro)
    mostrar(segundoFiltro)
})


check.addEventListener("change", ()=>{
  let primerFiltro = filtrarBarra(eventos, barratexto.value)
   // console.log(primerFiltro)
    let segundoFiltro = filtrarChecks(primerFiltro)
   // console.log(segundoFiltro)
    mostrar(segundoFiltro)
})


mostrar(eventos)
checkboxes(eventos)

function checkboxes (array){
  let arrayCategorias = array.map(valor => valor.category)
  let setCategorias = new Set(arrayCategorias)
  let checkeados = " "
  setCategorias.forEach(valor => {
    checkeados += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${valor}" value="${valor}">
    <label class="form-check-label" for="${valor}">${valor}</label>
  </div>
 `
  })
  check.innerHTML = checkeados
}

function filtrarBarra(array, entrada){

  let filtrado = array.filter(valor => valor.name.toLowerCase().includes(entrada.toLowerCase()))
  console.log(filtrado)
  return filtrado
}

function filtrarChecks(array){
  let checks = Array.from(document.querySelectorAll("input[type='checkbox']"))
  let losCheckeados = checks.filter(valor => valor.checked)
  //console.log(losCheckeados)

  if(losCheckeados.length == 0){
    return array}
  
  let categoria = losCheckeados.map(valor => valor.value)
  console.log(categoria)
  
  //let coincidencia = filtrarArreglo(array2, categoria)
  
  let catFiltro = array.filter(valor => categoria.includes(valor.category)) 
  console.log(catFiltro)

  //let catFiltro1 = array.concat(catFiltro)
  //console.log(catFiltro1)
  return catFiltro
}

function mostrar(array){
  if(array.length == 0){
      principal.innerHTML = "<h2 >No se encontraron coincidencias :(</h2>"
      return
  }
  let mostradas = ''
  array.forEach(valor => {
      mostradas += `
      <div class="card" style="width: 15rem;">
    <div class="img-inicio">
      <img src="${valor.image}" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">${valor.name}</h5>
      <div class="precio"><b>Fecha:</b> ${even.date}</div>
      <p class="card-text">${valor.description}</p>
      <div class="precioyboton">
        <p class="precio"><b>Price: </b>${valor.price} $</p>
        <a href="./details.html" class="ver btn btn-secondary p-1 text-white btn-opacity-50">Ver mas</a>
        </div>
    </div>
    </div>
    `
  })
  principal.innerHTML = mostradas
}

})









