import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinkCard from '../components/link-card/LinkCard';

import linkActions from '../actions/LinkActions';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.updateLoggedInState = this.updateLoggedInState.bind(this);
        this.updateLoggedOutState = this.updateLoggedOutState.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(linkActions.getLinks());
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
        console.log(response);
    }

    updateLoggedOutState() {
        console.log('logged out');
    }

    render() {
        const { links } = this.props;
        return (
            <div>
                <div className='fb-login-button' data-max-rows='1' data-size='large' data-button-type='continue_with' data-show-faces='false' data-auto-logout-link='false' data-use-continue-as='false'></div>
                {links.linkList.data.length > 0 && links.linkList.data.map((link) => {
                    return (<LinkCard key={link.id} id={link.id} title={link.title} body={link.body}></LinkCard>);
                })}
            </div>
        );
    }
}
Home.propTypes = {
    links: PropTypes.object,
    dispatch: PropTypes.func
};

function mapStateToProps(state) {
    const { links } = state;
    return {
        links,
    };
}


const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as HomePage };