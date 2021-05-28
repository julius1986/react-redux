import {
  ADD_USER,
  ADD_USERS,
  DELETE_USER_BY_ID,
  SET_USERS,
  UPDATE_USER,
} from "./constants";

const initialState = [];

const UsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return [...payload];
    case ADD_USERS:
      return [...state, ...payload];
    case ADD_USER:
      return [...state, payload];
    case DELETE_USER_BY_ID:
      return state.filter((user) => user.id !== payload);
    case UPDATE_USER:
      return state.map((user) => {
        if (user.id === payload.id) {
          return payload;
        } else {
          return user;
        }
      });

    default:
      return state;
  }
};

export default UsersReducer;