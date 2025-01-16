
import '../components/menupreview.css';
import { Link } from 'react-router-dom';

const FoodLists = ({ foodies }) => {
    
    return ( 

        <div className="items">
        {foodies.map((food) => (
            <div className="starters" key={food.id}>
                <div id='mycontainer'>
                   <Link to='/cart'><img src={food.arr[0]} alt={food.alt} id="myImg" /></Link> 
                 </div>
                <h3>{food.food}</h3>
                <div>{food.description.slice(0,40)}</div>
                <Link to='/cart'><div className='order'><h3>Order now</h3></div></Link>
            </div>
        ))}
           
  </div>
     );
}
 
export default FoodLists;