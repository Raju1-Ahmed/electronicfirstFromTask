// import React from 'react';
import { useEffect } from 'react';
import './style.scss'

const Home = () => {    
    useEffect(() => {
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                const selectedTabContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`);
                
                tabs.forEach(t => {
                    t.classList.remove('active');
                });
                tab.classList.add('active');

                tabContents.forEach(content => {
                    if (content === selectedTabContent) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
      
     
        // Here's a vanilla Javascript implementation for the search button
        const searchButton = document.getElementById('searchButton');
        const searchBar = document.getElementById('searchBar');
        const closeBtn = document.getElementById('close');

        searchButton.addEventListener('click', function () {
            tabWrap.style.display = 'none';
            searchBar.style.display = 'block';

        });

        closeBtn.addEventListener('click', function () {
            searchBar.style.display = 'none';
            tabWrap.style.display = 'flex';
        });



    }, []);
    return (
        <div className='menu-wrap'>
            <nav className="navbar">
                <div className="navbar-left">
                    <img src="https://static.electronicfirst.com/website/uploads/2023/04/18/header_logo_dark_1681808133_643e5b05223c4.webp" alt="Icon" className='logo' />
                </div>
                <div className="navbar-middle">
                    <button>Trending</button>
                    <button>Pre-orders</button>
                    <button>Upcoming</button>
                    <button>Support24/7</button>
                </div>
                <div className="navbar-right">
                    <a href="">
                        <img width="50" height="20" src="https://img.icons8.com/dotty/80/FFFFFF/shopping-cart.png" alt="shopping-cart" />
                    </a>
                    <a href="">
                        <img width="20" height="20" src="https://img.icons8.com/windows/32/22C3E6/person-male.png" alt="person-male" />

                    </a>

                </div>
            </nav>
            <div className="Tab-wrap" id='tabWrap'>
                <ul>
                    <li className="tab " data-tab="tab1">
                        <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/FFFFFF/monitor.png" alt="monitor" />
                        pc <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>

                    <li className="tab " data-tab="tab2">
                        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/play-station.png" alt="play-station" />
                        Playstation <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>

                    <li className="tab " data-tab="tab3">
                        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/xbox.png" alt="xbox" />
                        Xbox <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>

                    <li className="tab " data-tab="tab4">
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/nintendo-switch-logo.png" alt="nintendo-switch-logo" />
                        Nintendo <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>
                </ul>
                <span id='searchButton'>
                    <li className="search">
                        <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt="search--v1" />
                    </li>
                </span>
            </div>

            <div className="search-bar" id='searchBar'>

                <input type="text" placeholder="Minecraft, RPG, Multiplayer..." />
                <button className='advanceButton'>Advance Search</button>

                <span className="close" id="close">
                    <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/delete-sign.png" alt="delete-sign" />
                </span>
            </div>

            <div>
                <div className="platforms tab-content" data-tab="tab1">
                    <div className='view'>
                        <h2>Platforms</h2>
                        <a href="">View All</a>
                    </div>
                    <div className='products'>
                        <div className='product'>
                            <span className='imageShape'>
                                <img width="30" height="30" src="https://img.icons8.com/color/48/youtube-live.png" alt="youtube-live" />
                            </span>
                            <h3>Steam</h3>
                        </div>

                        <div className='product'>
                            <img width="30" height="30" src="https://img.icons8.com/color/48/youtube-live.png" alt="youtube-live" />
                            <h3>Steam</h3>
                        </div>

                        <div className='product'>
                            <img width="30" height="30" src="https://img.icons8.com/color/48/youtube-live.png" alt="youtube-live" />
                            <h3>Steam</h3>
                        </div>

                        <div className='product'>
                            <img width="30" height="30" src="https://img.icons8.com/color/48/youtube-live.png" alt="youtube-live" />
                            <h3>Steam</h3>
                        </div>

                        <div className='product'>
                            <img width="30" height="30" src="https://img.icons8.com/color/48/youtube-live.png" alt="youtube-live" />
                            <h3>Steam</h3>
                        </div>
                    </div>
                </div>
                <div className="platforms tab-content " data-tab="tab2">This is two tab</div>
                <div className="platforms tab-content " data-tab="tab3">This is three tab</div>
                <div className="platforms tab-content " data-tab="tab4">This is four tab</div>
            </div>

            
        </div>
    );
};

export default Home;