import { useNavigate } from 'react-router-dom';

import { StyledSection } from '../components/UI/Container.styled';
import { Description, BigHeading } from '../components/UI/Text.styled';
import { CtaButton } from '../components/UI/Button.styled';

import { motion } from 'framer-motion';
import { pageAnimation, fadeAnimation } from '../shared/animations';

const Home = () => {
    const navigate = useNavigate();

    const exploreHandler = () => navigate('/destination');

    return (
        <StyledSection className="landing" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <article className="landing-text">
                <motion.p className="landing-intro" variants={fadeAnimation}>
                    SO, YOU WANT TO TRAVEL TO
                </motion.p>
                <BigHeading variants={fadeAnimation}>SPACE</BigHeading>
                <article>
                    <Description variants={fadeAnimation}>
                        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
                        hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                        this world experience!
                    </Description>
                </article>
            </article>
            <div className="landing-cta-wrap">
                <CtaButton onClick={exploreHandler} variants={fadeAnimation}>
                    EXPLORE
                </CtaButton>
            </div>
        </StyledSection>
    );
};

export default Home;
