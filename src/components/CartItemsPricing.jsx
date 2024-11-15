import { useEffect, useState } from "react";
import './cart.css';

const CartItemsPricing = ({ cart,handleDelete,handleNumberItem,setShowCart }) => {
    
    const [ItemPrice, setItemPrice] = useState(0);

    //Doing the calculation
    const handleItemCalculation = () => {
        let total = 0;
        cart.map((item) => (
            total += item.amount * item.mealprice
        ))
        setItemPrice(total)
    }

    useEffect(() => {
        handleItemCalculation()
    },[handleItemCalculation])
    return (
        <div className="myCartPrice">
            {
            cart.map((item) => (
                <div className="insideCart" key={item.id}>

                    <div className="myfigCart">
                        <img src={item.meal} className="myImg" width="150" height="150" onClick={()=>{setShowCart(true)}}/> 
                        <figcaption>{item.mealdesc}</figcaption>
                    </div>

                    <div className="operand">
                        <button className="btn plus" onClick={() => { handleNumberItem(item,+1) }}>+</button>
                        <button className="btn minus">{item.amount}</button>
                        <button className="btn" onClick={() => { handleNumberItem(item,-1) }}>-</button>
                    </div>

                    <div className="operand">
                        <span>R {item.mealprice.toFixed(2)}</span>
                        <button className="btn deletebtn" onClick={()=>{handleDelete(item.id)}}>Delete</button>
                    </div>
                </div>
            ))
        }
        <div>
            <span>Total   </span>
                <span>R { ItemPrice.toFixed(2) }</span>
        </div>
    
        </div>
    );
}
 
export default CartItemsPricing;