const mongoose = require('mongoose');

const connStr = 'mongodb://localhost:27017/crudDB';

mongoose.connect(connStr, function(err){
    if (err) throw err;
    console.log ('Successfully connected to MongoDB');
    console.log(mongoose.connection.host);
    console.log(mongoose.connection.port);
});

module.exports = mongoose;
