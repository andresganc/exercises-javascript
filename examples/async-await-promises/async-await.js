
const $pokemon = document.querySelector('#pokemon')
const $message = document.querySelector('#message')

function renderPokemon(image) {
  $pokemon.setAttribute('src', image)
}

function renderMessage(message) {
  $message.textContent = message
}


async function searchPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/14444/')
  console.log(response.ok)
  if(response.ok) {
    const pokemon = await response.json()
    console.log(pokemon)
    renderPokemon(pokemon.sprites.front_default)
  } else {
    renderMessage('Pokemon no encontrado :(')
  }
}
searchPokemon()


function buy(thingToBuy, time = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      renderMessage(`${thingToBuy} ✅`)
      resolve(`${thingToBuy} ✅`)
    }, time)
  })
}


const all = async () => {
  console.time()
  const cart = await Promise.all([
    buy('frutas', 1000),
    buy('verduras', 2000),
    buy('carne', 1000),
    buy('granos', 1000),
  ])
  console.log(cart)
  console.timeEnd()
  renderMessage(cart.toString())

  // .then((cart) => {
  //   console.timeEnd()
  //   renderMessage(cart.toString())
  // })
}
all()



// (async ()=> {
//   const shopping = async () => {
//     const cart = []
//     const fruta = await buy('fruta')
//     // cart.push(fruta)
//     const verduras = await buy('verduras')
//     // cart.push(verduras)
//     const carne = await buy('carne')
//     // cart.push(carne)
//     const granos = await buy('granos')
//     cart.push(fruta, verduras, carne, granos)
//     return cart
//     // .then(thing => { cart.push(thing); return buy('verduras') })
//     // .then(thing => { cart.push(thing); return buy('carne') })
//     // .then(thing => { cart.push(thing); return buy('granos') })
//     // .then(thing => { cart.push(thing); return cart })
//   }

//   const cart = await shopping()
//   renderMessage(cart.toString())
//   // .then((cart) => {
//   //   renderMessage(cart.toString())
//   // })
// })()

// buy('frutas')
// .then((thing) => {
//   renderMessage(thing)
// })