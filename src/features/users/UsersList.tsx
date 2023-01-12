import { useGetUsersQuery } from "../api/usersApi";
import AddUser from "./AddUser";
import UserProfile from "./UserProfile";



const UsersList = () => {

  const { data: users, isLoading, isError } = useGetUsersQuery();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error. Try again later.</p>}
      <AddUser />
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