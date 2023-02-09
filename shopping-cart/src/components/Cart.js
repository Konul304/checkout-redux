import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../store/slices/cartSlice';


const Cart = () => {

    const { isCartOpen, cartItems } = useSelector((state) => state.cart);


    const dispatch = useDispatch();


    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };


    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };


    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };


    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    return (
        <>
            {
                isCartOpen && (
                    <div id="cart" className=''>
                        <div className="cart_content mt-5 ">
                            <div className="cart_head ps-5 d-flex justify-content-md-between pe-5 pt-3 pb-3 text-bg-warning">
                                <h2 className='ms-5'>Cart <small>({cartQuantity})</small></h2>
                                <button
                                    
                                    className="close_btn btn btn-light"
                                    onClick={() => handleCloseCart(false)}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>

                            <div className="cart_body d-flex flex-wrap justify-content-center align-items-md-end pt-5">
                                {
                                    cartQuantity === 0 ? (
                                        <h2>Cart is empty</h2>
                                    ) : (
                                        cartItems.map(item => {
                                            const { id, img, title, price, quantity } = item;
                                            const itemTotal = price * quantity;

                                            return (
                                                <div className="cart_items me-5" key={id}>
                                                    <div className='d-flex align-items-start'>
                                                        <figure className="cart_items_img">
                                                            <img src={img} alt="product-img" />
                                                        </figure>
                                                        <button
                                                            
                                                            className="cart_items_delete btn btn-warning mt-2"
                                                            onClick={() => handleRemove(id)}
                                                        >
                                                            &times;
                                                        </button>
                                                    </div>
                                                    <div className="cart_items_info">
                                                        <h4>{title}</h4>
                                                        <h3 className="price">₼ {itemTotal}</h3>
                                                    </div>

                                                    <div className="cart_items_quantity">
                                                        <span className='btn btn-warning' onClick={() => handleDecrement(id)}>&#8722;</span>&nbsp;
                                                        <b>{quantity}</b>&nbsp;
                                                        <span className='btn btn-warning' onClick={() => handleIncrement(id)}>&#43;</span>
                                                    </div>

                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>

                            <div className="cart_foot ps-5 mt-5 d-flex justify-content-end pt-2 pe-5 pb-3 bg-secondary text-light">
                                <h3>
                                    <small>Total: &nbsp;</small>
                                    <b>₼{cartTotal}</b>
                                </h3>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Cart;