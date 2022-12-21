const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const PORT = 3030

//SETEO DE LAS RUTAS 
app.engine('handlebars',engine())
app.set('views','./views')
app.set('view engine', 'handlebars')



app.get('/', (req,res)=> {
    const productos ={
        Nombre: "top ngr",
        precio: 2500,
        foto: "url"
    };
    res.render('productos',productos);
})


const server = app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto: ${server.address().port}`)
});



server.on("error", error => console.log(`Error en el servidor: ${error}`))