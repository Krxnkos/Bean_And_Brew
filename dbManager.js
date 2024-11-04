const mongoose = require('mongoose');

class Manager {
    static connect() {
        const mongoDB = process.env.DB_CONN;
        if (!mongoDB) {
            console.log('Error: No DB Connection String');
            return;
        }
        mongoose.connect(mongoDB);
        const db = mongoose.connection;
        db.on("connected", () => {
            console.log("Connected to DB");
        });
        db.on("open", () => {
            console.log("Database Open");
        });
        db.on("disconnected", () => {
            console.log("Disconnected from DB");
        });
        db.on("reconnected", () => {
            console.log("Reconnected to DB");
        });
        db.on("disconnecting", () => {
            console.log("Disconnecting from DB");
        });
        db.on("close", () => {
            console.log("Database Closed");
        });
    }
}

module.exports = Manager;