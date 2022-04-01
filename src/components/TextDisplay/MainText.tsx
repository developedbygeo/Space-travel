import { BigHeading, SmallSubheading, Description } from '../UI/Text.styled';

import { motion } from 'framer-motion';
import { fadeAnimation } from '../../shared/animations';

type MainTextProps = {
    details: {
        heading: string;
        subheading?: string;
        body: string;
    };
};

const MainText = ({ details: { heading, subheading, body } }: MainTextProps) => {
    return (
        <motion.article className="text-content" variants={fadeAnimation}>
            {subheading && <SmallSubheading as="span">{subheading}</SmallSubheading>}
            <BigHeading variants={fadeAnimation}>{heading}</BigHeading>
            <Description variants={fadeAnimation}>{body}</Description>
        </motion.article>
    );
};

export default MainText;
