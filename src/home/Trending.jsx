// import React from 'react';
import './style.scss'

const Trending = () => {
    return (
        <div className="container">
            <div className="trending">
                <h2 className="trending-heading">Trending</h2>
                <button className="">View all</button>
            </div>
            <div className="TrendingProducts">
                <div className="SingleTrending">
                    <div className="TrendingImage">
                        <img src="https://i.ibb.co/p0P7q5D/Coffee-Pouch-Packaging-Mockup-01.jpg" alt="" />
                        <span>-26%</span>
                    </div>
                    <div className="TrendingDetail">
                        <h2 className="TrendingName">Sengoku Dynasty</h2>
                        <p className="price">19.99$</p>
                    </div>
                </div>

                <div className="SingleTrending">
                    <div className="TrendingImage">
                        <img src="https://i.ibb.co/0jtB354/7-View-dark-edition.jpg" alt="" />
                        <span>-26%</span>
                    </div>
                    <div className="TrendingDetail">
                        <h2 className="TrendingName">Sengoku Dynasty</h2>
                        <p className="price">19.99$</p>
                    </div>
                </div>

                <div className="SingleTrending">
                    <div className="TrendingImage">
                        <img src="https://i.ibb.co/vqKB8FW/home-work-02-crop-u18578.jpg" alt="" />
                        <span>-26%</span>
                    </div>
                    <div className="TrendingDetail">
                        <h2 className="TrendingName">Sengoku Dynasty</h2>
                        <p className="price">19.99$</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;