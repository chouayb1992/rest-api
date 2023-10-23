const mongoose = require('mongoose');

const connectDB = async () => {
   const conn = await mongoose.connect('mongodb+srv://chouaybattia55:foot1299@first.gayt7op.mongodb.net/person', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFinfAndModify: true
   });
   console.log(`${conn.connection.host}`);
}

module.exports = connectDB;