import React, { Component } from 'react';
import PropTypes from "prop-types"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';

import './style.css';

import CustomerDetail from '../CustomerDetail';
import * as customerActions from '../../actions/customerActions';
import { withTransaction } from '@elastic/apm-rum-react'

class Customer extends Component {

    componentDidMount() {
        this.props.actions.loadCustomer(this.props.customerId);
    }

    render() {
        const { className } = this.props;
        return (
            <div className={classnames('Customer', className)}>
                <div className="ui vertical stripe segment">
                    <div className="ui container">

                        <CustomerDetail customer={this.props.customer} />

                    </div>
                </div>
            </div>
        );
    }
}

Customer.propTypes = {
    customer: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        customer: state.customer
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(customerActions, dispatch)}
}

export default withTransaction('Customer', 'Component')(connect(mapStateToProps, mapDispatchToProps)(Customer));
