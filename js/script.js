// Selecionando Elementos
const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicatorInput = document.querySelector('multiplicator')

// Funções


// Eventos

multiplicationForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value

    const multiplicatorNumber = +multiplicatorInput.value

})