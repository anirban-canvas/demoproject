import {Router,json} from 'express'
import createOrder from '../repository/orderRepo.js'
import jsonwebtoken from 'jsonwebtoken'
import validateToken from '../middleware/validateToken.js'
const orderrouter=Router()

//orderrouter.use(json())


orderrouter.post('/',validateToken,async (req,res)=>{

    console.log(req.body)

    let status = await createOrder(req.body)
    res.status(201)
    res.send({
        orderId:"1234",
        status:'Success'
    })


})

export default orderrouter