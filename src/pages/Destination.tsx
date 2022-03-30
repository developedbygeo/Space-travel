import { useState } from 'react';

import { StyledSection } from '../components/UI/Container.styled';
import ContentDisplay from '../components/ContentDisplay/ContentDisplay';
import MainText from '../components/TextDisplay/MainText';
import ExtraText from '../components/TextDisplay/ExtraText';
import StyledTextDisplay from '../components/UI/TextDisplay.styled';
import StyledList from '../components/UI/List.styled';

import data from '../assets/data.json';

const Destination = () => {
    const { destinations } = data;
    const [currDestination, setCurrDestination] = useState(destinations[0]);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const currentImage = require(`../assets${currDestination.images.webp}`);

    const textDetails = { heading: currDestination.name, body: currDestination.description };

    const destinationHandler = (destination: string) => {
        const activeDestination = destinations.find((obj) => obj.name === destination);
        if (activeDestination) setCurrDestination(activeDestination);
    };

    return (
        <StyledSection className="destination">
            <ContentDisplay step="01." heading="pick your destination" path={currentImage} alt={currDestination.name}>
                <StyledList>
                    {destinations.map((destination, index) => (
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
                    <ExtraText extraDetails={{ title: 'avg. distance', data: currDestination.distance }} />
                    <ExtraText extraDetails={{ title: 'est. travel time', data: currDestination.travel }} />
                </article>
            </StyledTextDisplay>
        </StyledSection>
    );
};

export default Destination;
