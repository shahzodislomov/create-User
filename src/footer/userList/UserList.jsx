import React from "react";
import "./UserList.css";
function UserList({ users,deleteItem }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img
                  src={user.image}
                  alt={user.name}
                  height={150}
                  width={150}
                />
                <h3>
                  {user.firstName} {user.lastName}, {user.age}
                </h3>
                <p>from:{user.from}</p>
                <p>job:{user.job}</p>
                <p>gender:{user.gender}</p>
                <button onClick={()=>deleteItem(user.id)} id={user.id}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
