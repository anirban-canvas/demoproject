import mongoose from "mongoose"
 mongoose.connect('mongodb://127.0.0.1:27017/indiHome')

let schema=mongoose.Schema

let OrderSchema=new schema({
    books:[{id:String,
        qty:Number
        
    }],
    total:Number
})
 let OrderModel=mongoose.model('orders',OrderSchema)

const createOrder=async (orderObj)=>{

        console.log(orderObj)
        await OrderModel.create(orderObj)
        return "success"

}

export default createOrder