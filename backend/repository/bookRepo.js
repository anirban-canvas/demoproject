
import mongoose from "mongoose"
 mongoose.connect('mongodb://127.0.0.1:27017/indiHome')

let schema=mongoose.Schema

let BookSchema=new schema({
    name:String,
    price:String
})
 let BookModel=mongoose.model('books',BookSchema)

const getBooks=async (name)=>{

    console.log(name)
    return BookModel.find({name:name})

}

export default getBooks