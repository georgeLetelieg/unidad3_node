
// Creamos una constante a la cual le asignamos una
// función anonima (
// req = request (petición), 
// res = response (respuesta), 
// next = siguiente)
const logger = (req ,res, next) => {

    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;