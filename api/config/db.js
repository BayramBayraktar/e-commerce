const mongoose = require('mongoose');

const Connect_Db = async () => {

    const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim())
    const connectionAddres = `mongodb+srv://devCluster:${password}@devcluster.96xyqqq.mongodb.net/?retryWrites=true&w=majority`

    const conection = await mongoose.connect(connectionAddres, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`MongoDb Connected ${conection.connection.host}`)
}

module.exports = Connect_Db