import React, { useState, useEffect } from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'
interface IButtonProps {
    onButtonClick?: Function
    bgColor?: string
    style?: {}
    children: string | React.ReactElement | Array<React.ReactElement | string>
    type?: "button" | "submit" | "reset"
}
/**
 * simple button 
 * @returns react component structure
 */
const Button: React.FC<IButtonProps> = (props) => {
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
            type={props.type}
            style={{ backgroundColor: props.bgColor, ...props.style }}
            className={
                //isClicked?style.Button+' '+style.clicked:style.Button
                `${style.Button}${isClicked ? ' ' + style.clicked : ''}`
            }
            onClick={(arg) => {
                setIsClicked(true);
                console.log(arg);
                if (undefined !== props.onButtonClick) {
                    props.onButtonClick();
                }
            }}>
            {props.children}
        </button>
    );
}
Button.propTypes = {
    onButtonClick: PropTypes.func,
    children: PropTypes.any.isRequired,
    style: PropTypes.object,
    bgColor: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
Button.defaultProps = {
    onButtonClick: () => { alert('pas d\'action'); },
    type: 'button',
}

export default Button;
