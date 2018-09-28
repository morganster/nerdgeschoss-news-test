import React from 'react';
import PropTypes from 'prop-types';
import HeartButton from '../heart-button/HeartButton';
import './LinkCard.scss';

const LinkCard = ({link, like}) => {
    return (<div className='card' data-qa='post-card'>
                <div className='row'>
                    <div className='col-11'>
                        <div className='card-header'>
                            <span>
                                <HeartButton id={link.id} liked={link.liked} doLike={like} />
                                <span className='badge badge-secondary'>{link.like_count}</span>
                            </span>
                            <a className='card-header__title' href={link.url}>
                                {link.title}
                            </a>
                        </div>
                        <div className='card-body'>
                            <p className='card-body__paragraph'>
                                {link.description}
                            </p>
                        </div>
                    </div>
                    <div className='col-1'>
                        <img className='card-image' src={link.image_url} alt={link.title}/>
                    </div>
                </div>
            </div>);
};

LinkCard.propTypes = {
    link: PropTypes.object,
    like: PropTypes.func
};

export default LinkCard;
