import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();

  const initialInfo = {displayName: user.displayName, email: user.email, review:''}
  const [reviews, setReviews] = useState(initialInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...reviews};
    newInfo.email = user.email;
    newInfo.displayName = user.displayName;
    newInfo[field] = value;
    // console.log("from reviews",newInfo);
    setReviews(newInfo);
  }

  const handleReviewSubmit = e => {
    // Collect Data
    const review = {
      ...reviews    
    }

    // send data to server
    // console.log(review);
    fetch('https://pure-stream-69695.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      if(data){
        window.location.reload(true)
          alert('Review Submit Successfully');
      }
    })

    e.preventDefault();
  }

  return (
    <Container className="mt-5 form border px-4 py-5 rounded d-flex justify-content-center align-items-center">
      <Form onSubmit={handleReviewSubmit} className="w-75">
        <h1 className="text-center text-primary">User Reviews</h1>
        <Form.Group className="my-3 " controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder={user.displayName} disabled/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder={user.email} disabled/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comment</Form.Label>
          <Form.Control onChange={handleOnBlur} name="review" as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Review;
