import Greeting from "./components/Greeting";
import { add,sub } from "./components/Math";
import Counter from "./components/Counter";
import Login from "./components/Login";
import { useState } from "react";
import ItemList from "./components/ItemList";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('Ranchi')
  const [showItems, setShowItems] = useState(true)

  const items=[
    {id:1, name:"Item One"},
    {id:2, name:"Item Two"},
    {id:3, name:"Item Three"}
  ]
  const toggleLogin = () =>{
    setIsLoggedIn(prev => !prev)
  }
  return (
    <div>
      <h1>React App TestCases</h1>
      <p>Add: 13+12 = {add(13,12)}</p>
      <p>Sub: 13-22 = {sub(13,22)}</p>
      <Greeting />
      <Greeting name='React' />
      <Counter />

      <h2>LoginMessage Demo</h2>
      <Login isLoggedIn={isLoggedIn} username={username} />

      <button onClick={toggleLogin} style={{marginTop: '1rem'}}>
        {isLoggedIn ? 'Logout': 'Login'}
      </button>

      <h2>Item List Demo</h2>
      <button onClick={()=>setShowItems(!showItems)}>
        {showItems?'Show Empty List':'Show Items'}
      </button>

      <ItemList items={showItems?items:[]} />
    </div>
  );
}

export default App;
