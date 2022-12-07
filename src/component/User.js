import React from "react";

const User = ({ user, onRemove }) => {
  return (
    <div>
      <span>{user.username}</span>
      <b>({user.email})</b>
      <button onClick={() => onRemove(user.id)}>Delete</button>
    </div>
  );
};

export default User;
