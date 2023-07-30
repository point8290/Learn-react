import Button from '../Button/Button';
import { useReducer } from 'react';

import "./Cart.css"

const manageCart = (state, action) => {

    if (action.type === 'add') {
        state += 1
    } else if (action.type === 'remove') {
        state -= 1
    } else if (action.type === 'reset') {
        state = 0
    }
    return state;

}
const initialState = 0;
function Cart(props) {


    const [state, dispatch] = useReducer(manageCart, initialState)

    return (
        <div className="cartCount">
            <div> <h2>Item's in Cart : {state}</h2></div>
            <div className='cartButtons'>
                <Button hideButton={props.hideButtons} onClick={() => dispatch({ type: 'add' })} label="Add to cart" />
                <Button hideButton={props.hideButtons} onClick={() => dispatch({ type: 'remove' })} label="Remove from cart" />
                <Button hideButton={props.hideButtons} onClick={() => dispatch({ type: 'reset' })} label="Remove all items from cart" />

            </div>
        </div>
    );
}

export default Cart;
