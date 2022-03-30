import { IntroSpan } from '../UI/Text.styled';
import { StyledContentHeader, StyledContentImage } from './ContentDisplay.styled';

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
            <StyledContentHeader className="header">
                <IntroSpan>{step}</IntroSpan>
                <IntroSpan as="h2">{heading}</IntroSpan>
            </StyledContentHeader>
            <div className="img-cont">
                <StyledContentImage src={path} alt={`cover of ${alt}`} />
            </div>
            {children}
        </>
    );
};

export default ContentDisplay;
