
const ContainerMain = document.querySelector('.main')
const H2Title = document.querySelector('.h2-title')
const btnCambiar = document.querySelector('.btn-cambiar')

btnCambiar.addEventListener('click', () => {
    H2Title.classList.toggle('titleStyles')
    ContainerMain.classList.toggle('mainStyles')
})