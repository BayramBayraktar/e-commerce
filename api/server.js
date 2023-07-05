const express = require('express');
const App = express();
const Connect_Db = require('./config/db');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cookiParser = require('cookie-parser');

/*dotenv path*/
require('dotenv').config({
    path: './config/config.env'
})

/* Mongo_db connect */
Connect_Db()

App.use(express.static('public'))

App.use(bodyparser.json())
App.use(express.urlencoded({ extended: false }));
App.use(cookiParser());
App.use(cors({ origin: process.env.BASE_URL, credentials: true }));

/*Routes*/
App.use('/api', require('./routes/index'));

if (process.env.NODE_ENV === "development") {
    App.use(morgan('dev'))
    console.log('Development Mode')
}

/* listening port  */
App.listen(process.env.PORT || 5000, () => {
    console.log(`${process.env.PORT} port serverin runing`)
})
