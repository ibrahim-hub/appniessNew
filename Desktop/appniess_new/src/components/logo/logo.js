import React from 'react';

import appinessLogo from '../../assets/images/appiness-logo.png';
import  './Logo.css';

const logo = (props) => (
    <div className="Logo" >
        <img src={appinessLogo} alt="appiness" />
    </div>
);

export default logo;