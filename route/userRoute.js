const route = require('express').Router();
const UserCtrl = require('../controller/userCtrl');

route.get('/', UserCtrl.index);
route.get('/home', UserCtrl.index);
route.get('/create', UserCtrl.new);
route.get('/update/:id', UserCtrl.edit);
route.get('/delete/:id', UserCtrl.delete);


route.post('/create', UserCtrl.create);
route.post('/update/:id', UserCtrl.update);
route.get('/*', UserCtrl.notFound);



module.exports = route;