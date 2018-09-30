import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinkCard from '../components/link-card/LinkCard';
import NavBar from '../components/nav-bar/NavBar';
import { LinkFormPage } from './LinkForm';
import { bindActionCreators } from 'redux';
import './HomePage.scss';

import linkActions from '../actions/LinkActions';
import authActions from '../actions/AuthActions';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateLoggedInState = this.updateLoggedInState.bind(this);
        this.updateLoggedOutState = this.updateLoggedOutState.bind(this);
        this.handleFbLogin = this.handleFbLogin.bind(this);
        this.handleFbLogout = this.handleFbLogout.bind(this);
        this.likeLink = this.likeLink.bind(this);
        this.deleteLink = this.deleteLink.bind(this);
    }
    componentDidMount() {
        this.props.actions.getLinks();
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '238248640188977',
                cookie: true,
                xfbml: true,
                version: 'v3.1'
            });

            window.FB.Event.subscribe('auth.statusChange', (response) => {
                if(response.authResponse) {
                    this.updateLoggedInState(response);
                } else {
                    this.updateLoggedOutState();
                }
            });
            window.FB.getLoginStatus();

        }.bind(this);

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    updateLoggedInState(response) {
        this.props.authActions.login(response.authResponse.accessToken);
    }

    updateLoggedOutState() {
        this.props.authActions.logout();
    }

    likeLink(link, e) {
        if(e.target.checked) {
            this.props.actions.likeLink(link);
        } else {
            this.props.actions.unLikeLink(link);
        }
    }

    deleteLink(id) {
        if(id) {
            this.props.actions.deleteLink(id);
        }
    }

    handleFbLogin() {
        window.FB.login(() => console.log('login in'), {scope: 'public_profile,email'});
    }
    handleFbLogout() {
        window.FB.logout();
    }

    render() {
        const { links } = this.props;
        return (
            <div className='home-page'>
                <NavBar>
                    {!this.props.auth.loggedIn && <button className='fb-button' onClick={e => this.handleFbLogin(e)}>login</button>}
                    {this.props.auth.loggedIn && <button className='fb-button' onClick={e => this.handleFbLogout(e)}>logout</button>}
                    { this.props.auth.loggedIn && <LinkFormPage />}
                </NavBar>
                <div className='container-fluid'>

                    {links.links.length > 0 && links.links.map((linkGroup) => {
                        return (<div key={linkGroup.date}>
                            <span className='group-date__span'>{linkGroup.date}</span>
                            {linkGroup.links.length > 0 && linkGroup.links.map((link)=> {
                            return(<LinkCard key={link.id} link={link} like={this.likeLink} deleteLink={this.deleteLink} showLike={this.props.auth.loggedIn}></LinkCard>);
                        })}
                        </div>);
                        
                        
                    })
                }
                </div>
            </div>
        );
    }
}
Home.propTypes = {
    links: PropTypes.object,
    auth: PropTypes.object,
    actions: PropTypes.object,
    authActions: PropTypes.object
};

function mapStateToProps(state) {
    const { links, auth } = state;
    return {
        links,
        auth
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(linkActions, dispatch), authActions: bindActionCreators(authActions, dispatch)};
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedHomePage as HomePage };