import app, { startServer } from './app.js'
import connectDb from './db/db.js'
import dotenv from 'dotenv'
// setting up the dotenv configuration
dotenv.config({
    path: './env'
})

// calling function to connect the database and after successfull connection start express server
connectDb()
    .then(() => {
      startServer();
    }).catch((err) => {
        console.log("Mongo db connection failed , Error:- ", err);
    })