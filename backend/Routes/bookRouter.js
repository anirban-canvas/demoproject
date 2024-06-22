import {Router} from 'express'
import getBooks from '../repository/bookRepo.js'
import jsonwebtoken from 'jsonwebtoken'
const bookrouter=Router()

function validateToken(req,res,next){

    console.log(req.headers)
    try{
        let status=jsonwebtoken.verify(req.headers.token,'myprivate')
        if(status.id){
            next()
        }else{
            res.send({
                status:"unauthorized"
            })
    
        }
    }catch(err){

        res.status(422)
        res.send({
            status:"unauthorized"
        })

    }
    



}

bookrouter.get('/',validateToken,async (req,res)=>{

    res.status(201)
    res.send(await getBooks(req.query.searchname))


})

export default bookrouter