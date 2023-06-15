import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './profile-detail-page.css';

function ProfileDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://express-t4.onrender.com/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex_container">
    <h1>Profile Detail Page</h1>
        {/* align the following div to center */}
        <Card style={{ width: '18rem' }} className="d-flex justify-content-center">
      <Card.Img variant="top" src={user.picture} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.about}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.phone}</ListGroup.Item>
        <ListGroup.Item>{user.address}</ListGroup.Item>
      </ListGroup>
      
    </Card>
      {/* <h1>Profile Detail Page</h1>
      <img src={user.picture} alt={user.name} />
      <p>Name: {user.name} </p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p> */}
      {/* Display additional profile details */}
    </div>
  );
}

export default ProfileDetailPage;
