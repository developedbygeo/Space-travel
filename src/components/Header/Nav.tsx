import React from 'react';
import { NavLink } from 'react-router-dom';

import { BaseProps } from '../../shared/models/props.model';

const Nav = ({ className }: BaseProps) => {
    return (
        <nav className={className}>
            <div className="link-wrapper">
                <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className="num">00</span>
                    <p>HOME</p>
                </NavLink>
                <NavLink to="/destination" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className="num">01</span>
                    <p>DESTINATION</p>
                </NavLink>
                <NavLink to="/crew" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className="num">02</span>
                    <p>CREW</p>
                </NavLink>
                <NavLink to="/technology" className={({ isActive }) => (isActive ? 'active' : '')}>
                    <span className="num">03</span>
                    <p>TECHNOLOGY</p>
                </NavLink>
            </div>
        </nav>
    );
};

Nav.displayName = 'Nav';

export default React.memo(Nav);
