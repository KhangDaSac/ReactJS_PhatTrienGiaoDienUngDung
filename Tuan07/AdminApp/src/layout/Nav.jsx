import React from 'react';
import dasboard from '../assets/images/Squares four 1.png'
import projects from '../assets/images/Folder.png';
import team from '../assets/images/Groups.png';
import analytics from '../assets/images/Pie chart.png';
import messages from '../assets/images/Chat.png';
import integrations from '../assets/images/Code.png';
import logo from '../assets/images/Image 1858.png';
import image from '../assets/images/Group.png';



import '../App.css'
const Nav = () => {
    return (
        <div>
            
            <div className='d-flex flex-column'>
                <div className='my-3'>
                    <img src={logo} alt="" />
                </div>
                <div className='d-flex flex-row align-items-center my-1 p-2 is-active rounded'>
                    <img src={dasboard} alt="" />
                    <h5 className='m-0 mx-2'>Dasboard</h5>
                </div>
                <div className='d-flex flex-row align-items-center my-1 p-2'>
                    <img src={projects} alt="" />
                    <h5 className='m-0 mx-2'>Projects</h5>
                </div>
                <div className='d-flex flex-row align-items-center my-1 p-2'>
                    <img src={team} alt="" />
                    <h5 className='m-0 mx-2'>Team</h5>
                </div>
                <div className='d-flex flex-row align-items-center my-1 p-2'>
                    <img src={analytics} alt="" />
                    <h5 className='m-0 mx-2'>Analytics</h5>
                </div>
                <div className='d-flex flex-row align-items-center my-1 p-2'>
                    <img src={messages} alt="" />
                    <h5 className='m-0 mx-2'>Messages</h5>
                </div>
                <div className='d-flex flex-row align-items-center my-1 p-2'>
                    <img src={integrations} alt="" />
                    <h5 className='m-0 mx-2'>Integrations</h5>
                </div>
                <div className='my-3'>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Nav;
