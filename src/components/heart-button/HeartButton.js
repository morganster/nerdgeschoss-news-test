import React from 'react';
import './HeartButton.scss';
import PropTypes from 'prop-types';

const HeartButton = ({id}) => {
    return (<div className='heart-button' data-qa='heart-button'>
                <input id={'toggle-heart'+ id} className='heart-button__toggle-heart' type='checkbox' />
                <label htmlFor={'toggle-heart'+ id}></label>
            </div>);
};

HeartButton.propTypes = {
    id: PropTypes.string,
};
export default HeartButton;
