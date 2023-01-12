import { useState } from 'react';
import { useDeleteUserMutation, User } from "../api/usersApi"
import EditUser from "./EditUser";

const UserProfile = ({ id, name, description }: User) => {
  const [deleteUser] = useDeleteUserMutation();

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
      <div>{description}</div>
      <button onClick={() => deleteUser(id)}>Delete</button>
      <button onClick={() => setOpenModal(true)}>Edit</button>
      {openModal && <EditUser id={id} />}
    </>
  )
}

export default UserProfile