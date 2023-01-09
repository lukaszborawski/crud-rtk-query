import { useGetUsersQuery, useDeleteUserMutation } from "../api/usersApi";
import AddUser from "./AddUser";
import { useState } from 'react';
import EditUser from "./EditUser";

const UsersList = () => {

  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error. Try again later.</p>}
      <AddUser />
      {users?.map(
        ({ id, name, description }) => (
          <div key={id}>
            <div>{name}</div>
            <div>{description}</div>
            <button onClick={() => deleteUser(id)}>Delete</button>
            <button onClick={() => setOpenModal(true)}>Edit</button>
          </div>
        ))}
      {openModal && <EditUser />}
    </div>
  )
}

export default UsersList