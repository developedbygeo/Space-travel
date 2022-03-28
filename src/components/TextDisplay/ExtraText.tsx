import { MediumHeading, SmallSubheading } from '../UI/Text.styled';

type ExtraDetails = {
    extraDetails: {
        title: string;
        data: string;
    };
};

const ExtraText = ({ extraDetails: { title, data } }: ExtraDetails) => {
    return (
        <div>
            <SmallSubheading>{title}</SmallSubheading>
            <MediumHeading>{data}</MediumHeading>
        </div>
    );
};

export default ExtraText;
