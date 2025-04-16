import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import turnoverImg from '../assets/images/Button 1509.png';
import profitImg from '../assets/images/Button 1529.png';
import newCustomerImg from '../assets/images/Button 1530.png';
import overviewImg from '../assets/images/Squares four 1.png';


const Dashboard = () => {
    const [turnover, setTurnover] = useState({});
    const [profit, setProfit] = useState({});
    const [newCustomer, setNewCustomer] = useState({});

    useEffect(() => {
        getTurnover();
        getProfit();
        getNewCustomer();
    }, []);

    const getTurnover = async () => {
        try {
            const response = await fetch('http://localhost:3000/turnover');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setTurnover(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    };

    const getProfit = async () => {
        try {
            const response = await fetch('http://localhost:3000/profit');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setProfit(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    };

    const getNewCustomer = async () => {
        try {
            const response = await fetch('http://localhost:3000/new_customer');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setNewCustomer(data);
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    };

    return (
        <div>
            <div className='overview'>
                <img src={overviewImg} alt="" />
                <h2>
                    Overview
                </h2>
            </div>
            <div className='dashboards'>
                <div className='dashboard dashboard-turnover'>
                    <div>
                        <h3>
                            Turnover
                        </h3>
                        <h1>
                            ${turnover.total}
                        </h1>
                        <p>
                            <span>
                                {turnover.change}%
                            </span>
                            period of change
                        </p>
                    </div>
                    <div>
                        <img src={turnoverImg} alt="" />
                    </div>
                </div>
                <div className='dashboard dashboard-profit'>
                    <div>
                        <h3>
                            Profit
                        </h3>
                        <h1>
                            ${profit.total}
                        </h1>
                        <p>
                            <span>
                                {profit.change}%
                            </span>
                            period of change
                        </p>
                    </div>
                    <div>
                        <img src={profitImg} alt="" />
                    </div>

                </div>
                <div className='dashboard dashboard-new-customer'>
                    <div>
                        <h3>
                            New Customers
                        </h3>
                        <h1>
                            ${newCustomer.total}
                        </h1>
                        <p>
                            <span>
                                {newCustomer.change}%
                            </span>
                            period of change
                        </p>
                    </div>
                    <div>
                        <img src={newCustomerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
