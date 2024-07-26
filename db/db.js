const mongoose = require('mongoose')
import { DB_NAME } from '../constants'

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Mongodb connected:- ", connectionInstanceF);
    } catch (error) {
        console.log("Mongodb Connection Error:- ", error);
    }
}
export default connectDb;