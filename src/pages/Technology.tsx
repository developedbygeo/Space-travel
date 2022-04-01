import useData from '../hooks/useData';
import { TechnologyDataType } from '../shared/models/data.model';

import useWindowWidth from '../hooks/useWindowWidth';

import { StyledSection } from '../components/UI/Container.styled';
import ContentDisplay from '../components/ContentDisplay/ContentDisplay';
import MainText from '../components/TextDisplay/MainText';
import StyledTextDisplay from '../components/UI/TextDisplay.styled';
import StyledList from '../components/UI/List.styled';
import { TechButton } from '../components/UI/Button.styled';

import { pageAnimation } from '../shared/animations';

const Technology = () => {
    const windowWidth = useWindowWidth();
    const [currTech, techData, techHandler] = useData('technology');
    const { name, description, images } = currTech as TechnologyDataType;
    const isDesktop = windowWidth > 1024;
    const techDetails = { subheading: 'the terminology...', heading: name, body: description };

    return (
        <StyledSection className="technology" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <ContentDisplay
                step="03."
                heading="space launch 101"
                path={isDesktop ? require(`../assets${images.portrait}`) : require(`../assets${images.landscape}`)}
                alt={currTech.name}
            >
                <StyledList>
                    {techData.map((tech, index) => (
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
            </ContentDisplay>
            <StyledTextDisplay>
                <MainText details={techDetails} />
            </StyledTextDisplay>
        </StyledSection>
    );
};

export default Technology;
