import React from 'react';

import './styles.css';
import user from "../../assets/images/compte-option-1.png";


function DashboardHeader ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }

            <div className='dashbord-header-right'>
                <img src={user} alt="User Profile" className='dashbord-header-avatar'/>
                <div  className='separ'></div>
                <h4>Username</h4>
            </div>
        </div>
    )
}

export default DashboardHeader;