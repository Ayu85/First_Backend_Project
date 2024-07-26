import connectDb from './db/db.js'
import dotenv from 'dotenv'
// setting up the dotenv configuration
dotenv.config({
    path:'./env'
})

// calling function to connect the database
connectDb()