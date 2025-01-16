import { useEffect, useState } from "react";
import './cart.css';

const CartItemsPricing = ({ cart,handleDelete,handleNumberItem,setShowCart }) => {
    
    const [ItemPrice, setItemPrice] = useState(0);
    const [modal, setModal] = useState(false);


    //Doing the calculation
    const handleItemCalculation = () => {
        let total = 0;
        cart.map((item) => (
            total += item.amount * item.mealprice
        ))
        setItemPrice(total)
      localStorage.setItem('total',JSON.stringify(total))  
    }


    useEffect(() => {
        handleItemCalculation()
    }, [handleItemCalculation])
  
    return (
        <div className="myCartPrice">
            {
                
            cart.map((item) => (
                <div className="insideCart" key={item.id}>

                    <div className="myfigCart">
                        <img src={item.meal} className="myImg" onClick={()=>{setShowCart(true)}}/> 
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
                
                <button className="btnpop" onClick={() => {
              setModal(!modal);
            }}><h2>PLACE ORDER</h2></button> 
        
            </div>
            <>
            {modal && (
          <div className="modal">
            <div
              className="overlay"
              onClick={() => {
                setModal(!modal);
              }}
            ></div>
            <div className="modal-content">
                      <h2>ORDERED!</h2>
              <p>
                
                <h4>Grand Total :   R {ItemPrice.toFixed(2)}</h4> 
                <button
                  className="close-modal"
                  onClick={() => {
                      setModal(!modal);
                      window.location.replace('/cart')
                  }}
                >
                  CLOSE
                 </button>
                          
              </p>
            </div>
          </div>
       
    )}
            </>
            
        </div>
        
    );
}
 
export default CartItemsPricing;