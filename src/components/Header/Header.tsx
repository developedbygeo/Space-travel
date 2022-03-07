import { ReactComponent as Logo } from '../../assets/common/logo.svg';
import StyledHeader from './Header.styled';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <button title="Toggle Menu" className="menu">
                <HiMenu />
            </button>
        </StyledHeader>
    );
};

export default Header;
