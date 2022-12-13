import { useState } from 'react'
import { useAddUserMutation } from '../api/usersApi';

const AddUser = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [addUser] = useAddUserMutation();

  const handleAdd = () => {
    const userProfile = {
      id: Date.now(),
      name,
      description,
    }
    addUser(userProfile)
  }

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="button"
        onClick={handleAdd}
      >
        Save
      </button>
    </form>
  )
}

export default AddUser