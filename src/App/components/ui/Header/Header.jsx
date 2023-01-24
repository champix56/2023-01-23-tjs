import React from 'react'
import style from './Header.module.css'

const Header = (props) => {
    return (
        <div className={style.Header} data-testid="Header">
            <span className={style.meme}>Meme</span>.<span className={style.js}>js</span>
        </div>
    );
};
export default Header;