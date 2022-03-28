import StyledContent from './ImageDisplay.styled';

import { IntroSpan } from '../UI/Text.styled';

type ContentProps = {
    step: string;
    heading: string;
    path: string;
    alt: string;
    children?: React.ReactNode;
};

const ImageDisplay = ({ step, heading, path, alt, children }: ContentProps) => {
    return (
        <StyledContent>
            <div className="header">
                <IntroSpan>{step}</IntroSpan>
                <IntroSpan as="h2">{heading}</IntroSpan>
            </div>
            <div className="img-cont">
                <img src={path} alt={`cover of ${alt}`} />
            </div>
            {children}
        </StyledContent>
    );
};

export default ImageDisplay;
