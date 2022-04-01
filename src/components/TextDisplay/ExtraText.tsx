import { MediumHeading, SmallSubheading } from '../UI/Text.styled';

import { fadeAnimation } from '../../shared/animations';

type ExtraDetails = {
    extraDetails: {
        title: string;
        data: string;
    };
};

const ExtraText = ({ extraDetails: { title, data } }: ExtraDetails) => {
    return (
        <div>
            <SmallSubheading variants={fadeAnimation}>{title}</SmallSubheading>
            <MediumHeading variants={fadeAnimation}>{data}</MediumHeading>
        </div>
    );
};

export default ExtraText;
