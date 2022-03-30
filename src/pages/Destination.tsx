import useData from '../hooks/useData';
import { DestinationDataType } from '../shared/models/data.model';

import { StyledSection } from '../components/UI/Container.styled';
import ContentDisplay from '../components/ContentDisplay/ContentDisplay';
import MainText from '../components/TextDisplay/MainText';
import ExtraText from '../components/TextDisplay/ExtraText';
import StyledTextDisplay from '../components/UI/TextDisplay.styled';
import StyledList from '../components/UI/List.styled';

const Destination = () => {
    const [currDestination, destinationData, destinationHandler] = useData('destinations');
    const { name, description, distance, travel, images } = currDestination as DestinationDataType;
    const textDetails = { heading: name, body: description };

    return (
        <StyledSection className="destination">
            <ContentDisplay
                step="01."
                heading="pick your destination"
                path={require(`../assets${images.webp}`)}
                alt={name}
            >
                <StyledList>
                    {destinationData.map((destination, index) => (
                        <li
                            className={destination.name === currDestination.name ? 'active' : ''}
                            onClick={destinationHandler.bind(null, destination.name)}
                            key={index}
                        >
                            {destination.name}
                        </li>
                    ))}
                </StyledList>
            </ContentDisplay>
            <StyledTextDisplay className="extra">
                <MainText details={textDetails} />
                <article className="additional-info">
                    <ExtraText extraDetails={{ title: 'avg. distance', data: distance }} />
                    <ExtraText extraDetails={{ title: 'est. travel time', data: travel }} />
                </article>
            </StyledTextDisplay>
        </StyledSection>
    );
};

export default Destination;
