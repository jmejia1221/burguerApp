import axios from '../../axios-order';
import * as actionTypes from './actionTypes';

export const purchaseBurguerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGUER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurguerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGUER_FAIL,
        error: error
    };
};

export const purchaseBurguerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGUER_START
    };
};

export const purchaseBurguer = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurguerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                dispatch(purchaseBurguerSuccess(response.data.name, orderData));
            })
            .catch(err => {
                dispatch(purchaseBurguerFail(err));
            });
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (err) => {
    return {
        type: actionTypes.PURCHASE_BURGUER_FAIL,
        error: err
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    };
};

export const fetchOrder = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err));
            });
    };
};