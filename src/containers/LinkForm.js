import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import linkActions from '../actions/LinkActions';

class LinkForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkUrl: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const params = {
            url: this.state.linkUrl
        };
        this.props.actions.saveLink(params);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Link Url:
          <input type='text' name='linkUrl' value={this.state.linkUrl} onChange={this.handleInputChange} />
                </label>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}
LinkForm.propTypes = {
    auth: PropTypes.object,
    actions: PropTypes.object,
};

function mapStateToProps(state) {
    const { links, auth } = state;
    return {
        links,
        auth
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(linkActions, dispatch) };
}

const connectedLinkFormPage = connect(mapStateToProps, mapDispatchToProps)(LinkForm);
export { connectedLinkFormPage as LinkFormPage };