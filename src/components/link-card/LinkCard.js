import React from 'react';
import PropTypes from 'prop-types';
import HeartButton from '../heart-button/HeartButton';
import './LinkCard.scss';

const LinkCard = ({id,title, body}) => {
    return (<div className='card' data-qa='post-card'>
                <HeartButton id={id}/>
                <div className='card__header'>{title}</div>
                <div className='card__body'>{body}</div>
            </div>);
};

LinkCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string
};

export default LinkCard;
