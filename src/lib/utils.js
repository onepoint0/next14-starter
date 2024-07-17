const { default: mongoose } = require("mongoose");

const connection = {};

const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('already connected to db');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;

  } catch (error) {
    console.log('db conn err ',error);
    throw new Error()
  }
}