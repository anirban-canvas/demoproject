import express from 'express'
import bookrouter from './Routes/bookRouter.js';
import orderrouter from './Routes/OrderRouter.js';
import accountRouter from './Routes/AccountRouter.js'
import cors from 'cors'
const server=express();

server.use(express.json())
server.use(cors())

server.use('/books',bookrouter)
server.use('/order',orderrouter)
server.use('/account',accountRouter)




server.listen(3300,()=>{
    console.log("server is running")
})
