import React from 'react';
import { NavLink } from 'react-router-dom';
import dashboard from '../assets/images/Squares four 1.png';
import logo from '../assets/images/Image 1858.png';
import project from '../assets/images/Folder.png';
import team from '../assets/images/Groups.png';
import analytics from '../assets/images/Pie chart.png';
import messages from '../assets/images/Chat.png';
import integrations from '../assets/images/Code.png';
import image from '../assets/images/Group.png';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li className="logo">
          <img src={logo} alt="Logo" />
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'group-item-menu group-item-menu-select' : 'group-item-menu'
            }
          >
            <div>
              <img src={dashboard} alt="Dashboard" />
            </div>
            <h4>Dashboard</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? 'group-item-menu group-item-menu-select' : 'group-item-menu'
            }
          >
            <div>
              <img src={project} alt="Project" />
            </div>
            <h4>Project</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? 'group-item-menu group-item-menu-select' : 'group-item-menu'
            }
          >
            <div>
              <img src={team} alt="Team" />
            </div>
            <h4>Team</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? 'group-item-menu group-item-menu-select' : 'group-item-menu'
            }
          >
            <div>
              <img src={analytics} alt="Analytics" />
            </div>
            <h4>Analytics</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive ? 'group-item-menu group-item-menu-select' : 'group-item-menu'
            }
          >
            <div>
              <img src={messages} alt="Messages" />
            </div>
            <h4>Messages</h4>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/integrations"
            className={({ isActive }) =>
              isActive ? 'group-item-menu group-item-menu-select' : 'group-item-menu'
            }
          >
            <div>
              <img src={integrations} alt="Integrations" />
            </div>
            <h4>Integrations</h4>
          </NavLink>
        </li>
      </ul>
      <div className="banner">
        <img src={image} alt="Banner" />
        <h4>V2.0 is available</h4>
        <button className="button-try-now">Try now</button>
      </div>
    </div>
  );
};

export default Menu;