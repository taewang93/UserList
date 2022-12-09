import React from "react";
import { useUserDispatch, useUserState } from "../context/UserContext";

const User = ({ num }) => {
  const UserData = useUserState();
  const NowUser = UserData.users[num];
  const UserDispatch = useUserDispatch();

  const onRemove = () => {
    UserDispatch({ type: "REMOVE_USER", id: NowUser.id });
  };

  const onToggle = () => {
    UserDispatch({ type: "TOGGLE_USER", id: NowUser.id });
  };

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: NowUser.isActive ? "green" : "black",
        }}
        onClick={() => onToggle(NowUser.id)}
      >
        {NowUser.username}
      </b>
      <span>({NowUser.email})</span>
      <button onClick={() => onRemove(NowUser.id)}>Delete</button>
    </div>
  );
};

export default User;
