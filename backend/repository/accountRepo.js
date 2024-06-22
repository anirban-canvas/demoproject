
import mongoose from "mongoose"
 mongoose.connect('mongodb://127.0.0.1:27017/indiHome')

let schema=mongoose.Schema

let UserSchema=new schema({
    username:String,
    password:String
})
 let UserModel=mongoose.model('users',UserSchema)

const checkAuth=async (username,password)=>{

  let users=await UserModel.findOne({username:username,password:password})
  console.log(users)
  return users

}

export default checkAuth