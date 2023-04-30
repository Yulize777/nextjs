import React, {useEffect, useState} from 'react';

const Review = ({review}) => {
    // const [review,setReview] = useState([])
    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20')
    //         const data = await response.json()
    //         setReview(data)
    //     }
    //     getData()
    // },[])
    return (
        <>
            <div>
                <h1>client's reviews</h1>
                <div className="reviews">
                    {
                        review.length && review.map(item => (
                            <div className={'review'} key={item.id}>
                                {item.id}
                                {item.body.slice(0,90)}
                            </div>
                        ))
                    }
                </div>

            </div>
        </>

    );
};
export async function getServerSideProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20')
    const data = await response.json()
    return {
        props: {
            review: data.slice(0,20)
        }
    }
}
export default Review;