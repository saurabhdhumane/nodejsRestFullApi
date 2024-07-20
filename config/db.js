const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log(`Database Connected Successfully: ${mongoose.connection.name} @ ${mongoose.connection.host}`);
    } catch (error) {
        console.log({
            success: false,
            message: "Database Connection Error",
            error: error.message
        })
        mongoose.connection.close()
        throw new Error('Database Connection Error')
    }
}

module.exports = dbConnect