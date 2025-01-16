import { useState } from 'react';
import { FaPhone } from "react-icons/fa";
import './contact.css';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
    const navigate = useNavigate();
    const [userDetails, setDetails] = useState(JSON.parse(localStorage.getItem('UserDetails')) || []);
    const [modal, setModal] = useState(false);
    

    const [newDetails, setNewDetails] = useState({ id: 1, username: '', usersurname: '', useremail: '', usermessage: '' })
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = userDetails.length ? userDetails[userDetails.length - 1].id + 1 : 1;
        const myObj={...newDetails,id}
        const listDetails = [...userDetails, myObj];
        setDetails(listDetails);
        localStorage.setItem('UserDetails', JSON.stringify(listDetails));
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDetails({ ...newDetails, [name]: value });
    }


    return (
       <>
            <p className='headclient'>
                <em>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, labore ipsum. Veniam cupiditate optio enim nesciunt, esse blanditiis quae odio minus itaque cum voluptatum fuga aspernatur. Ullam ut quia itaque.</em>
            </p>
            <form className='contact-form' onSubmit={handleSubmit} >

                <label  className='labelclient'>First Name</label>
                <input type="text"
                    placeholder='client name here...'
                    className='client_input'
                    name='username'
                    //  value={newDetails.username}
                // onChange={(e) => { setNewDetails({...newDetails,username:e.target.value}) }}
                onChange={handleChange}

                    required
                />
                 <label  className='labelclient'>Surname</label>
                <input type="text"
                    placeholder='client surnme here...'
                    className='client_input'
                    name='usersurname'
                    //  value={newDetails.usersurname}
                // onChange={(e) => { setNewDetails({...newDetails,usersurname:e.target.value})}}
                onChange={handleChange}

                    required
                />

                 <label  className='labelclient'>Email</label>
                <input type="email"
                    placeholder='client email here...'
                    className='client_input'
                    name='useremail'
                    //  value={newDetails.useremail}
                // onChange={(e) => { setNewDetails({...newDetails,useremail:e.target.value}) }}
                onChange={handleChange}

                    required
                />
                 <label className='labelclient'>Message</label>
                <textarea
                    placeholder='Text here'
                    className='client_text'
                    name='usermessage'
                    //  value={newDetails.usermessage}
                    // onChange={(e) => { setNewDetails({...newDetails,usermessage:e.target.value}) }}
                    onChange={handleChange}
                    required
                />
                <button type='submit'
                    className='btnSubmit'
                    onClick={
                        () => {
                            setModal(!modal);
                            setTimeout(()=>{window.location.replace('/contact')},5000);

                        }
                     }
                >
                    <span className='btnSpan'>Send message</span>
                </button>
            </form>
            {modal && (
                 <div className='modal'>
                 <div className='overlay' onClick={()=>setModal(!modal)} ></div>
                 <div className='userMsg'>
                        <div>{newDetails.usermessage}</div>
                        <br></br>
                        <p><strong>{newDetails.username} {newDetails.usersurname}</strong></p>
                        <p><em>{newDetails.useremail}</em></p>
                        <br></br>
                        
                     <button
                  className="close-modal"
                  onClick={() => {
                    //   
                    setModal(!modal)
                      
                  }}
                >
                  CLOSE
                 </button>
                 </div>
             
             </div> 
          ) } 
           <hr className='contacthoz' />

            <div className='contact_footer'>
           
                <div className="headquarter">
                    <h3>CAPE TOWN</h3>
                    <p>251 Marais street</p>
                    <p>Claremont, Southern Suburb</p>
                    <p>Western Cape - 8001</p>
                    <p><FaPhone /> : + 2721-678-0975</p>
                </div>
                <div className="headquarter">
                    <h3>JOHANNESBURG</h3>
                    <p>5th street,Mandela Square</p>
                    <p>Sandown, Sandton</p>
                    <p>Gauteng - 2000</p>
                    <p><FaPhone /> : + 2711-217-6000</p>
                </div>
                
                <div className="headquarter">
                    <h3>DURBAN</h3>
                    <p>15 Timeball boulevard</p>
                    <p>Durban Point Waterfront</p>
                    <p>Kwazulu Natal - 4001</p>
                    <p><FaPhone /> : + 2731-337-3412</p>
                </div>
          
            </div>
         
        
      </>
        );
}
 
    export default Contact;