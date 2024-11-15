import * as Icon from 'react-bootstrap-icons';
const ReviewOutput = ({ listReviews,handleDelete,setEditing,setReviews,noOfStar=5}) => {
    
    // const myStars = [<Icon.StarFill />, <Icon.StarFill />, <Icon.StarFill />, <Icon.StarFill />,<Icon.StarFill />]
    const myHalfStars = [<Icon.StarFill />, <Icon.StarFill />, <Icon.StarFill />, <Icon.StarHalf />];
    const emptyStars = [<Icon.StarFill />, <Icon.Star />, <Icon.Star />, <Icon.Star />, <Icon.Star />];

    // // const reviewRating = [1, 2, 3, 4, 5];
    // const ratingFunct = (rating) => {
    //     {rating >=4 ? myStars.map((star) => star) : rating <4 ?
    //         myHalfStars.map((halfStar) => halfStar):emptyStars.map((empty)=>empty)}
    // }
    const handleEdit = (id) => {
        const editReview = listReviews.filter((review) => review.id === id);
        setReviews(editReview[0]);
        setEditing(true)
        
    }

    return (
        <div style={{border:'2px solid white'}}>
            {listReviews.map((review) => (
                <div style={{color:'white'}} key={review.id}>
                    <h4>{review.username}</h4>
                    <p>{review.review}</p>
                    <p> {review.rating >= 4? [...Array(noOfStar)].map((_,idx) => <Icon.StarFill key={idx}/>) : review.rating >=3 ?
            myHalfStars.map((halfStar) => halfStar):review.rating <=2?emptyStars.map((empty)=>empty): <Icon.Star />*5}</p>
                    <button onClick={() => handleDelete(review.id)} style={{ backgroundColor: 'white', color: 'black' }}>Delete</button>
                    <button onClick={() => handleEdit(review.id)} style={{ backgroundColor: 'white', color: 'black' }}>Edit</button>
                   
                </div>
            ))}
        
        </div>
    );
}
 
export default ReviewOutput;