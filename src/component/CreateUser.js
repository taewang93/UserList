import React from "react";
import {
  useUserDispatch,
  useUserNextId,
  useUserState,
} from "../context/UserContext";

const CreateUser = () => {
  const UserData = useUserState();
  const { username, email } = UserData.inputs;
  const UserDispatch = useUserDispatch();
  const UserNextId = useUserNextId();

  const onChange = (e) => {
    const { name, value } = e.target;

    UserDispatch({ type: "CHANGE_INPUT", name, value });
  };
  const onCreate = () => {
    UserDispatch({
      type: "CREATE_USER",
      newUser: { id: UserNextId.current, username, email, isActive: false },
    });
    UserNextId.current += 1;
  };

  return (
    <div>
      <input
        placeholder="username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        placeholder="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>Click</button>
    </div>
  );
};

export default CreateUser;
