const express = require('express')
const app = express()

//Configuracion PUG

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/datos', (req, res) => {
    const queryParams = req.query
    res.render('nivel', queryParams)
})

const PORT = 3003
const server = app.listen(PORT, () =>
    console.log(`El servidor esta corriendo en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en el servidor ${error}`))