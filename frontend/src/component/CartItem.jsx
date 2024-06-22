export default function CartItem({item}){


    return(<div className="cart-items d-flex">
    <div className="info">{item.name}</div>
    <div className="price">{item.price}</div>
    </div>)
}






