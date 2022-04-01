import { useNavigate } from 'react-router-dom';

import { StyledSection } from '../components/UI/Container.styled';
import MainText from '../components/TextDisplay/MainText';
import { CtaButton } from '../components/UI/Button.styled';

import { pageAnimation, fadeAnimation } from '../shared/animations';

const NotFoundDetails = {
    subheading: 'Welp, looks like you...',
    heading: 'Got lost in space',
    body: "Let's get you back to the home page.",
};

const NotFound = () => {
    const navigate = useNavigate();

    const navigateHandler = () => navigate('/home');

    return (
        <StyledSection className="not-found" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <MainText details={NotFoundDetails} />
            <CtaButton onClick={navigateHandler} variants={fadeAnimation}>
                Orbit to Home
            </CtaButton>
        </StyledSection>
    );
};

export default NotFound;
