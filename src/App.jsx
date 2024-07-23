import { useState } from 'react'
import './App.css'
import Footer from './footer/footer'
import Navbar from './navbar/navbar'
import UserList from './footer/userList/UserList'
import NewUserForm from './components/newuser/NewUserForm'

function  App() {
  const [showModal,setShowModal] = useState(false)
  const [users,setUsers] = useState([])
  const deleteItem = (id)=>{
    setUsers((prev)=>{
     return prev.filter((user) =>{
        return user.id !== id
    })
  })
}

const closeModal =(e)=>{
  if(e.target.className === 'overlay')setShowModal(false)
  if(e.key === 'Escape')setShowModal(false)
}

//adduser

const addUser = (user) =>{
  setUsers((prev)=>{
    return[...prev,user]
  })
  setShowModal(false)
}

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLength={users.length}/>
      <main>
        <div className="no-users">
            {users.length === 0 && <h2>no users</h2>}
        </div>
      <UserList users={users} deleteItem={deleteItem}/>
      </main>
      {/* <NewUserForm /> */}
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={()=>setShowModal(true)} className='create-user'>create user</button>
      <Footer />
    </div>
  )
}

export default App
