import React from 'react';
import './AdminApp.css'
import Header from './layout/Header';
import Nav from './layout/Nav';


const AdminApp = () => {
    return (
        <div className="container m-0">
            <div className="header">
                <Header></Header>
            </div>
            <div className="menu">
                <Nav></Nav>
            </div>
            <div className="content">

            </div>

            <div className="footer">

            </div>
        </div>
    );
}

export default AdminApp;
