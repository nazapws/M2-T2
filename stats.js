let dat = fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then((response) => response.json())
.then(even => {

const eventos = even.events  
//console.log(eventos)
let tab = document.getElementById("tabla")
const categoriasFutu = [ ]
const categoriasPas = [ ]
//console.log(tab)




let eventosPasados = []
let eventosFuturos = []
const fechaActual = even.currentDate
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
//console.log(eventosPasados)
const arrayasist = []


eventosPasados.forEach(element => {
arrayasist.push(element.assistance)  
});

const arraycapacidad = eventosPasados.map(valor => valor.capacity)
//console.log(arraycapacidad)

function arrayPorc(array1, array2){
    const aporcentaje = [ ]
    for (let i = 0; i<array1.length; i++){

    let porcentaje = (array1[i]/array2[i])*100
    aporcentaje.push(Number(porcentaje))
   }
   return aporcentaje
}

let porcentajes = arrayPorc(arrayasist,arraycapacidad)
//console.log(porcentajes)

function mayor(array){
    let maxi = Math.max(...array)
    return maxi
}
function menor(array){
    let men = Math.min(...array)
    return men
}
let mayorPas = mayor(porcentajes)
//console.log(mayorPas)

let menorPas = menor(porcentajes)
//console.log(menorPas)

let mayorCap = mayor(arraycapacidad)
//console.log(mayorCap)

//Categorias futuro/pasado:

function categ(array, array2){
    array.forEach(element =>{
        if(!array2.includes(element.category)){
            array2.push(element.category)
        }
    })
    return array2
}


let categoriasFut = categ(eventosFuturos, categoriasFutu)
//console.log(categoriasFut)
let categoriasPasado = categ(eventosPasados, categoriasPas)
console.log(categoriasPasado)


//console.log(categoriasFut)

//Ganancia de todos los eventos por categoría:
const precios = []
eventosFuturos.forEach(valor => {
precios.push(valor.price)
})
//console.log(precios)

const asist = [] 
eventosFuturos.forEach(valor => {
    asist.push(valor.estimate)  
    });
//console.log(asist)



function filtrarCategorias(array, entrada){


     let filtradaCat = array.filter(valor => valor.category.toLowerCase().includes(entrada.toLowerCase()));
return filtradaCat
}

let FiltradaFood = filtrarCategorias(eventosFuturos, categoriasFut[0])
//console.log(FiltradaFood)
let FiltradaBook = filtrarCategorias(eventosFuturos, categoriasFut[1])
//console.log(FiltradaBook)
let FiltradaParty = filtrarCategorias(eventosFuturos, categoriasFut[2])
//console.log(FiltradaParty)
let FiltradaRace = filtrarCategorias(eventosFuturos, categoriasFut[3])
//console.log(FiltradaRace)
let FiltradaConcert = filtrarCategorias(eventosFuturos, categoriasFut[4])
//console.log(FiltradaConcert)
let FiltradaMuseum = filtrarCategorias(eventosFuturos, categoriasFut[5])
//console.log(FiltradaMuseum)

//Multiplicación de precio y estimado para sacar la ganancia por categoría:
function mult(array){
    let multiplica = array.map(valor => valor.price*valor.estimate)
    //console.log(multiplica)
    return multiplica
}
let multiFood = mult(FiltradaFood)
//console.log(multiFood)
let multiBook = mult(FiltradaBook)
//console.log(multiBook)
let multiParty = mult(FiltradaParty)
let multiRace = mult(FiltradaRace)
let multiConcert = mult(FiltradaConcert)
let multiMuseum = mult(FiltradaMuseum)
let inicial = 0
let gananciasFuturos = [ ]

function acumular(array){
    let sumar = array.reduce((acc, numero) => acc + numero, inicial)
    
    return sumar
}

//Ganancias futuros:
let promFood = acumular(multiFood)
let promBook = acumular(multiBook)
let promParty = acumular(multiParty)
let promRace = acumular(multiRace)
let promConcert = acumular(multiConcert)
let promMuseum = acumular(multiMuseum)
gananciasFuturos.push(promFood)
gananciasFuturos.push(promBook)
gananciasFuturos.push(promParty)
gananciasFuturos.push(promRace)
gananciasFuturos.push(promConcert)
gananciasFuturos.push(promMuseum)
console.log(gananciasFuturos)

//Porcentaje de ganancias eventos futuros:
function sumaAsist(array){
    let arrayAsist = array.map(valor => valor.estimate)
    //console.log(arrayAsist)
    
    return acumular(arrayAsist)
}

function sumaCap(array){
    let arrayAsist = array.map(valor => valor.capacity)
    //console.log(arrayAsist)
    return acumular(arrayAsist)
}

let asisFood = sumaAsist(FiltradaFood)
let asisBook = sumaAsist(FiltradaBook)
let asisParty = sumaAsist(FiltradaParty)
let asisRace = sumaAsist(FiltradaRace)
let asisConcert = sumaAsist(FiltradaConcert)
let asisMuseum = sumaAsist(FiltradaMuseum)

//console.log(asisConcert)
//console.log(asisMuseum)
//console.log(asisBook)
//console.log(asisParty)
//console.log(asisConcert)

let capFood = sumaCap(FiltradaFood)
let capBook = sumaCap(FiltradaBook)
let capParty = sumaCap(FiltradaParty)
let capRace = sumaCap(FiltradaRace)
let capConcert = sumaCap(FiltradaConcert)
let capMuseum = sumaCap(FiltradaMuseum)

//console.log(capConcert)
//console.log(capMuseum)
//console.log(capBook)
//console.log(capParty)

let porcentajesFut = []

function porcen (valor1, valor2){
    let total = (valor1/valor2)*100
    let totales = total.toFixed(2)
    porcentajesFut.push(totales)
 
    //console.log(total)
    return total
}
//Porcentajes futuros:
let porFood = porcen(asisFood, capFood)
let porBook = porcen(asisBook, capBook)
let porParty = porcen(asisParty, capParty)
let porRace = porcen(asisRace, capRace)
let porConcert = porcen(asisConcert, capConcert)
let porMuseum = porcen(asisMuseum, capMuseum)
console.log(porcentajesFut)
//console.log(porFood)
//console.log(porBook)

//----------------------------------------------------------------------------------------------


let FiltradaFoodP = filtrarCategorias(eventosPasados, categoriasPasado[0])
//console.log(FiltradaFoodP)
let FiltradaMuseumP = filtrarCategorias(eventosPasados, categoriasPasado[1])
//console.log(FiltradaBookP)
let FiltradaConcertP = filtrarCategorias(eventosPasados, categoriasPasado[2])
//console.log(FiltradaParty)
let FiltradaRaceP = filtrarCategorias(eventosPasados, categoriasPasado[3])
//console.log(FiltradaRaceP)
let FiltradaBookP = filtrarCategorias(eventosPasados, categoriasPasado[4])
//console.log(FiltradaConcertP)
let FiltradaCinemaP = filtrarCategorias(eventosPasados, categoriasPasado[5])
//console.log(FiltradaMuseumP)
let FiltradaPartyP = filtrarCategorias(eventosPasados, categoriasPasado[6])
//console.log(FiltradaCinemaP)

function multP(array){
    let multiplica = array.map(valor => valor.price*valor.assistance)
    //console.log(multiplica)
    return multiplica
}

let multiFoodP = multP(FiltradaFoodP)
let multiMuseumP = multP(FiltradaMuseumP)
let multiConcertP = multP(FiltradaConcertP)
let multiRaceP = multP(FiltradaRaceP)
let multiBookP = multP(FiltradaBookP)
let multiCinemaP = multP(FiltradaCinemaP)
let multiPartyP = multP(FiltradaPartyP)

//console.log(multiBookP)



//Ganancias pasados:
const gananciasPasado = [ ]

let promFoodP = acumular(multiFoodP)
let promBookP = acumular(multiBookP)
//console.log(promBookP)
let promPartyP = acumular(multiPartyP)
let promCinemaP = acumular(multiCinemaP)
let promRaceP = acumular(multiRaceP)
let promConcertP = acumular(multiConcertP)
let promMuseumP = acumular(multiMuseumP)
gananciasPasado.push(promFoodP)
gananciasPasado.push(promMuseumP)
gananciasPasado.push(promConcertP)
gananciasPasado.push(promRaceP)
gananciasPasado.push(promBookP)
gananciasPasado.push(promCinemaP)
gananciasPasado.push(promPartyP)
console.log(gananciasPasado)





//Porcentaje de ganancias eventos pasados:

function sumaAsistP(array){
    let arrayAsist = array.map(valor => valor.assistance)
    //console.log(arrayAsist)
    
    return acumular(arrayAsist)
}

let asisFoodP = sumaAsistP(FiltradaFoodP)
let asisBookP = sumaAsistP(FiltradaBookP)
let asisPartyP = sumaAsistP(FiltradaPartyP)
let asisRaceP = sumaAsistP(FiltradaRaceP)
let asisConcertP = sumaAsistP(FiltradaConcertP)
let asisMuseumP = sumaAsistP(FiltradaMuseumP)
let asisCinemaP = sumaAsistP(FiltradaCinemaP)
console.log(asisRaceP)

let capFoodP = sumaCap(FiltradaFoodP)
let capBookP = sumaCap(FiltradaBookP)
let capPartyP = sumaCap(FiltradaPartyP)
let capRaceP = sumaCap(FiltradaRaceP)
let capConcertP = sumaCap(FiltradaConcertP)
let capMuseumP = sumaCap(FiltradaMuseumP)
let capCinemaP = sumaCap(FiltradaCinemaP)

//Porcentajes pasados:
let porcentajePas = [ ]
function porcenP (valor1, valor2){
    let total = (valor1/valor2)*100
    let totales = total.toFixed(2)
    porcentajePas.push(totales)
 
     //console.log(total)
     return total
 }

let porFoodP = porcenP(asisFoodP, capFoodP)
let porMuseumP = porcenP(asisMuseumP, capMuseumP)
let porConcertP = porcenP(asisConcertP, capConcertP)
let porRaceP = porcenP(asisRaceP, capRaceP)
let porBookP = porcenP(asisBookP, capBookP)
let porCinemaP = porcenP(asisCinemaP, capCinemaP)
let porPartyP = porcenP(asisPartyP, capPartyP)
console.log(porcentajePas)


const alguien = document.getElementById("colum2")


function pintar(array1, array2, array3){
    console.log("Me disparó")
    let elem = " "
    for(let i=0; i<array1.length; i++){
        elem +=
        `<tr>
        <th>${array1[i]}</th>
        <th>${array2[i]}$</th>
        <th>${array3[i]}%</th>
        </tr>`
    }
    console.log(elem)
    return elem
}

let resultado = pintar(categoriasFut, gananciasFuturos, porcentajesFut)
//console.log(resultado)





let lineas = " "


lineas += `


<table class=tablita">
        
        <tr>
            <th colspan="3" class="fila">Eventos pasados</th>
        </tr>
        <tr class="fila1">
        <th class="fila1">Mayor porcentaje de asistencia</th>
        <th class="fila1">Menor porcentaje de asistencia</th>
        <th class="fila1">Mayor capacidad</th>
        </tr>
        <tr>
            <th>${eventosPasados[2].name}: ${mayorPas}%</th>
            <th>${eventosPasados[1].name}: ${menorPas}%</th>
            <th>${eventosPasados[13].name}: ${mayorCap}</th>
        </tr>
        
        <tr>
            <th colspan="3" class="fila">Eventos futuros</th>
        </tr>
        
        <tr class="fila1">
        <th class="fila1">Categorías</th>
        <th class="fila1">Ganancias de todos los eventos de una categoría</th>
        <th class="fila1">Porcentaje de asistencia</th>
        </tr>
       
        <tr id="colum2">
           ${pintar(categoriasFut, gananciasFuturos, porcentajesFut)}        
        </tr>
        
        <tr>
            <th colspan="3" class="fila">Eventos pasados</th>
        </tr>
        <tr class="fila1">
        <th class="fila1">Categorías</th>
        <th class="fila1">Ganancias de todos los eventos de una categoría</th>
        <th class="fila1">Porcentaje de asistencia</th>
        </tr>
        <tr>
            ${pintar(categoriasPasado, gananciasPasado, porcentajePas)}
        </tr>
        
        
       
     
        </table>

`
tab.innerHTML = lineas



     


    



})