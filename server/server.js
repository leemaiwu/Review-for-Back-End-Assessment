let express = require('express')
let cors = require('cors')

let app = express()

app.use(express.json())
app.use(cors())

let {
    addPerson,
    getPeople,
    updatePerson,
    deletePerson
} = require('./controller')

app.post('/person', addPerson)

app.get('/people', getPeople)

app.put('/person', updatePerson)

app.delete('/person/:name', deletePerson)

app.listen(5500, () => {
    console.log('Server listening on 5500')
})
