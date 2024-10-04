import React, { useState } from 'react'
import './index.css'
import Index from './router'
import { UserContext } from './context/userContext';


const emptyUser = {
  id: 0,
  email: "",
  nome: ""
}


function App() {

  // ===========

  const [user, setUser] = useState(emptyUser); // useMemo
  
  function setUserData(data) {
    setUser(data);
  }

  // ===========


  return (
    <UserContext.Provider value={{ user, setUserData }}>
      <Index />
    </UserContext.Provider>
  )
}

export default App
