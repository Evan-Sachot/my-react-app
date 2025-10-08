import React , { useState, useEffect} from 'react';

function Display ({value}){
return(
    <div className='display'>
        {value}
    </div>
)
}
function Button ({onButtonClick}){
const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+','AC'
];
return(
    <div className="button-panel">
        {buttons.map((btn)=>(
            <button key ={btn} onClick={()=> onButtonClick(btn)}>{btn}</button>
        ))}
    </div>
)
}
function Calc(){
    const [input,setInput]= useState('');
    const handleButtonClick = (value) =>{
         if (value === 'AC') {
        setInput('');
        }
        else if (value === '='){
            try{
                setInput(eval(input).toString());
            }
            catch (error){
                setInput('Error')
                
            }
        }else {
                setInput(input+value);
            }
           
        }

    

    return (
       <div className="calculator">
        <Display value={input}/>
        <Button onButtonClick={handleButtonClick}/>
       </div>
    )
}
export default Calc;
