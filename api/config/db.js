const mongoose = require('mongoose');

const Connect_Db = async () => {
    const conection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`MongoDb Connected ${conection.connection.host}`)
}

module.exports = Connect_Db