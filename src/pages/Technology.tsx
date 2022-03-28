import { useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

import { StyledSection } from '../components/UI/Container.styled';
import ContentHeader from '../components/ImageDisplay/ImageDisplay';
import MainText from '../components/TextDisplay/MainText';
import ExtraText from '../components/TextDisplay/ExtraText';
import StyledTextDisplay from '../components/UI/TextDisplay.styled';
import StyledList from '../components/UI/List.styled';
import { TechButton } from '../components/UI/Button.styled';

import data from '../assets/data.json';

const Technology = () => {
    const { technology } = data;
    const [currTech, setCurrTech] = useState(technology[0]);
    const windowWidth = useWindowWidth();
    const isDesktop = windowWidth > 1024;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const currentImage = isDesktop
        ? require(`../assets${currTech.images.portrait}`)
        : require(`../assets${currTech.images.landscape}`);

    const techDetails = { subheading: 'the terminology...', heading: currTech.name, body: currTech.description };

    const techHandler = (tech: string) => {
        const activeCrewMember = technology.find((obj) => obj.name === tech);
        if (activeCrewMember) setCurrTech(activeCrewMember);
    };

    return (
        <StyledSection className="technology">
            <ContentHeader step="03." heading="space launch 101" path={currentImage} alt={currTech.name}>
                <StyledList>
                    {technology.map((tech, index) => (
                        <TechButton
                            className={tech.name === currTech.name ? 'btn-active' : ''}
                            onClick={techHandler.bind(null, tech.name)}
                            key={index}
                            title="See other launch technology"
                        >
                            {index + 1}
                        </TechButton>
                    ))}
                </StyledList>
            </ContentHeader>
            <StyledTextDisplay>
                <MainText details={techDetails} />
            </StyledTextDisplay>
        </StyledSection>
    );
};

export default Technology;
