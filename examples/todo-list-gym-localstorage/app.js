
// ===== GLOBAL VARIABLES =====
const formularioUI = document.querySelector('#formulario')
const listaActividadesUI = document.getElementById('listaActividades')
let arrayActividades = []


// ===== FUNCTIONS =====
// Function create item
const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }

    arrayActividades.push(item)
    return item
}


// Function save to localstorage
const GuardarDB = (actividad) => {
    localStorage.setItem('keyRutina', JSON.stringify(arrayActividades))
    PaintDB()
}

// Function paint list
const PaintDB = () => {
    listaActividadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('keyRutina'))

    if(arrayActividades === null) {
        arrayActividades = [];
    } else {
        arrayActividades.forEach(element => {
            if (element.estado) {
              listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert"><span class="material-icons float-start mr-3">accessibility</span><b>${element.actividad}</b> - ${element.estado}<span class='float-end'><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`
            } else {
              listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><span class="material-icons float-start mr-3">accessibility</span><b>${element.actividad}</b> - ${element.estado}<span class='float-end'><span class="material-icons">done</span><span class="material-icons">delete</span></span></div>`
            }
        })
    }
}


// Function delete
const EliminarDB = (actividad) => {
  
  // 1. Option long find 
  let indexArray

  arrayActividades.forEach((elemento, index) => {

    if (elemento.actividad === actividad) {
      indexArray = index
    }
    
  })

  arrayActividades.splice(indexArray, 1)
  GuardarDB()
}


// Function edit
const EditarDB = (actividad) => {
  // 2. Option medium find
  /*
  let indexArray = arrayActividades.findIndex((elemento) => {
    return elemento.actividad === actividad
  })
  */

  // 3. Option short find
  let indexArray = arrayActividades.findIndex((elemento) => elemento.actividad === actividad)
  console.log(arrayActividades[indexArray])
  arrayActividades[indexArray].estado = true
  GuardarDB()
}


// ===== EVENTLISTENER =====
// Evento Crear y Guardar actividad
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault()
    let actividadUI = document.querySelector('#actividad').value

    CrearItem(actividadUI)
    formularioUI.reset()
    GuardarDB()
    PaintDB()
})

// Evento paint list
document.addEventListener('DOMContentLoaded', PaintDB)

// Event capture trash
listaActividadesUI.addEventListener('click', (e) => {
  e.preventDefault()

  if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
    //console.log(e.target.innerHTML)
    console.log(e.path[2].childNodes[1].innerHTML)
    let texto = e.path[2].childNodes[1].innerHTML

    if (e.target.innerHTML === 'delete') {
      // Action delete
      EliminarDB(texto)
    }

    if (e.target.innerHTML === 'done') {
      // Action done
      EditarDB(texto)
    }

  }
})