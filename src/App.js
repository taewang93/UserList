import { useMemo, useRef, useState } from "react";
import CreateUser from "./component/CreateUser";
import UserList from "./component/UserList";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      isActive: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      isActive: true,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      isActive: false,
    },
  ]);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const nextId = useRef(4);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, newUser]);
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const countActiveUser = (users) => {
    return users.filter((user) => user.isActive).length;
  };
  // const activeUser = countActiveUser(users);
  const activeUser = useMemo(() => countActiveUser(users));

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <p>{activeUser}</p>
    </>
  );
}

export default App;
