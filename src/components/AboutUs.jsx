import { Link } from 'react-router-dom';
import resto13 from '../restos/resto13.jpg';
import * as Icon from 'react-bootstrap-icons';

import './aboutus.css';

const AboutUs = () => {
    return (
        <>
            <section>
                <div className='about-us'>
                    <h1>About Us</h1>
                    <div className='wrapper'>
                        <div className='content'>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Odit, libero dignissimos debitis, in aliquid architecto sed vero,
                                excepturi explicabo laboriosam velit sapiente ea.
                                Nemo voluptatibus nobis eveniet minima voluptates hic!
                            </p>
                            <div className='button'>
                                <Link to='/'>Read more</Link>
                                {/* <Link to='/abouts'>More on About...</Link> */}
                            </div>
                            <div className='social'>
                                <Link to='https://www.facebook.com'><Icon.Facebook  className='media_social'/></Link>
                                <Link to='https://www.twitter.com'><Icon.TwitterX className='media_social' /></Link>
                                <Link to='https://www.instagram.com'><Icon.Instagram  className='media_social'/></Link>
                            </div>
                        </div>
                        <div className='section-image'>
                            <img src={resto13} style={{ width: 400, height: 400,marginBottom:40}} />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}
 
export default AboutUs;