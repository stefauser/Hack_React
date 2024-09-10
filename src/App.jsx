import React, {useState} from 'react';
import UserForm from './componentes/UserForm';
import UserList from './componentes/UserList';

const App = () => {
  const [users, setUsers] =useState ([]);
  const [currentUser, setCurrentUser] =useState (null);

  const addUser = (user)=> {
    setUsers ([... users, user]);
  }
  
  const updateUser= (updateUser)=> {
    setUsers(users.map((user)=> (user.correo === updateUser.correo? updateUser: user)));
    setCurrentUser (null);
  };

  const deleteUser =(correo)=> {
    setUsers (users.filter((user)=> user.correo !== correo));
  };
  
  const editUser=(user)=>{
    setCurrentUser (user);
  };
 
  return(
   <div>
     <h1>Gestion de Usuarios</h1>
     <UserForm addUser={addUser}updateUser={updateUser} currentUser={currentUser}/>
     <UserList users={users}deleteUser={deleteUser} editUser={editUser}/>
   </div>
  );
};

export default App;
