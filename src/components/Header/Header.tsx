import { useState } from 'react';
import { Link } from 'react-router-dom';
import useBackground from '../../hooks/useBackground';

import { ReactComponent as Logo } from '../../assets/common/logo.svg';
import StyledHeader from './Header.styled';
import Nav from './Nav';
import { GoThreeBars, GoX } from 'react-icons/go';
import { UnstyledButton } from '../UI/Button.styled';

const Header = () => {
    const { width } = useBackground();
    const [navIsEnabled, setNavIsEnabled] = useState(false);

    const navClass = width < 768 ? 'mobile-nav' : width > 768 && width < 1025 ? 'tablet-nav' : 'desktop-nav';

    const navToggleHandler = () => {
        setNavIsEnabled((prevState) => !prevState);
    };

    const buttonContent = !navIsEnabled ? <GoThreeBars /> : <GoX />;

    return (
        <StyledHeader>
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <UnstyledButton onClick={navToggleHandler} title="Toggle Menu" className="menu">
                {buttonContent}
            </UnstyledButton>
            {navIsEnabled && <Nav className={navClass} />}
        </StyledHeader>
    );
};

export default Header;
