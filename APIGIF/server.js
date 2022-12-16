const express = require('express')
const { engine } = require ('express-handlebars');
const app = express()
const port = 3000

app.engine('hbs', engine({ defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');



app.get('/',(req, res )=> {
    res.render('index', {'index': true});

})

app.get('/page1',(req, res )=> {
    res.render('page1', {'page1': true});
})

app.get('/page2',(req, res )=> {
    res.render('page2', {'page2': true});
})

app.listen(port, () => {
console.log(`le serveur ecoute a l'adresse http://localhost:3000`)
})

