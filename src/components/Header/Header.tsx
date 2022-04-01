import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';

import { ReactComponent as Logo } from '../../assets/common/logo.svg';
import StyledHeader from './Header.styled';
import Nav from './Nav';
import { GoThreeBars, GoX } from 'react-icons/go';
import { UnstyledButton } from '../UI/Button.styled';

const Header = () => {
    const width = useWindowWidth();
    const { pathname } = useLocation();
    const [navIsEnabled, setNavIsEnabled] = useState(false);
    const navClass = width < 768 ? 'mobile-nav' : width > 767 && width < 1025 ? 'tablet-nav' : 'desktop-nav';

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setNavIsEnabled(false);
        }, 200);
        return () => clearTimeout(timer);
    }, [pathname]);

    const navToggleHandler = () => {
        setNavIsEnabled((prevState) => !prevState);
    };

    const buttonContent = !navIsEnabled ? <GoThreeBars /> : <GoX />;

    const shouldButtonRender = width < 768 && (
        <UnstyledButton onClick={navToggleHandler} title="Toggle Menu" className="menu">
            {buttonContent}
        </UnstyledButton>
    );

    return (
        <StyledHeader>
            <Link to="/home">
                <Logo className="logo" />
            </Link>
            {shouldButtonRender}
            {width < 768 ? navIsEnabled && <Nav className={navClass} /> : <Nav className={navClass} />}
        </StyledHeader>
    );
};

export default Header;
