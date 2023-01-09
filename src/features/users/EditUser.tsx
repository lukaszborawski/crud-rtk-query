import { useState } from 'react'
import Modal from '../../components/Modal';
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
    <Modal>
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
    </Modal>
  )
}

export default EditUser