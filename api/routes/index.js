const express = require('express')
const App = express();

App.use('/user', require('./userRoutes')); // user route
App.use('/product', require('./productRoute')); // product route
App.use('/card', require('./cardRoute')); // Card route


module.exports = App