const eventos = data.events



let principal = document.getElementById("main")

let tarjetas =  " "
let div1 = document.createElement("div")
div1.classList.add("d-flex")
let divrow = document.createElement("div")
divrow.classList.add("row")
principal.appendChild(divrow)
divrow.appendChild(div1) 

for (even of eventos){
    
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
