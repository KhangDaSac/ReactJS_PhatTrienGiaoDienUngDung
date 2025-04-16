import React from 'react';
import './Header.css'
import bell from '../assets/images/Bell 1.png'
import question from '../assets/images/Question 1.png'
import user from '../assets/images/Avatar 313.png'


const Header = () => {
    return (
        <div className='header'>
            <div className='header-left'>
                <h1>
                    Dashboard
                </h1>
            </div>

            <div className='header-right'>
                <input type="search" name="" id="" placeholder='Search...'/>
                <img src={bell} alt="" />
                <img src={question} alt="" />
                <img src={user} alt="" />
            </div>

        </div>
    );
}

export default Header;
