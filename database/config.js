const mongoose = require('mongoose');

module.exports.dbConnection = async() => {
    try {
        await mongoose.connect( process.env.BD_CNN, { useNewUrlParser: true, useUnifiedTopology: true } );
        console.log('DB Online');
    }catch(err) {
        throw new Error( err );
    }
}