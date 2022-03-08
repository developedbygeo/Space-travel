import React from 'react';
import { NavLink } from 'react-router-dom';

import { BaseProps } from '../../shared/models/props.model';

const Nav = React.memo(({ className }: BaseProps) => {
    const isMobile = className === 'mobile-nav';

    return (
        <nav className={className}>
            <div className="link-wrapper">
                <NavLink to="/home">
                    {isMobile && <span className="num">00</span>}
                    <p>HOME</p>
                </NavLink>
                <NavLink to="/destination">
                    {isMobile && <span className="num">01</span>}
                    <p>DESTINATION</p>
                </NavLink>
                <NavLink to="/crew">
                    {isMobile && <span className="num">02</span>}
                    <p>CREW</p>
                </NavLink>
                <NavLink to="/technology">
                    {isMobile && <span className="num">03</span>}
                    <p>TECHNOLOGY</p>
                </NavLink>
            </div>
        </nav>
    );
});

Nav.displayName = 'Nav';

export default Nav;
