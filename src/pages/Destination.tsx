import { useState } from 'react';

import { StyledSection } from '../components/UI/Container.styled';
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

    // TODO break it down to individual presentational components

    return (
        <StyledSection className="destination">
            <article>
                <div className="destination-header">
                    <span>01</span>
                    <h2>PICK YOUR DESTINATION</h2>
                </div>
                <div className="destination-img-cont">
                    <img src={currentImage} alt={`cover of ${currDestination.name}`} />
                </div>
                <ul>
                    {destinations.map((destination, index) => (
                        <li
                            className={destination.name === location.search ? 'active' : ''}
                            onClick={destinationHandler.bind(null, destination.name)}
                            key={index}
                        >
                            {destination.name}
                        </li>
                    ))}
                </ul>
            </article>
            <article className="destination-text-content">
                <h1>{currDestination.name}</h1>
                <p>{currDestination.description}</p>
            </article>
        </StyledSection>
    );
};

export default Destination;
