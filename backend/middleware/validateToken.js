export default function validateToken(req,res,next){

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