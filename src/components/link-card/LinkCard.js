import React from 'react';
import PropTypes from 'prop-types';
import HeartButton from '../heart-button/HeartButton';
import './LinkCard.scss';
import { fixUrl } from '../../helpers/urlHelper';

const LinkCard = ({link, like, deleteLink, showLike}) => {
    return (<div className='link-card' data-qa='link-card'>
                {link.owned && <button className='btn btn-danger btn-sm float-right' onClick={ e => deleteLink(link.id, e)}><i className='fa fa-times'></i></button>}
                            { showLike && <HeartButton className='float-left' link={link} liked={link.liked} doLike={like} />}
                <div className='row'>
                    <div className='col-11'>
                        <div className='link-card-header'>

                            <a className='link-card-header__title' target='_blank' rel='noopener noreferrer' href={fixUrl(link.url)}>
                                {link.title}
                            </a>
                        </div>
                        <div className='link-card-body'>
                            <p className='link-card-body__paragraph'>
                                {link.description}
                            </p>
                            <span className='badge badge-primary'>♥ {link.like_count}</span>
                            <span>Published at: {link.created_at}</span>
                        </div>
                    </div>
                    <div className='col-1'>
                        <img className='link-card-image' src={link.image_url} alt={link.title}/>
                    </div>
                </div>
            </div>);
};

LinkCard.propTypes = {
    link: PropTypes.object,
    like: PropTypes.func,
    deleteLink: PropTypes.func,
    showLike: PropTypes.bool
};

export default LinkCard;
