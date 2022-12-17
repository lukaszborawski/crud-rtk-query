import { useState } from 'react'
import { useUpdateUserMutation } from '../api/usersApi';


const EditUser = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [updateUser] = useUpdateUserMutation();

  const handleEdit = () => {
    const userProfile = {
      name,
      description,
    }
    updateUser(userProfile)
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
        onClick={handleEdit}
      >
        Save
      </button>
    </form>
  )
}

export default EditUser