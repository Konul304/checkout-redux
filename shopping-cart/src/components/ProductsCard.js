import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';


const ProductsCard = (props) => {

    const { img, title, price } = props;

    const [isAdded, setIsAdded] = useState(false);


    const dispatch = useDispatch();


    const handleAddToCart = () => {

        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

    return (
        <>
            <div className="me-5 mb-5">
                <figure>
                    <img src={img} alt="item-img" />
                </figure>
                <h4 className="title">{title}</h4>
                <h3 className="price">₼ {price}</h3>
                <button
                    type="button"
                    className={`btn  btn-primary`}
                    onClick={handleAddToCart}
                >
                    {
                        isAdded ? 'Added' : 'Add to cart'}
                </button>
            </div>
        </>
    );
};

export default ProductsCard;