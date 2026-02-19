import express from 'express'
import dotenv from 'dotenv'
import connection from './connection.js'
import router from './router.js'


dotenv.config()
const app = express()
app.use(express.json())

app.use('/api',router)

connection().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log(`server created at http://localhost:${process.env.PORT}`);
    
})


}).catch((err)=>{
    
    console.log(err);
})
