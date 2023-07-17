import mongoose from 'mongoose';
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git
const connectionString = "mongodb+srv://it122user:2100Anderson@cluster0.oebwh9b.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionString, {
    dbName: 'class-itprojects',  //or "cars". collection name: cars
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const carsSchema = new Schema({
 id: { type: String, required: true },
 model: String,
 year: Date,
 engine: String,
 power: String,
 ignition: String
 
});
// confuse in video line 32 canvas or week 3 zoom 44:30 time
export const Cars = mongoose.model('Cars', carsSchema);