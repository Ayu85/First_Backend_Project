import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
// to enable cross origin sharing
app.use(cors({
    origin: '*'
}))
// function to start the express server
export const startServer = () => {
    app.listen(process.env.PORT, () => {
        console.log("App started on port ", process.env.PORT);
    })
}
export default app;