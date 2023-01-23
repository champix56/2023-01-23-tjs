import React from 'react'
/**
 * simple button 
 * @returns react component structure
 */
const Button=(props)=>{
    console.log(props);
    return <button className='Button'>
        {props.children}
    </button>;
}
/*function Button(){
    return <button className='Button'>benjamin</button>
}*/
export default Button;