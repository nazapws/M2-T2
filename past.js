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