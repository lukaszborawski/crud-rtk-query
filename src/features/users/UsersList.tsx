import { useState } from 'react'
import { useGetUsersQuery } from "../api/usersApi";
import AddUser from "./AddUser";
import UserProfile from "./UserProfile";



const UsersList = () => {

  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error. Try again later.</p>}
      <button onClick={() => setOpenAddModal(true)}>Add User</button>
      {openAddModal && <AddUser />}
      {users?.map(
        ({ id, name, description }) => (
          <UserProfile
            key={id}
            id={id}
            name={name}
            description={description}
          />
        ))}
    </div>
  )
}

export default UsersList