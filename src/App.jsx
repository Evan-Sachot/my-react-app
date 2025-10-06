import React, { useState} from 'react';
import Form from './form.jsx';
import List from './List.jsx';
import Toggle from './toggle.jsx';
import Fetch from './fetch.jsx';

function App() {
const [count, setCount] = useState(0);
  return (
    <>
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Remove</button>
    </div>
    <br />
    <hr />  
    <Form />
    <br />
    <hr />  
    <List />
     <br />
    <hr />  
    <Toggle />
    <br />
    <hr />  
    <Fetch />
    </>

);
}


export default App;