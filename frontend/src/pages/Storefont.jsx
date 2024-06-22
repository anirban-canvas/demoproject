import { useState } from "react";
import Content from "../component/Content";
import Topbar from "../component/Topbar";
import { Bookcontext } from "../contexts/BooksContexts";
import axios  from "axios";




const BookInventory=[]



export default function Storefont(){
    console.log("Rerendered PArent")
    const [books,setBooks]=useState([
        
    ])

    const [cart,setCarts]=useState([
        
    ])
    const [flag,setFlag]=useState(0)

    const search=async (name)=>{
        console.log(name)

        // let searchedbooks= BookInventory.filter((bk)=>bk.name==name)

        fetch(`http://localhost:3300/books/?searchname=${name}`)
        .then((res)=>res.json())
        .then((res)=>{

        setBooks(res)
        if(flag==0){
         setFlag(1)
        }else{
         setFlag(0)
        }
        })



     }

     const addTocart=(book)=>{

        //     console.log(id)
        // let books=BookInventory.find((bk)=>bk.id==id)
        
        let temparr=cart
        temparr.push(book)
        setCarts(temparr)
        if(flag==0){
            setFlag(1)
           }else{
            setFlag(0)
           }

     }

     const Order=async()=>{

        let tempbooks=[]
        let total=0
        for(let ct of cart){
            console.log(ct)
            let tempObj={}
            tempObj.id=ct._id
            tempObj.qty=1
            
            total=total+parseInt(ct.price)
            tempbooks.push(tempObj)
        }
        

       await  axios({
            method: 'post',
            url: 'http://localhost:3300/order/',
            headers:{token:localStorage.getItem('token')},
            data: {
                books: tempbooks,
              total: total
            }
          });


        setCarts([])
        if(flag==0){
            setFlag(1)
           }else{
            setFlag(0)
           }


     }

  
    const mergedcontext={books:books,cart:cart,searchFn:search,cartFn:addTocart,Orderbookfn:Order}

 

    return (
      <Bookcontext.Provider value={mergedcontext}>
                    <div className="container">

        <Topbar/>
        <Content/>


        </div> 

      </Bookcontext.Provider>
   
    )

}