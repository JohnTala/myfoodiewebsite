import * as Icon from 'react-bootstrap-icons';
import '../components/menupreview.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
const FoodLists = ({ foodies }) => {
    
    const myStars = [<Icon.StarFill />, <Icon.StarFill />, <Icon.StarFill />, <Icon.StarFill />]
    const myHalfStars = [<Icon.StarFill />, <Icon.StarFill />, <Icon.StarFill />, <Icon.StarHalf />];

    // const [cart, setCart] = useState([]);
   
    const handleAddItem = (item) => {
        console.log(item)
    }

    return ( 

        <div className="items">
        {foodies.map((food) => (
            <div className="starters" key={food.id}>
                
                <div id='mycontainer'>
                   <Link to='/cart'><img src={food.arr[0]} alt={food.alt} id="myImg" onClick={()=>{handleAddItem(food)} } /></Link> 
                    
                 </div>
                {/* <p id="links"><a href="#" id="previous">Previous</a>----<a href="#" id="next">Next</a></p> */}
                <h3>{food.food}</h3>
                <div>{food.description.slice(0,40)}</div>
                <p>{food.price > 40 ? myStars.map((star) => star) :
                    myHalfStars.map((halfStar) => halfStar)}</p>
                <Link to='/cart'><div className='order'>Order now <Icon.ChevronRight id="myicon" /></div></Link>
            </div>
        ))}
           
  </div>
     );
}
 
export default FoodLists;