import React from 'react'

const UsersList = (props) => {
  return (
    <div >
      <ul>
        {props.users.map((user) => { 
          return (
            
            <li key={user.id}>{user.name} ({user.age} years old) </li>
            
          );
        })}
      </ul>
    </div>
  )
}

export default UsersList