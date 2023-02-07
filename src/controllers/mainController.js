const platos = require('../database/platos.js');
const about = require('../database/about.js');

const mainController = {

    index(req, res){
        res.render('index', {
            about,
            platos
        });
    },

    detalle(req, res){

        const id = Number(req.params.id);

        const plato = platos.find( plato => plato.id === id);
        res.render('detalleMenu', { 
            plato 
        });
    }

}

module.exports = mainController;