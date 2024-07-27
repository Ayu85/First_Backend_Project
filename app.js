import express from 'express'
const app=express()
// function to start the express server
export const startServer=()=>{
    app.listen(process.env.PORT,()=>{
        console.log("App started on port ",process.env.PORT);
    })
}
export default app;