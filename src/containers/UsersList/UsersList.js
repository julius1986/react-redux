import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../components/list/List";
import { deleteUserById, fetchUsers } from "../../redux/usersReducer/actions";

export default function UsersList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const deleteUser = (id) => {
    dispatch(deleteUserById(id));
  };

  return <List deleteUserById={deleteUser} items={users} />;
}
