import { BigHeading, SmallSubheading, Description } from '../UI/Text.styled';

type MainTextProps = {
    details: {
        heading: string;
        subheading?: string;
        body: string;
    };
};

const MainText = ({ details: { heading, subheading, body } }: MainTextProps) => {
    return (
        <article className="text-content">
            {subheading && <SmallSubheading as="span">{subheading}</SmallSubheading>}
            <BigHeading>{heading}</BigHeading>
            <Description>{body}</Description>
        </article>
    );
};

export default MainText;
