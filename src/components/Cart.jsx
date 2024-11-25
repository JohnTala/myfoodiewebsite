import { FaCartShopping } from "react-icons/fa6";

import './cart.css';
import { foodLists } from "./foods";
import { useState } from "react";
import CartItemsPricing from "./CartItemsPricing";

const Cart = () => {

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(true);

    //Add item into your Cart
    const handleAddCart = (item) => {
        let ispresent = false;
        cart.forEach((data) => {
            if (data.id === item.id) {
                ispresent = true;

            }
        })
        if (ispresent) {
            alert('Item already added!')
            return;
        }
        setCart([...cart, item]);
        setShowCart(false)

        //console.log(item)
    }

    //Delete item from cart

    const handleDelete = (id) => {
        const deletedItem = cart.filter((item) => item.id !== id)
        setCart(deletedItem);
    }

    //Add Number of item
    const handleNumberItem = (Itemcart,d) => {
        //console.log(amnt, d)
        let indx = -1;
        cart.forEach((cartItem,idx) => {
            if (cartItem.id ===Itemcart.id) {
                indx=idx
            }
        })
        //create a temporary array
      const  newArray = cart;
        newArray[indx].amount = newArray[indx].amount + d;
        if (newArray[indx].amount === 0) 
            newArray[indx].amount =1;
        setCart([...newArray]);
    }

    

    return (
        <>
            <div className="myShopCart">
                <FaCartShopping  onClick={()=>{setShowCart(true)}}/>
                <span>{cart.length}</span>
            </div>
       

        <div className="items">
        {
           showCart?
            foodLists.map((food) => (
                <div className="starters" key={food.id}>
                        {food.mymains.map((item) => (
                            <div key={item.id} id='mycontainerCart'>
                                <img src={item.meal} width="70" height="150" id="myImg"
                                    onClick={() => { handleAddCart(item) }} />
                                <figcaption>{item.mealdesc}</figcaption>
                                <figcaption>R {item.mealprice}</figcaption>
                                {/* <button onClick={()=>{handleAddCart(item)}}>AddToCart</button> */}
                            </div>
                        )
                        )}
                </div>
            )): <CartItemsPricing cart={cart} handleDelete={handleDelete} setShowCart={setShowCart} handleNumberItem={handleNumberItem} />
        }
            </div>
          
            </>);
}
 
export default Cart;