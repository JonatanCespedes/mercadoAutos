module.exports = { // Exporto un objeto con métodos
    index : (req, res) => {
        res.render('home', { //El método render, renderiza la plantilla ejs que le indiquemos en el primer parámetro. Como segundo parámetro enviamos un objeto con variables a esa vista.
            title : 'Mercado Autos',
            mensaje : 'Bienvenidx a mi sitio'
        });
    },
    about : (req, res) => {
        res.render('about')
    }
}