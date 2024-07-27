import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()
// to enable cross origin sharing
app.use(cors({
    origin: '*'
}))
// to do crud operation on cookies
app.use(cookieParser())
// to recieve form data , set a file size limit
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({limit:'10kb'}))


export default app;