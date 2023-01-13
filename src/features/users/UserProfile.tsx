import { useState } from 'react';
import { useDeleteUserMutation, User } from "../api/usersApi"
import EditUser from "./EditUser";

const UserProfile = ({ id, name, description }: User) => {
  const [deleteUser] = useDeleteUserMutation();

  const [openEditModal, setOpenEditModal] = useState(false);
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <button onClick={() => deleteUser(id)}>Delete</button>
      <button onClick={() => setOpenEditModal(true)}>Edit</button>
      {openEditModal && <EditUser id={id} />}
    </>
  )
}

export default UserProfile