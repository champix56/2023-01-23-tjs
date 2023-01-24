import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './MemeSvgViewer.module.css'
export interface IMemeSvgViewerProps {
    style?: {}
}
export interface IMemeSvgViewerState { }
export const initialState: IMemeSvgViewerState = {}
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
    const [state, setstate] = useState(initialState);
    useEffect(() => {
        //cmpdidmount
    }, []);
    return (
        <div className={style.MemeSvgViewer}
            data-testid="MemeSvgViewer"
            style={props.style}>
            templaName
        </div>
    );
};
MemeSvgViewer.propTypes = {
    style: PropTypes.object,
}
MemeSvgViewer.defaultProps = {}
export default MemeSvgViewer;
