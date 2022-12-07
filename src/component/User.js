import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <span>{user.username}</span>
      <b>({user.email})</b>
    </div>
  );
};

export default User;
