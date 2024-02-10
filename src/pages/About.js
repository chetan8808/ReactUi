import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '../styles/HomeStyles.css';
import {Table,Button} from 'react-bootstrap';


const About = () => {
  const [chetan, setUsers] = useState([]);
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log('data---->', data)
    setUsers(data);
  };
  return (
    <Layout>
     <div className='aboutus'>
     <Button variant="primary" size="lg" onClick={getData}>Get data</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {chetan.map((user)=>
          <tr>
          <td key={user.name}>{user.name}</td>
          <td key={user.username}>{user.username}</td>
          <td key={user.email}>{user.email}</td>
        </tr>
        )}
      
      </tbody>
       </Table>
     </div>
    </Layout>

    
  )
}

export default About