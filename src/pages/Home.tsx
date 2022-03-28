import { useNavigate } from 'react-router-dom';

import { StyledSection } from '../components/UI/Container.styled';
import { Description, BigHeading } from '../components/UI/Text.styled';
import { CtaButton } from '../components/UI/Button.styled';

const Home = () => {
    const navigate = useNavigate();

    const exploreHandler = () => navigate('/destination');

    return (
        <StyledSection>
            <article className="landing-text">
                <p className="landing-intro">SO, YOU WANT TO TRAVEL TO</p>
                <BigHeading>SPACE</BigHeading>
                <article>
                    <Description>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                        hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                        this world experience!
                    </Description>
                </article>
            </article>
            <div className="landing-cta-wrap">
                <CtaButton onClick={exploreHandler}>EXPLORE</CtaButton>
            </div>
        </StyledSection>
    );
};

export default Home;
