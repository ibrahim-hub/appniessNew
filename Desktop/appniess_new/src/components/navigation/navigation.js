import React from 'react';
import classes from './navigation.css';
import { NavLink } from 'react-router-dom';




const navigation = ( props ) => (
    <ul>
         <li><a class="active" href="/logout">Log-out</a></li>
    </ul>
);

export default navigation;