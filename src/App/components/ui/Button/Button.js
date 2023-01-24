import React, { useState, useEffect } from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'

/**
 * simple button 
 * @returns react component structure
 */
const Button = (props) => {
    //valeur etatique pour function
    const [isClicked, setIsClicked] = useState(false);
    //hook d'effet de cycle de vie d'une valeur / ou de composant
    useEffect(() => {
        if (isClicked) {
            setTimeout(() => setIsClicked(false), 750);
        }
    }, [isClicked]);

    console.log(props);
    return (
        <button
            style={{backgroundColor:props.bgColor,...props.style}}
            className={
                //isClicked?style.Button+' '+style.clicked:style.Button
                `${style.Button}${isClicked ? ' ' + style.clicked : ''}`
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
Button.propTypes={
    onButtonClick: PropTypes.func.isRequired,
    children:PropTypes.any.isRequired,
    style:PropTypes.object,
    bgColor:PropTypes.string,
};
Button.defaultProps={
    onButtonClick:()=>{alert('pas d\'action');}
}
/*function Button(){
    return <button className='Button'>benjamin</button>
}*/
export default Button;
