let eventosPasados = []
let eventosFuturos = []
const eventos = data.events
const fechaActual = data.currentDate
console.log(eventos)
console.log(fechaActual)

console.log(eventos[0].date)

let arreglofechas = []

for (let b=0; b<eventos.length; b++){
    arreglofechas.push(eventos[b].date)
}
console.log(arreglofechas)


function compararFecha(valor1, arrayDeFechas, arrayDeEventos, arrayAntes, arrayDespues){
    for(i=0; i<arrayDeEventos.length;i++){
    if(valor1>arrayDeFechas[i]){
    arrayAntes.push(arrayDeEventos[i])
    }
    else{
    arrayDespues.push(arrayDeEventos[i])}
    }
}


compararFecha(fechaActual, arreglofechas, eventos, eventosPasados, eventosFuturos)



    /*
    if(fechaActual>eventos[i].date){
        eventosPasados.push(eventos[i])
    }
    else {
        eventosFuturos.push(eventos[i])
    }

}
*/
console.log(eventosPasados)
console.log(eventosFuturos)

