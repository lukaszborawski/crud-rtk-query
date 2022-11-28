import { useGetUsersQuery, useDeleteUserMutation } from "../api/usersApi";

const UsersList = () => {

  const { data: users } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  return (
    <div>
      {users?.map(
        ({ id, username }) => (
          <div key={id}>
            <div>{username}</div>
            <button onClick={() => deleteUser({ id: 1 })}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default UsersList