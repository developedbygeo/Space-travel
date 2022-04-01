import { IntroSpan } from '../UI/Text.styled';
import { StyledContentHeader, StyledContentImage } from './ContentDisplay.styled';

import { motion } from 'framer-motion';
import { fadeAnimation, photoAnimation } from '../../shared/animations';

type ContentProps = {
    step: string;
    heading: string;
    path: string;
    alt: string;
    children?: React.ReactNode;
};

const ContentDisplay = ({ step, heading, path, alt, children }: ContentProps) => {
    return (
        <>
            <StyledContentHeader className="header" variants={fadeAnimation}>
                <IntroSpan>{step}</IntroSpan>
                <IntroSpan as="h2">{heading}</IntroSpan>
            </StyledContentHeader>
            <motion.div className="img-cont" variants={photoAnimation}>
                <StyledContentImage src={path} alt={`cover of ${alt}`} />
            </motion.div>
            {children}
        </>
    );
};

export default ContentDisplay;
