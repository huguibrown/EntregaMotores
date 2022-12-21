const express = require('express')
const app = express()
let productos= [];

//Configuracion EJS
app.use(express.urlencoded({ extended: true }))
app.set('views', './views')
app.set('view engine', 'ejs')

app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('formulario', { productos })
})

app.get('/listaProductos', (req, res) => {
    res.render('tabla', { productos })
})

const PORT = 3000
const server = app.listen(PORT, () =>
    console.log(`El servidor esta corriendo en el puerto ${server.address().port}`))
server.on('error', error => console.log(`Error en el servidor ${error}`))