let database = []

module.exports = {
    addPerson: (req, res) => {
        database.push(req.body)
        res.status(200).send(database)
    },
    getPeople: (req, res) => {
        res.status(200).send(database)
    },
    updatePerson: (req, res) => {
        let name = req.query.name
        let index = undefined
        for (let i = 0; i < database.length; i++) {
            let currentName = database[i].name
            if (currentName === name) {
                index = i
            }
        }
        if (index === undefined) {
            res.status(400).send('user not found')
        } else {
            database[index].power += 100
            res.status(200).send(database)
        }
    },
    deletePerson: (req, res) => {
        let {name} = req.params
        let index = undefined
        for (let i = 0; i < database.length; i++) {
            let currentName = database[i].name
            if (currentName === name) {
                index = i
            }
        }
        if (index === undefined) {
            res.status(200).send(database)
        } else {
            database.splice(index, 1)
            res.status(200).send(database)
        }
    }
}
