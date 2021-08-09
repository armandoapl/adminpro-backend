const mongoose = require('mongoose');


const dbConnection = async () => {

    try {
        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            userCreateIndex: true
        });

        console.log('Db Online');

    }catch(error){
        throw new Error('Error a la hora de iniciar la base de datos ver logs');
    }

}

module.exports = {
    dbConnection
}