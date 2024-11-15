import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
// import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

import ReviewOutput from "./ReviewOutput";

const Reviews = () => {
    const navigate = useNavigate();
    const [inputReviews, setReviews] = useState({ username: '', review: '',rating:0, id:uuidv4()});
    const [listReviews, setListReviews] = useState([]);
    const [editing, setEditing] = useState(false);
    const [modalReview, SetmodalReview] = useState(false);
    // console.log(inputReviews)
    
    //delete review
    const handleDelete = (id) => {
        const deleteReview = listReviews.filter((review) => review.id !== id);
        setListReviews(deleteReview);
        console.log(deleteReview);
       localStorage.setItem('CustormReviews',JSON.stringify(deleteReview))
        setTimeout(()=>{window.location.replace('/reviews')},1000);
    }    
    //Update the review
    const handleUpdate = (e) => {
        e.preventDefault();
        const updateReviews = listReviews.map((update) => update.id === inputReviews.id ? inputReviews : update);
        setListReviews(updateReviews);
        console.log(updateReviews)
        localStorage.setItem('CustormReviews', JSON.stringify(updateReviews));
        setEditing(false)
        setReviews({ username: '', review: '', rating: '', id: uuidv4() })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviews({ ...inputReviews, [name]: value })
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
         setListReviews([...listReviews, inputReviews]);
        setReviews({ username: '', review: '', rating: '', id: uuidv4() });
    }

    return (
        <>
            
<form className='contact-form' onSubmit={editing ? handleUpdate : handleSubmit}>
    
    <label htmlFor="username" className='labelclient'>Name</label>
    <input type="text"
        placeholder='username here...'
        className='client_input'
         name="username"
         value={inputReviews.username}
            onChange={handleChange}
            required
        />
    
     <label htmlFor="review" className='labelclient'>Review</label>
    <textarea
        placeholder='Review here'
            className='client_text'
            name="review"
            value={inputReviews.review}
            onChange={handleChange}
        required
        />
    
    <label htmlFor="rating" className='labelclient'>Rating:</label>
                            <input
                               className='client_input'
                                name="rating"
                                value={inputReviews.rating}
                                 type="number"
                                onChange={handleChange}/>
        
    
                <button type='submit' className='btnSubmit' onClick={()=>{SetmodalReview(!modalReview)}}>
                    <span className='btnSpan'>{editing ? "Edit" : "Submit"}</span>
                </button>
       
            </form>
            <p>{inputReviews.review}</p>
    <ReviewOutput listReviews={listReviews}
                    handleDelete={handleDelete}
                    setEditing={setEditing}
                setReviews={setReviews}
                modalReview={modalReview}
                SetmodalReview={SetmodalReview}
                
                />
    
    
    
        </>
    );
}
 
export default Reviews;


//with bootstrap
{/* <>
<div className="d-flex h-100 w-100 justify-content-center align-items-center mt-5">
    <div className="w-50 border bg-light p-5">
        <form onSubmit={editing?handleUpdate:handleSubmit}>
            <div>
               <label htmlFor="username">Name :</label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={inputReviews.username}
                    onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="review">Review :</label>
                <textarea
                    className="form-control"
                    name="review"
                    value={inputReviews.review}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="rating">Rating:</label>
                <input
                    className="form-control"
                    name="rating"
                    value={inputReviews.rating}
                     type="number"
                    onChange={handleChange}/>
                
            </div>
            
                <button className="btn btn-primary mt-3">{editing?"Edit": "Submit"}</button>
        </form>
    </div>
    </div>
    
    <ReviewOutput listReviews={listReviews}
        handleDelete={handleDelete}
        setEditing={setEditing}
        setReviews={setReviews}
    />
    </> */}