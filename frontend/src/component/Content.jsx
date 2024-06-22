import { useContext, useState } from "react";
import CartItem from "./CartItem";
import Items from "./Item";
import { Bookcontext } from "../contexts/BooksContexts";

export default function Content(){
    console.log("Rerendered contnet")
   const [searchinput,setSEarchinput]=useState("")

   const calculateTotal=()=>{
    console.log("test")
    let total=0
    items.cart.foreach((it)=>{
        total=total+parseInt(it.price)
    })

    return total

   }

    const items=useContext(Bookcontext)
    console.log(items)
    const searchBook=(name)=>{

        return items.searchFn(name)

    }

    return(
        <div className="container-content d-flex">
           <div className="container-content-left">
                <div className="search-container">
                    <input type="text"  value={searchinput} onChange={(e)=>setSEarchinput(e.target.value)}/>
                    <button onClick={()=>searchBook(searchinput)} >Search</button>
                </div>
               <div className="item-container">

                {
                    items.books.map((item)=>{

                        return  <Items book={item}/>
                    })
                }

               
             

               </div>


           </div>
           <div className="container-content-right">
                <div className="cart">
                 
                   {
                    items.cart.map((item)=>{

                        return    <CartItem item={item}/>
                    })
                }
          
                </div>
                <div className="calculation">
                    <div className="totalItems d-flex">
                            <div>
                                Total
                            </div>
                            <div>
                     
                                {items.cart.length !== 0 ? items.cart.reduce((prev, cur) => parseInt(prev) + parseInt(cur.price), 0) : "0"}
                            </div>
                    </div>
                    {/* <div className="totalItems d-flex">
                    <div>
                                CGST
                            </div>
                            <div>
                                300
                            </div>
                    </div>
                    <div className="totalItems d-flex">
                    <div>
                                SGST
                            </div>
                            <div>
                                300
                            </div>
                    </div>
                    <div className="totalItems d-flex">
                    <div>
                                Net Total
                            </div>
                            <div>
                                300
                            </div>
                    </div> */}
                    <div>
                        <button onClick={()=>items.Orderbookfn()}>Order </button>
                    </div>
                </div>

           </div>
        </div>
    )


}