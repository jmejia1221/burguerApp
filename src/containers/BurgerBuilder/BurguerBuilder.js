import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import BurgerCard from '../../components/Burger/BurgerCard/BurgerCard';
import Modal from '../../components/UI/Modal/Modal';
import SidePanel from '../../components/UI/SidePanel/SidePanel';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-order';

import * as actions from '../../store/actions/index';

import './BurguerBuilder.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
class BurguerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        purchasing: false,
        purchaseBurger: false,
        burgerName: ''
    }

    componentDidMount() {
        // axios.get('/ingredients.json')
        //     .then(reponse => {
        //         this.setState({ingredients: reponse.data});
        //     })
        //     .catch(err => {
        //         this.setState({error: true})
        //     });
        this.props.onInitIngredients();
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    // addIngredientHandler = (type) => {
    //     const oldCount = this.props.ings[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.props.ings
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.props.ings[type];
    //     if (oldCount <= 0) return;
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.props.ings
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceDeduction;
    //     this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    //     this.updatePurchaseState(updatedIngredients);
    // }

    purchaseHandler = () => {
        if (this.props.isAuthanticated) {
            this.setState({purchasing: true});
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
        this.setState({
            purchaseBurger: false
        });
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // const queryParams = [];

        // for (let i in this.props.ings) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
        // }
        // queryParams.push('price=' + this.props.price);
        // const queryString = queryParams.join('&');

        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // })

        this.props.history.push('/checkout');
        this.props.onInitPurchased();
    }

    openPurchaseBurger = (burgerName, totalPrice) => {
        this.setState({
            purchaseBurger: true,
            burgerName
        });
        this.props.onSetBurgerInfo(burgerName, totalPrice);
    }

    closePurchaseBurger = () => {
        this.setState({purchaseBurger: false});
    }

    render () {
        const burgers = [
            {
                id: 1,
                name: 'Double Burger',
                price: 18,
                grams: '150g'
            },
            {
                id: 2,
                name: 'Big John',
                price: 20,
                grams: '3200g'
            },
            {
                id: 3,
                name: 'Spicy Chicken',
                price: 22,
                grams: '240g'
            },
            {
                id: 4,
                name: 'Chicken-Deluxe',
                price: 14,
                grams: '650g'
            },
            {
                id: 5,
                name: 'Hamburger',
                price: 13,
                grams: '350g'
            },
            {
                id: 6,
                name: 'Superstars',
                price: 16,
                grams: '450g'
            },
            {
                id: 7,
                name: 'Super John',
                price: 30,
                grams: '650g'
            },
            {
                id: 8,
                name: 'Hulk-Burger',
                price: 10,
                grams: '350g'
            },
            {
                id: 9,
                name: 'Double Meat',
                price: 20,
                grams: '450g'
            }
        ];

        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // {salad: true, meat: false, ...}
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />
        if (this.props.ings) {
            burger = (
                <div className="BurgerBuilderContent">
                    <Burger
                        burgerName={this.state.burgerName}
                        ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        disabled={disabledInfo}
                        price={this.props.price}
                        isAuth={this.props.isAuthanticated}
                        ordered={this.purchaseHandler} />
                </div>
            );

            orderSummary = <OrderSummary
                price={this.props.price}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.props.ings} />;
        }
        let BurgersCard = burgers.map(burger => (
            <BurgerCard
                key={burger.id}
                name={burger.name}
                price={burger.price}
                grams={burger.grams}
                openPurchaseBurger={this.openPurchaseBurger} />
        ));
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <div className="BurgerCardContent">
                    <h3 className="BurgerBuilderTitle">
                        <FontAwesomeIcon icon={faHamburger} />
                        <span>Burgers</span>
                    </h3>
                    {BurgersCard}
                </div>
                <SidePanel
                    show={this.state.purchaseBurger}
                    sidePanelClosed={this.closePurchaseBurger}>
                    <div className="BurgerControlsContent">
                        {burger}
                    </div>
                </SidePanel>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthanticated: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchased: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
        onSetBurgerInfo: (burgerName, totalPrice) => dispatch(actions.setBurgerInfo(burgerName, totalPrice))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurguerBuilder, axios));