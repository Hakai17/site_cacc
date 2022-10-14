const express = require('express')
const app = express()
const controllers = require('./controllers')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/', controllers.users)


app.listen(3001, () => {
    console.log('servidor escutando na porta 3001')
})
