import React from "react";
import User from "./User";
import { useUserState } from "../context/UserContext";

const UserList = () => {
  const UserData = useUserState();
  const users = UserData.users;

  const countActiveUser = ({ users }) => {
    return users.filter((user) => user.isActive).length;
  };
  const count = countActiveUser(UserData);

  return (
    <div>
      {users.map((user, i) => (
        <User key={i} num={i} />
      ))}
      <p>{count}</p>
    </div>
  );
};

export default UserList;
