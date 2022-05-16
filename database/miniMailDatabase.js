const mongoose = require("mongoose");

const miniMailConnection = async function() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected");
  } catch (error) {
    console.log({message: error.message});
    process.exit(1);
  }
}

module.exports = miniMailConnection;