import React from 'react';
import './HeartButton.scss';
import PropTypes from 'prop-types';

const HeartButton = ({link, liked ,doLike}) => {
    return (<span className='heart-button' data-qa='heart-button'>
                <input id={'toggle-heart'+ link.id} onChange={ e => {doLike(link, e);}} checked={liked?'checked':''} className='heart-button__toggle-heart' type='checkbox' />
                <label htmlFor={'toggle-heart'+ link.id}></label>
            </span>);
};


HeartButton.propTypes = {
    link: PropTypes.object,
    liked: PropTypes.bool,
    doLike: PropTypes.func
};
export default HeartButton;
