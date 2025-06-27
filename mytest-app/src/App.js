import Greeting from "./components/Greeting";
import { add,sub } from "./components/Math";
import Counter from "./components/Counter";
import Login from "./components/Login";
import { useState } from "react";
import ItemList from "./components/ItemList";
import TextInput from "./components/Form/TextInput";
import LoginForm from "./components/Form/LoginForm";
import UsernameInput from "./components/Form/UsernameInput";
import ProductForm from "./components/Form/ProductForm";
import SubscriptionForm from "./components/Form/SubscriptionForm";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('Ranchi')
  const [showItems, setShowItems] = useState(true)
  const[name,setName] = useState('')
  const [error,setError] = useState('')

  const [validUsername, setValidUsername] = useState('');

  const handleValidUsername = (username) => {
    console.log('Valid username selected:', username);
    setValidUsername(username);
  };

  const items=[
    {id:1, name:"Item One"},
    {id:2, name:"Item Two"},
    {id:3, name:"Item Three"}
  ]

  const [products, setProducts] = useState([]);

  const handleProductSubmit = (newProduct) => {
    console.log('New product submitted:', newProduct);
    setProducts([...products, newProduct]);
  };

   const [subscriptionData, setSubscriptionData] = useState(null);

  const handleSubscription = (data) => {
    console.log('Subscription successful:', data);
    setSubscriptionData(data);
  };

  const toggleLogin = () =>{
    setIsLoggedIn(prev => !prev)
  }

  const handleChange = (e) =>{
    setName(e.target.value)
    if(error) setError('')
  }

  const handleLoginSubmit = ({ email, password }) => {
    console.log('Login submitted:', email, password);
    alert(`Logged in successfully!\nEmail: ${email}\nPassword: ${password}`);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name.trim() === ''){
      setError('Name is required')
    }
    else{
      alert(`Welcome ${name}`)
      setName('')
      setError('')
    }
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

      <div style={{padding:'2rem'}}>
        <h2>Enter your Name: </h2>
        <form onSubmit = {handleSubmit}>
          <TextInput label="Name" id="name" value={name} onChange={handleChange} error={error} />
          <button type="submit" style={{marginTop:'1rem'}}>Submit</button>
        </form>
      </div>

      <div style={{ padding: '2rem'}}>
      <h2>User Login</h2>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>

    <div style={{ padding: '2rem'}}>
      <h2>Sign Up</h2>
      <UsernameInput onUsernameValid={handleValidUsername} />

      {validUsername && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: 'blue' }}>
          You selected: {validUsername}
        </p>
      )}
    </div>
    <div style={{ padding: '2rem'}}>
      <h2>Add New Product</h2>
      <ProductForm onSubmit={handleProductSubmit} />

      {products.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Submitted Products:</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                <strong>{product.productName}</strong> — {product.category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

     <div style={{ padding: '2rem'}}>
      <h2>Newsletter Subscription</h2>
      <SubscriptionForm onSubmit={handleSubscription} />

      {subscriptionData && (
        <div style={{ marginTop: '2rem', color: 'green' }}>
          <h3>Thank you for subscribing!</h3>
          <p>
            <strong>Email:</strong> {subscriptionData.email}
          </p>
          <p>
            <strong>Agreed to Terms:</strong> {subscriptionData.agreeTerms ? 'Yes' : 'No'}
          </p>
        </div>
      )}
    </div>

    </div>
  );
}

export default App;
