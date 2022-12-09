import CreateUser from "./component/CreateUser";
import UserList from "./component/UserList";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <CreateUser />
        <UserList />
      </UserProvider>
    </>
  );
}

export default App;
