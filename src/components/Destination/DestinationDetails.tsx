import StyledDetails from './DestinationDetails.styled';

type currentDetails = {
    details: {
        name: string;
        description: string;
        distance: string;
        travel: string;
    };
};

const DestinationDetails = ({ details: { name, description, distance, travel } }: currentDetails) => {
    return (
        <StyledDetails>
            <article className="text-content">
                <h1>{name}</h1>
                <p>{description}</p>
            </article>
            <article className="additional-info">
                <div className="distance">
                    <p>avg. distance</p>
                    <h4>{distance}</h4>
                </div>
                <div className="travel-time">
                    <p>est. travel time</p>
                    <h4>{travel}</h4>
                </div>
            </article>
        </StyledDetails>
    );
};

export default DestinationDetails;
