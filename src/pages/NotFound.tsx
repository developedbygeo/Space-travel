import { useNavigate } from 'react-router-dom';

import { StyledSection } from '../components/UI/Container.styled';
import MainText from '../components/TextDisplay/MainText';
import { CtaButton } from '../components/UI/Button.styled';

const NotFoundDetails = {
    subheading: 'Welp, looks like you...',
    heading: 'Got lost in space',
    body: "Let's get you back to the home page.",
};

const NotFound = () => {
    const navigate = useNavigate();

    const navigateHandler = () => navigate('/home');

    return (
        <StyledSection className="not-found">
            <MainText details={NotFoundDetails} />
            <CtaButton onClick={navigateHandler}>Orbit to Home</CtaButton>
        </StyledSection>
    );
};

export default NotFound;
