import pexel4 from '../restos/pexel4.jpg';
import resto9 from '../restos/resto9.jpg';
import resto13 from '../restos/resto13.jpg';
import chef2 from '../zeuspeopl/chef2.jpg';
import peopl1 from '../zeuspeopl/peopl1.jpg';
import peopl3 from '../zeuspeopl/peopl3.jpg';
import server1 from '../zeuspeopl/server1.jpg';
import server2 from '../zeuspeopl/server2.jpg';
import './about.css';
import { FaCocktail } from "react-icons/fa";


const About = () => {
    return (
        <>
        <div className='aboutGrid-container'>
                <div className="barz">
                 <img src={pexel4} className='bar1'></img>
                    <figcaption className='figcap'><em><span className='span1'>Lorem</span> ipsum dolor sit amet consectetur adipisicing elit. Provident porro facere, sapiente incidunt, impedit consequatur nisi voluptatum ,
                        amet consectetur adipisicing elit. Provident porro facere, sapiente incidunt, impedit consequatur nisi voluptatum .</em>
                    </figcaption>
                </div>
                
            <div className='chef'>
              <img src={resto13} className="chef1"></img>
               <img src={chef2} className="chef2"></img>
                    {/* <img src={chef3} className="abzeus chef3-in"></img> */}
                <figcaption className='figcap'><em>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident porro facere, sapiente incidunt, impedit consequatur nisi voluptatum .</em></figcaption> 

            </div>

            <div className='servers'>
              <img src={server1} className="server1"></img>
               <img src={server2} className="server2"></img>
              {/* <img src={server3} className="abzeus server4-in"></img> */}
               <figcaption className='figcap'><em>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident porro facere, sapiente incidunt, impedit consequatur nisi voluptatum .</em></figcaption> 
            </div>       
           
    

            <div className='peoples'>
              <img src={peopl1} className="peopl1"></img>
               <img src={resto9} className="peopl2"></img>
                <img src={peopl3} className="peopl3"></img>
               
                <figcaption className='figcap'><em>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident porro facere, sapiente incidunt, impedit consequatur nisi voluptatum .</em></figcaption>  
            </div>
             

            </div>
            <hr className='peoplehprizbar'/>
            <div className="footerdiv">
        <div className="footzeus">
        <h4> Zeus Restos</h4>
        <p><FaCocktail /></p>
        </div>
          <p className="para"> &copy; All copyrights reserved</p>
      </div>
        </>
    );
}
 
export default About;