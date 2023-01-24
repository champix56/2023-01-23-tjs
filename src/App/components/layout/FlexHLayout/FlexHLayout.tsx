import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './FlexHLayout.module.css'
export interface IFlexHLayoutProps {
    style?: {}
}
export interface IFlexHLayoutState { }
export const initialState: IFlexHLayoutState = {}
const FlexHLayout: React.FC<IFlexHLayoutProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
        <div className={style.FlexHLayout}
            data-testid="FlexHLayout"
            style={props.style}>
            templaName
        </div>
    );
};
FlexHLayout.propTypes = {
    style: PropTypes.object,
}
FlexHLayout.defaultProps = {}
export default FlexHLayout;
