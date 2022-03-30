import { css } from 'styled-components';
import { homeImg, destinationImg, crewImg, techImg, Img404 } from './images';

export const matchRegex = (operand: string, regex: RegExp, defaultValue: string) => {
    const match = operand.match(regex);
    if (match && match.length) {
        return match[0].replace('/', '');
    }
    return defaultValue;
};

const variableBackground = css`
    & > .home {
        background-image: url(${homeImg[0]});

        @media (min-width: 800px) {
            background-image: url(${homeImg[1]});
        }
        @media (min-width: 1025px) {
            background-image: url(${homeImg[2]});
        }
    }
    & > .destination {
        background-image: url(${destinationImg[0]});

        @media (min-width: 800px) {
            background-image: url(${destinationImg[1]});
        }
        @media (min-width: 1025px) {
            background-image: url(${destinationImg[2]});
        }
    }
    & > .crew {
        background-image: url(${crewImg[0]});

        @media (min-width: 800px) {
            background-image: url(${crewImg[1]});
        }
        @media (min-width: 1025px) {
            background-image: url(${crewImg[2]});
        }
    }

    & > .technology {
        background-image: url(${techImg[0]});
        @media (min-width: 800px) {
            background-image: url(${techImg[1]});
        }
        @media (min-width: 1025px) {
            background-image: url(${techImg[2]});
        }
    }
    & > .notFound {
        background: url(${Img404}) center no-repeat;
        background-size: cover;
    }
`;
export default variableBackground;
