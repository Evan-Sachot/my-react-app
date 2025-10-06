import React , { useState} from 'react';
function Form(){
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value); 
  };

    return (
        <form >
            <input type="text" placeholder="Enter text" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
export default Form;