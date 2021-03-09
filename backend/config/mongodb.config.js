const mongoose = require('mongoose');

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)

        //legacy code i think
        // const connection = mongoose.connection;
        // connection.once('open', ()=> console.log("Successfully"))

    } catch (err) {
        console.error(`Error: ${err.message}`.red.underline.bold)
        process.exit(1)
    }

    mongoose.set('useFindAndModify', false)
}

module.exports = connectionDB;