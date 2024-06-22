import {Router} from 'express'
import checkAuth from '../repository/accountRepo.js'
import jsonwebtoken from 'jsonwebtoken'

const accountRouter=Router()

accountRouter.post('/login',async (req,res)=>{

    console.log(req.body)
    const users=await checkAuth(req.body.username,req.body.password)
    console.log(users)
    if(users){
        console.log(users)

        let token=jsonwebtoken.sign({ id:users._id }, 'myprivate');

        res.send({
            "status":"success",
            "token":token
        })

    }else{

        res.status(422)
        res.send({status:"unauthorized"})
    }




})

export default accountRouter