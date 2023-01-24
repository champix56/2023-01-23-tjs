import React,{useState} from 'react'
import style from './Button.module.css'
/**
 * simple button 
 * @returns react component structure
 */
const Button = (props) => {
    //valeur etatique pour function
    const [isClicked, setIsClicked] = useState(false);
    console.log(props);
    return ( 
        <button
            className={
                //isClicked?style.Button+' '+style.clicked:style.Button
                `${style.Button}${isClicked?' '+style.clicked:''}`
                }
            onClick={(arg) => {
                setIsClicked(true);
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
