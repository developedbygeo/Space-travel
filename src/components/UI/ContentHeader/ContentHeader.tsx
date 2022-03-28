import StyledContent from './ContentHeader.styled';

type ContentProps = {
    step: string;
    heading: string;
    path: string;
    alt: string;
    children: React.ReactNode;
};

const ContentHeader = ({ step, heading, path, alt, children }: ContentProps) => {
    return (
        <StyledContent>
            <div className="header">
                <span>{step}</span>
                <h2>{heading}</h2>
            </div>
            <div className="img-cont">
                <img src={path} alt={`cover of ${alt}`} />
            </div>
            {children}
        </StyledContent>
    );
};

export default ContentHeader;
