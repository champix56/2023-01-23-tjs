import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './Navbar.module.css'
export interface INavbarProps {
    style?: {}
}
export interface INavbarState { }
export const initialState: INavbarState = {}
const Navbar: React.FC<INavbarProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
        <div className={style.Navbar}
            data-testid="Navbar"
            style={props.style}>
            templaName
        </div>
    );
};
Navbar.propTypes = {
    style: PropTypes.object,
}
Navbar.defaultProps = {}
export default Navbar;
