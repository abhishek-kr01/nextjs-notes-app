import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

let isConnected = false;

async function dbConnect() {

    if(isConnected){
        console.log("Mongodb is already Connected")
        return;
    }

    try {
        const db = await mongoose.connect(MONGODB_URI)
        isConnected = db.connections[0].readyState === 1
        console.log("Connected to mongodb: ", db)
    } catch (error) {
        console.error("Failed to connect to mongodb: ", error)
    }
}

export default dbConnect;