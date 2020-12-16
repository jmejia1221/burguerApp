import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-order';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

import './Orders.scss';
class Orders extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner />;

        if (!this.props.loading) {
            orders = (
                this.props.orders.map(order => (
                    <Order key={order.id}
                    burgerName={order.burgerName}
                    ingredients={order.ingredients}
                    price={order.price} />
                ))
            );
        }
        return (
            <div className="Orders">
                <h3 className="OrdersTitle">
                    <FontAwesomeIcon icon={faWallet} />
                    <span>Orders</span>
                </h3>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrder(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));