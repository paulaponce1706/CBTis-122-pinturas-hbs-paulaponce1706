//configuración
const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine','hbs');

//Partials
hbs.registerPartials(__dirname + '/views/partials');

//Sitio estatatico
app.use(express.static(__dirname +'/public'));

//rutas
app.get('/index', (req,res)=>{
    res.render('index',{
        autor: 'Paula Menchaca',
        year: new Date().getFullYear(),
        title: 'Inicio'
    });
});

app.get('/DavidAlfaro', (req,res)=>{
    res.render('DavidAlfaro',{
        autor: 'Paula Menchaca',
            year: new Date().getFullYear(),
              title: 'David Alfaro'
    });
});

app.get('/RufinoTamayo', (req,res)=>{
    res.render('RufinoTamayo',{
        autor: "Paula Menchaca",
        year: new Date().getFullYear(),
        title: 'Rufino Tamayo'
    });
});
app.get('/JoseOrozco', (req,res)=>{
    res.render('JoseOrozco',{
        autor: "Paula Menchaca",
        year: new Date().getFullYear(),
        title: 'Jose Orozco'
    });
});
app.get('/LeonoraCarrington', (req,res)=>{
    res.render('LeonoraCarrington',{
        autor: "Paula Menchaca",
        year: new Date().getFullYear(),
        title: 'Leonora Carrington'
    });
});
app.get('/MariaIzquierdo', (req,res)=>{
    res.render('MariaIzquierdo',{
        autor: "Paula Menchaca",
        year: new Date().getFullYear(),
        title: 'María Izquierdo'
    });
});
app.get('/pintores', (req,res)=>{
    res.render('pintores',{
        autor: "Paula Menchaca",
        year: new Date().getFullYear(),
        title: 'Pintores'
    });
});
app.get('/contacto', (req,res)=>{
    res.render('contacto',{
        autor: "Paula Menchaca",
        year: new Date().getFullYear(),
        title: 'Información'
    });
});

//Puerto
app.listen(3000, ()=>{
    console.log('escuchando el puerto 3000');
});

