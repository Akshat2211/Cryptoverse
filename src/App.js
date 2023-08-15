import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css'
import ReactGA from "react-ga4";

const App = () => {
    const TRACKING_ID = 'G-5ZYEMNQKXG'
    ReactGA.initialize(TRACKING_ID)
    ReactGA.send(document.location.pathname);

    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />}>
                            </Route>
                            <Route exact path="/exchanges" element={<Exchanges />}>

                            </Route>
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}>

                            </Route>
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />}>

                            </Route>
                            <Route exact path="/news" element={<News />}>

                            </Route>
                        </Routes>
                    </div>
                </Layout>

                <div className="footer" >
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        Made with &hearts; by Akshat
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App
