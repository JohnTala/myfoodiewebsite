import '../components/footer.css';
import { FaCocktail } from "react-icons/fa";

const FootCopy = () => {
    return (<>
     <hr className="myHoz"></hr>
      
      <div className="footerdiv">
        <div className="footzeus">
        <h4> Zeus Restos</h4>
        <p><FaCocktail /></p>
        </div>
          <p className="para"> &copy; All copyrights reserved</p>
      </div>
    </>);
}
 
export default FootCopy;