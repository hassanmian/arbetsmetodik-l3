import { useState, useEffect } from 'react';

function User(props) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUserData(json))
  }, [])
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {userData.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;