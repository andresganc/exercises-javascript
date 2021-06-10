
function stringCharactersE1() {
    // Metodos de obtener los datos
    let qs1ID = document.querySelector('#idSCE1').value
    //let qsElement = document.querySelector('input').value
    //let qsClass = document.querySelector('.classSCE1').value

    //let gebID = document.getElementById('idSCE1').value
    //let gebName = document.getElementsByName('nameSCE1').value
    //let gebClass = document.getElementsByClassName('classSCE1').value
    
    qsID.length

    window.alert(`La cadena ${qsID} tiene un largo de ${qsID.length} caracteres`)
}

function stringCharactersE2() {
    let string2 = document.querySelector('#idSCE2').value
    let show2 = document.querySelector('#idSCEC2').value
    let resultado2 = string2.substr(0, show2)
    window.alert(`Cadena original ${string2} caracteres a mostrar ${cut2} resultado : ${resultado2}`)    
}

function stringCharactersE3() {
    let string3 = document.querySelector('#idSCE3').value
    let cut3 = document.querySelector('#idSCEC3').value
    let stringLength = string3.length
    window.alert(`${stringLength}`)
    let resultado3 = string3.substr(0, cut3)
    
    window.alert(`Cadena original ${string3} caracteres a cortar ${cut3} resultado : ${resultado3}`)    
}
