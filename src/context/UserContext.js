import React, { createContext, useContext, useReducer, useRef } from "react";

const initialUsers = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
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
  ],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        ...state,
        inputs: initialUsers.inputs,
        users: [...state.users, action.newUser],
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, isActive: !user.isActive } : user
        ),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const UserStateContext = createContext();
const UserDispatchContext = createContext();
const UserNextIdContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUsers);
  const nextId = useRef(4);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        <UserNextIdContext.Provider value={nextId}>
          {children}
        </UserNextIdContext.Provider>
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (!context) {
    throw new Error("Cannot find UserProvider");
  }
  return context;
};

export const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);
  if (!context) {
    throw new Error("Cannot find UserProvider");
  }
  return context;
};

export const useUserNextId = () => {
  const context = useContext(UserNextIdContext);
  if (!context) {
    throw new Error("Cannot find UserProvider");
  }
  return context;
};
