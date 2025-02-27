import mongoose from "mongoose";

mongoose.connect(process.env.DB_LINK, {dbName:"portfolio"});

const db = mongoose.connection;

db.on("error", (error) => console.log("DB error: ", error));
db.once("open", () => console.log("Connected to DB"))