// import React from 'react';
import { useEffect } from 'react';
import './style.scss'

const Home = () => {
    useEffect(() => {


        // dropdown menu for small device
        document.addEventListener("DOMContentLoaded", function () {
            const dropdownBtn = document.querySelector(".dropbtn");
            const dropdownContent = document.querySelector(".dropdown-content");

            dropdownBtn.addEventListener("click", function () {
                dropdownContent.classList.toggle("show");
            });

            // Close the dropdown when clicking outside of it
            window.addEventListener("click", function (event) {
                if (!event.target.matches(".dropbtn")) {
                    if (dropdownContent.classList.contains("show")) {
                        dropdownContent.classList.remove("show");
                    }
                }
            });
        });


        // Here's a vanilla Javascript implementation for the Tab
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
            searchBar.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function () {
            searchBar.style.display = 'none';
            tabWrap.style.display = 'flex';
        });
    }, []);
    return (
        <div className='menu-wrap'>
            {/* Navigation */}
            <nav className="navbar">
                {/* Left Logo */}
                <div className="navbar-left">
                    <img src="https://static.electronicfirst.com/website/uploads/2023/04/18/header_logo_dark_1681808133_643e5b05223c4.webp" alt="Icon" className='logo' />
                </div>
                {/* Middle Navigation Buttons */}
                <div className="navbar-middle">
                    <button>Trending</button>
                    <button>Pre-orders</button>
                    <button>Upcoming</button>
                    <button>Support24/7</button>
                </div>
                {/* Dropdown Menu */}
                <div className="dropdown">
                    <button className="dropbtn">
                        <img width="30" height="30" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1" />

                    </button>
                    <div className="dropdown-content">
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                </div>
                {/* Right Navigation Icons */}
                <div className="navbar-right">
                    <a href="">
                        <img width="50" height="20" src="https://img.icons8.com/dotty/80/FFFFFF/shopping-cart.png" alt="shopping-cart" />
                    </a>
                    <a href="">
                        <img width="20" height="20" src="https://img.icons8.com/windows/32/22C3E6/person-male.png" alt="person-male" />

                    </a>

                </div>
            </nav>
            {/* Tab Navigation */}
            <div className="Tab-wrap" id='tabWrap'>
                <ul>
                    {/* Tab 1 */}
                    <li className="tab " data-tab="tab1">
                        <img width="25" height="25" src="https://img.icons8.com/material-outlined/24/FFFFFF/monitor.png" alt="monitor" />
                        pc <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>
                    {/* Tab 2 */}
                    <li className="tab " data-tab="tab2">
                        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/play-station.png" alt="play-station" />
                        Playstation <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>
                    {/* Tab 3 */}
                    <li className="tab " data-tab="tab3">
                        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/xbox.png" alt="xbox" />
                        Xbox <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>

                    {/* Tab 4 */}
                    <li className="tab " data-tab="tab4">
                        <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/nintendo-switch-logo.png" alt="nintendo-switch-logo" />
                        Nintendo <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/expand-arrow--v1.png" alt="expand-arrow--v1" />
                    </li>
                </ul>
                {/* search-bar button*/}
                <span id='searchButton'>
                    <li className="search">
                        <img width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt="search--v1" />
                    </li>
                </span>
            </div>
            {/* search-bar*/}
            <div className="search-bar" id='searchBar'>
                <div className='searchInput'>
                    <input type="text" placeholder="Minecraft, RPG, Multiplayer..." />
                    <span className='searchButton'> <a href="">Advance Search</a></span>
                </div>
                <span className="close" id="close">
                    <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/delete-sign.png" alt="delete-sign" />
                </span>
            </div>
            {/* Platforms */}
            <div>
                {/* Product 1 */}
                <div className="platforms tab-content" data-tab="tab1">
                    <div className='view'>
                        <h2>Platforms</h2>
                        <a href="">View All</a>
                    </div>
                    <div className='products'>
                        <div className='product'>
                            <span className='imageShape'>
                            <img width="30" height="30" src="https://img.icons8.com/bubbles/50/epic-games.png" alt="epic-games"/>
                            </span>
                            <h3>Steam</h3>
                        </div>

                        <div className='product'>
                            <span className='imageShape imageShapeBackgroundTow'>
                                <img width="30" height="30" src="https://img.icons8.com/nolan/64/ubisoft.png" alt="ubisoft" />
                            </span>
                            <h3>Ubisoft Connect</h3>
                        </div>

                        <div className='product'>
                            <span className='imageShape imageShapeBackgroundThree'>
                                <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/apple-app-store--v2.png" alt="apple-app-store--v2" />
                            </span>
                            <h3>Ea App</h3>
                        </div>

                        <div className='product'>
                            <span className='imageShape imageShapeBackgroundFour'>
                                <img width="30" height="30" src="https://img.icons8.com/color/48/net-framework.png" alt="net-framework" />
                            </span>  <h3>Battle.Net</h3>
                        </div>

                        <div className='product'>
                            <span className='imageShape imageShapeBackgroundFive'>
                                <img width="30" height="30" src="https://img.icons8.com/color/48/microsoft.png" alt="microsoft" />
                            </span>
                            <h3>Microsoft Store</h3>
                        </div>
                    </div>
                </div>
                {/* Other tab contents */}
                <div className="platforms tab-content " data-tab="tab2">This is two tab</div>
                <div className="platforms tab-content " data-tab="tab3">This is three tab</div>
                <div className="platforms tab-content " data-tab="tab4">This is four tab</div>
            </div>
        </div>
    );
};

export default Home;