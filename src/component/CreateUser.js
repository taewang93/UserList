import React from "react";

const CreateUser = ({ username, email, onChange, onCreate }) => {
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
