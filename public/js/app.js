console.log('Client side javascript file is loaded!')

fetch("http://puzzle.mead.io/puzzle").then((res) => {
    res.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')

// messageOne.textContent = ''


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''
    fetch('/weather?address=' + location).then((res) => {
    res.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }else {
        console.log(data.location)

        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
        console.log(data.forecast)
    }
    })
}) 
})