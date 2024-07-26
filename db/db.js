import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js'

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("Boom !!!! Mongodb connected:- ", connectionInstance.connection.host);
    } catch (error) {
        console.log("Mongodb Connection Error:- ", error);
    }
}
export default connectDb;