import { useContext } from "react";
import { Bookcontext } from "../contexts/BooksContexts";
export default function Items({book}){
  

    const items=useContext(Bookcontext) 


    return(
        <div className="items d-flex">
            <div className="intem-desc">
                Name: {book.name}
            </div>
            <div className="item-button">
               <button onClick={()=>{items.cartFn(book)}}>Add</button>
            </div>

        </div>)
}