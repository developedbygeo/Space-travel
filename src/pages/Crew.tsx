import { useState } from 'react';

import { StyledSection } from '../components/UI/Container.styled';
import ContentDisplay from '../components/ContentDisplay/ContentDisplay';
import MainText from '../components/TextDisplay/MainText';
import StyledTextDisplay from '../components/UI/TextDisplay.styled';
import StyledList from '../components/UI/List.styled';
import { DotToggle } from '../components/UI/Button.styled';

import data from '../assets/data.json';

const Crew = () => {
    const { crew } = data;
    const [currCrew, setCurrCrew] = useState(crew[0]);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const currentImage = require(`../assets${currCrew.images.webp}`);

    const crewDetails = { subheading: currCrew.role, heading: currCrew.name, body: currCrew.bio };

    const crewHandler = (crewMember: string) => {
        const activeCrewMember = crew.find((obj) => obj.name === crewMember);
        if (activeCrewMember) setCurrCrew(activeCrewMember);
    };

    return (
        <StyledSection className="crew">
            <ContentDisplay step="02." heading="meet your crew" path={currentImage} alt={currCrew.name}>
                <StyledList>
                    {crew.map((member, index) => (
                        <DotToggle
                            className={member.name === currCrew.name ? 'btn-active' : ''}
                            onClick={crewHandler.bind(null, member.name)}
                            key={index}
                            title="See other crew member"
                        />
                    ))}
                </StyledList>
            </ContentDisplay>
            <StyledTextDisplay>
                <MainText details={crewDetails} />
            </StyledTextDisplay>
        </StyledSection>
    );
};

export default Crew;
