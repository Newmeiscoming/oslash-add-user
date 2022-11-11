import './App.css';
import Search from './Components/Search';
import { createContext, useEffect, useState } from 'react';
import Input from './Components/Input';
export const Context = createContext();

function App() {
  const [user,setUser] = useState({});
  const [set,setSet] = useState(new Set());
  const [arr,setArr] = useState([]);
  useEffect(()=>{
    
      if(set.has(user.name)||!user.name) return;
      set.add(user.name);
      setArr([...arr,user]);
  
  },[user])
  
  return (
    <Context.Provider value={{user,setUser,arr}}>

    <div className="App">
      {/* <h2>Click on Share Button</h2>
      <button>Share &nbsp;<HiShare/></button> */}
      <Input/>
      <Search/>
    </div>
      </Context.Provider>
  );
}

export default App;
