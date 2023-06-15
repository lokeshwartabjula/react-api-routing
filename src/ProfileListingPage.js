import React, { useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './profile-listing-page.css';

function ProfileListingPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://express-t4.onrender.com/api/users')
      .then((response) => response.json())
      .then((data) => {setUsers(data); setIsLoading(false); console.log('data',data); });

      console.log('users',users);
    //   console.log('searchTerm',searchTerm);
    //   console.log('response',response);
    //   console.log('data',data);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    // user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    isLoading ? <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner> :
    <div className='flex_container'>
      <h1>Profile Listing Page</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <ul> */}
      <div className="d-flex flex-wrap">

        {filteredUsers.map((user) => (
            <Card style={{ width: '18rem' }} className="flex_container">
            <Card.Img variant="top" src={user.picture} />
            <Card.Body className='flex_container'>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {user.about}
              </Card.Text>
                <Link to={`/profile/${user._id}`}>
                    <Button variant="primary">View Profile</Button>
                </Link>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        //   <li key={user._id}>
        //     <Link to={`/profile/${user._id}`}>
        //       <img src={user.picture} alt={user.firstName} />
        //       {user.name} 
        //     </Link>
        //   </li>
        ))}
      {/* </ul> */}
      </div>
    </div>

  )
    
}

export default ProfileListingPage;
