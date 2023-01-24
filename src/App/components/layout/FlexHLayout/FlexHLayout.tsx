import React from 'react'
import PropTypes from 'prop-types'
import style from './FlexHLayout.module.css'
export interface IFlexHLayoutProps {
    style?: {},
    children: Array<React.ReactElement>
}

const FlexHLayout: React.FC<IFlexHLayoutProps> = (props) => {

    return (
        <div className={style.FlexHLayout}
            data-testid="FlexHLayout"
            style={props.style}>
            {props.children}
        </div>
    );
};
FlexHLayout.propTypes = {
    style: PropTypes.object,
    children: PropTypes.array.isRequired,
}

export default FlexHLayout;
