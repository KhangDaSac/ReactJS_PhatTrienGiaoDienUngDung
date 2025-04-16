import React from 'react';
import dashboard from '../assets/images/Squares four 1.png'
import logo from '../assets/images/Image 1858.png'
import project from '../assets/images/Folder.png'
import team from '../assets/images/Groups.png'
import analytics from '../assets/images/Pie chart.png'
import messages from '../assets/images/Chat.png'
import integrations from '../assets/images/Code.png'

import image from '../assets/images/Group.png'


import './Menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li className='logo'>
                    <img src={logo} alt="" />
                </li>
                <li>
                    <a href="" className='group-item-menu group-item-menu-select'>
                        <div>
                            <img src={dashboard} alt="" />
                        </div>
                        <h4>
                            Dashboard
                        </h4>
                    </a>
                </li>
                <li>
                    <a href="" className='group-item-menu'>
                        <div>
                            <img src={project} alt="" />
                        </div>
                        <h4>
                            Project
                        </h4>
                    </a>
                </li>
                <li>
                    <a href="" className='group-item-menu'>
                        <div>
                            <img src={team} alt="" />
                        </div>
                        <h4>
                            Team
                        </h4>
                    </a>
                </li>
                <li>
                    <a href="" className='group-item-menu'>
                        <div>
                            <img src={analytics} alt="" />
                        </div>
                        <h4>
                            Analytics
                        </h4>
                    </a>
                </li>
                <li>
                    <a href="" className='group-item-menu'>
                        <div>
                            <img src={messages} alt="" />
                        </div>
                        <h4>
                            Messages
                        </h4>
                    </a>
                </li>
                <li>
                    <a href="" className='group-item-menu'>
                        <div>
                            <img src={integrations} alt="" />
                        </div>
                        <h4>
                            Integrations
                        </h4>
                    </a>
                </li>
            </ul>
            <div className='banner'>
                <img src={image} alt="" />
                <h4>V2.0 is avaiable</h4>
                <button className='button-try-now'>Try now</button>
            </div>
        </div>
    );
}

export default Menu;
