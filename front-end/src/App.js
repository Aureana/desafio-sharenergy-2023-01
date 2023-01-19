import Router from "./routes/Router"
import { GlobalStyled } from "./GlobalStyled";
import {useState} from 'react'
import { GlobalContext } from "./context/GlobalContext";

function App() {

  const [users, setUsers] = useState([]) 
  const [loading, setLoading] = useState(false) 
  const [showModal, setShowModal] = useState(false) 
  const [action, setAction] = useState('') 
  const [clients, setClients] = useState([])
  const [auth, setAuth] = useState(false) 

  const context = {
    users,
    setUsers,
    loading,
    setLoading,
    showModal, 
    setShowModal,
    action,
    setAction,
    clients,
    setClients,
    auth,setAuth,
  }

  
  return (
    <>
      <GlobalStyled/>
      <GlobalContext.Provider value={context}>
        <Router/>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
