import React, { Component } from 'react';
import PropTypes from "prop-types"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';

import './style.css';

import OrderDetail from '../OrderDetail';
import * as orderActions from '../../actions/orderActions';
import { withTransaction } from '@elastic/apm-rum-react'

class Order extends Component {

    componentDidMount() {
        this.props.actions.loadOrder(this.props.orderId);
    }

    render() {
        const { className } = this.props;
        return (
            <div className={classnames('Order', className)}>
                <div className="ui vertical stripe segment">
                    <div className="ui container">

                        <OrderDetail order={this.props.order} />

                    </div>
                </div>
            </div>
        );
    }
}

Order.propTypes = {
    order: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        order: state.order
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(orderActions, dispatch)}
}

export default withTransaction('Orders', 'Component')(connect(mapStateToProps, mapDispatchToProps)(Order));
