import React,{useState} from 'react'
import style from './Button.module.css'
/**
 * simple button 
 * @returns react component structure
 */
const Button = (props) => {
    //valeur etatique pour function
    const [isClicked, setIsClicked] = useState({clickState:false,uneValue:"hello button"});
    console.log(props);
    return ( 
        <button
            className={
                //isClicked?style.Button+' '+style.clicked:style.Button
                `${style.Button}${isClicked.clickState?' '+style.clicked:''}`
                }
            onClick={(arg) => {
                setIsClicked({...isClicked,clickState:true});
                console.log(arg);
                props.onButtonClick();
            }}>
            {props.children}
        </button>
    );
}
/*function Button(){
    return <button className='Button'>benjamin</button>
}*/
export default Button;
