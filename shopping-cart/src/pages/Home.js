import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container ">
                    <div className="home_content d-flex flex-wrap mb-4 me-4 justify-content-center align-items-baseline">
                        {
                            productsData.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;