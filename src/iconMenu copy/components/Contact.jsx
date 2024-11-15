import { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import { FaCocktail } from "react-icons/fa";
import './contact.css';
import GoogleMap from './GoogleMap';


const Contact = () => {

    const [username, setName] = useState('');
    const [useremail, setEmail] = useState('');
    const [usersurname, setSurname] = useState('');

        
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
       <>
            <p className='headclient'>
                <em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, labore ipsum. Veniam cupiditate optio enim nesciunt, esse blanditiis quae odio minus itaque cum voluptatum fuga aspernatur. Ullam ut quia itaque.</em>
            </p>
            <form className='contact-form' onSubmit={handleSubmit}>

                <label  className='labelclient'>First Name</label>
                <input type="text"
                    placeholder='client name here...'
                    className='client_input'
                    value={username}
                    onChange={(e) => { setName(e.target.value) }}
                    required
                />
                 <label  className='labelclient'>Surname</label>
                <input type="text"
                    placeholder='client surnme here...'
                    className='client_input'
                    value={usersurname}
                    onChange={(e) => { setSurname(e.target.value) }}
                    required
                />

                 <label  className='labelclient'>Email</label>
                <input type="email"
                    placeholder='client email here...'
                    className='client_input'
                    value={useremail}
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                />
                 <label className='labelclient'>Message</label>
                <textarea
                    placeholder='Text here'
                    className='client_text'
                    required
                />
                <button type='submit' className='btnSubmit'>
                    <span className='btnSpan'>Send us a message</span>
                </button>
            </form>
            <hr className='contacthoz' />

            <div className='contact_footer'>
            <GoogleMap />
                <div className="headquarter">
                    <h3>South Africa</h3>
                    <p>251 Marais st</p>
                    <p>Claremont,Southern Suburb</p>
                    <p>Western Cape 8001</p>
                    <p><FaPhone /> : + 2721-678-0975</p>
                </div>
                <div className="headquarter">
                    <h3>Worldwide</h3>
                    <p><FaPhone /> : + 4412-678-0975</p>
                </div>
                
                <div className="headquarter">
                    <h3>Germany</h3>
                    <p><FaPhone /> : + 4982-678-0975</p>
                </div>
          
            </div>

            <hr className="myHoz"></hr>
      
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
 
    export default Contact;