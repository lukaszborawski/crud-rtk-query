import { useGetUsersQuery, useDeleteUserMutation } from "../api/usersApi";

const UsersList = () => {

  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error. Try again later.</p>}
      {users?.map(
        ({ id, name, description }) => (
          <div key={id}>
            <div>{name}</div>
            <div>{description}</div>
            <button onClick={() => deleteUser(id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default UsersList