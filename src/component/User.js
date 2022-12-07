import React from "react";

const User = ({ user, onRemove, onToggle }) => {
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
