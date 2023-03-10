let postForm = document.getElementById('post-form')
let putForm = document.getElementById('put-form')
let deleteForm = document.getElementById('delete-form')
let getButton = document.getElementById('get-button')
let postNameInput = document.getElementById('post-name')
let postPowerInput = document.getElementById('post-power')
let putNameInput = document.getElementById('put-name')
let deleteNameInput = document.getElementById('delete-name')

let baseURL = 'http://localhost:5500/'


postForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const maBod = {
        name: postNameInput.value,
        power: postPowerInput.value
    }
    axios.post('http://localhost:5500/person', maBod)
    .then((result) => {
        alert('User Added!')
        console.log(result.data)
    })
    .catch(() => {
        console.log('backend didn\'t work')
    })
})