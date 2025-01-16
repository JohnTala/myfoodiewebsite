import * as Icon from 'react-bootstrap-icons';
import './contact.css';


const ReviewOutput = ({listReviews,handleDelete,setEditing,setReviews,noOfStar=5,modalReview,SetmodalReview}) => {
    
    const myHalfStars = [<Icon.StarFill />, <Icon.StarFill />, <Icon.StarFill />, <Icon.StarHalf />];
    const emptyStars = [<Icon.StarFill />, <Icon.Star />, <Icon.Star />, <Icon.Star />, <Icon.Star />];

    const handleEdit = (id) => {
        const editReview =listReviews.filter((review) => review.id === id);
        setReviews(editReview[0]);
        console.log(editReview[0]);
        localStorage.setItem('CustormReviews', JSON.stringify(editReview[0]));
        setEditing(true);
        SetmodalReview(false);
    }

    const handleResubmit = () => {
        SetmodalReview(false);
        setEditing(false);
    }
    
    return (
    <>
        { modalReview ? (
                <div className='modal'>
                    <div className='overlay' onClick={()=>SetmodalReview(!modalReview)}></div>
            {listReviews.map((review) => (
                <div className='userMsg' key={review.id}>
                    <p>{review.review}</p>
                    <br></br>
                    <p><strong><em>{review.username}</em></strong></p>
                    <br></br>
                    <p> {review.rating >= 4? [...Array(noOfStar)].map((_,idx) => <Icon.StarFill key={idx}/>) : review.rating >=3 ?
            myHalfStars.map((halfStar) => halfStar):review.rating <=2?emptyStars.map((empty)=>empty): <Icon.Star />*5}</p>
                    <button onClick={() => handleDelete(review.id)} >Delete</button>
                    <br></br>
                    <button onClick={() => handleEdit(review.id)}>Edit</button>
                    <br></br>
                
                    <button onClick={() => handleResubmit()}>Submit</button>

                </div>
            ))}
        
        </div>
            ):''} 
      </>      
    );
}
 
export default ReviewOutput;