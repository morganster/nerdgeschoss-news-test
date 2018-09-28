import React from 'react';
import './HeartButton.scss';
import PropTypes from 'prop-types';

const HeartButton = ({id, liked ,doLike}) => {
    return (<div className='heart-button' data-qa='heart-button'>
                <input id={'toggle-heart'+ id} onChange={ e => {doLike(id, e);}} checked={liked?'checked':''} className='heart-button__toggle-heart' type='checkbox' />
                <label htmlFor={'toggle-heart'+ id}></label>
            </div>);
};


HeartButton.propTypes = {
    id: PropTypes.string,
    liked: PropTypes.bool,
    doLike: PropTypes.func
};
export default HeartButton;
