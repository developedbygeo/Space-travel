import { useState } from 'react';

import { StyledSection } from '../components/UI/Container.styled';
import DestinationDetails from '../components/Destination/DestinationDetails';
import ContentHeader from '../components/UI/ContentHeader/ContentHeader';
import destinationData from '../assets/data.json';

const Destination = () => {
    const { destinations } = destinationData;
    const [currDestination, setCurrDestination] = useState(destinations[0]);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const currentImage = require(`../assets${currDestination.images.webp}`);

    const destinationHandler = (destination: string) => {
        const activeDestination = destinations.find((obj) => obj.name === destination);
        if (activeDestination) setCurrDestination(activeDestination);
    };

    // TODO create modular navigation for the ul (see design)

    return (
        <StyledSection className="destination">
            <ContentHeader step="01" heading="pick your destination" path={currentImage} alt={currDestination.name}>
                <ul>
                    {destinations.map((destination, index) => (
                        <li
                            className={destination.name === currDestination.name ? 'active' : ''}
                            onClick={destinationHandler.bind(null, destination.name)}
                            key={index}
                        >
                            {destination.name}
                        </li>
                    ))}
                </ul>
            </ContentHeader>
            <DestinationDetails details={currDestination} />
        </StyledSection>
    );
};

export default Destination;
