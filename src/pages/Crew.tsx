import useData from '../hooks/useData';

import { CrewDataType } from '../shared/models/data.model';
import { StyledSection } from '../components/UI/Container.styled';
import ContentDisplay from '../components/ContentDisplay/ContentDisplay';
import MainText from '../components/TextDisplay/MainText';
import StyledTextDisplay from '../components/UI/TextDisplay.styled';
import StyledList from '../components/UI/List.styled';
import { DotToggle } from '../components/UI/Button.styled';

import { pageAnimation, fadeAnimation } from '../shared/animations';

const Crew = () => {
    const [currCrew, crewData, crewHandler] = useData('crew');
    const { role, name, bio, images } = currCrew as CrewDataType;
    const crewDetails = { subheading: role, heading: name, body: bio };

    return (
        <StyledSection className="crew" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <ContentDisplay
                step="02."
                heading="meet your crew"
                path={require(`../assets${images.webp}`)}
                alt={currCrew.name}
            >
                <StyledList variants={fadeAnimation}>
                    {crewData.map((member, index) => (
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
