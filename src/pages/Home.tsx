import { useNavigate } from 'react-router-dom';

import { StyledSection } from '../components/UI/Container.styled';
import { CtaButton } from '../components/UI/Button.styled';

const Home = () => {
    const navigate = useNavigate();

    const exploreHandler = () => navigate('/destination');

    return (
        <StyledSection>
            <article className="landing-text">
                <div className="landing-header-wrapper">
                    <h1 className="landing-intro">SO, YOU WANT TO TRAVEL TO</h1>
                    <h2>SPACE</h2>
                </div>
                <article>
                    <p className="landing-desc">
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                        hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                        this world experience!
                    </p>
                </article>
            </article>
            <div className="landing-cta-wrap">
                <CtaButton onClick={exploreHandler}>EXPLORE</CtaButton>
            </div>
        </StyledSection>
    );
};

export default Home;
