let express = require('express')
let cors = require('cors')

let app = express()

app.use(express.json())
app.use(cors())

let database = []

app.post('/person', (req, res) => {
    database.push(req.body)

    console.log(req.body)
    res.status(200).send(database)
})

app.listen(5500, () => {
    console.log('Server listening on 5500')
})
