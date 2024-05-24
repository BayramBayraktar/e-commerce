const express = require('express');
const App = express();
const Connect_Db = require('./config/db');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cookiParser = require('cookie-parser');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/index')

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


/* graphql endpoint */
App.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
}))

/*Routes*/
App.use('/api', require('./routes/index'));

if (process.env.NODE_ENV === "development") {
    App.use(morgan('dev'))
    console.log('Development Mode')
}

/* listening port  */
App.listen(process.env.PORT || 80, () => {
    console.log(`${process.env.PORT} port serverin runing`)
})
