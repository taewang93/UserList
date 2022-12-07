import React, { useEffect } from "react";

const User = ({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log(user);
    return () => {
      console.log(user);
    };
  }, [user]);
  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.isActive ? "green" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Delete</button>
    </div>
  );
};

export default User;
