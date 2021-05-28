import {
  ADD_USER,
  ADD_USERS,
  DELETE_USER_BY_ID,
  SET_USERS,
  UPDATE_USER,
} from "./constants";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();
      dispatch(setUsers(users));
    } catch (error) {
      console.log("can't get users. somethig goes wrong, error is: ", error);
    }
  };
};

export const setUsers = (users) => {
  return { type: SET_USERS, payload: users };
};

export const addUsers = (users) => {
  return { type: ADD_USERS, payload: users };
};

export const addUser = (user) => {
  return { type: ADD_USER, payload: user };
};

export const deleteUserById = (id) => {
  return { type: DELETE_USER_BY_ID, payload: id };
};

export const updateUser = (user) => {
  return { type: UPDATE_USER, payload: user };
};
