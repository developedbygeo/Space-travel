import styled from 'styled-components/macro';

import { flexMixin } from '../../shared/mixins';
import { subheadingTypography } from '../../shared/styles/typography.styles';

const StyledDetails = styled.section`
    height: 90%;
    margin: auto;
    .text-content {
        margin-bottom: 1vh;
        h1 {
            font-size: 6rem;
            padding-block: 1rem;
            text-transform: uppercase;
            text-align: center;
        }
        p {
            color: rgb(${({ theme }) => theme.colors.accent});
            text-align: center;
            line-height: 1.4;
            letter-spacing: 0.2rem;
            font-weight: 300;
        }
    }

    .additional-info {
        padding-top: 3vh;
        width: 100%;
        align-self: flex-start;
        justify-self: center;
        text-align: center;
        border-top: 0.5px solid rgb(${({ theme }) => theme.colors.darkAccent});
        ${flexMixin('center', 'center', 'column')};
        gap: 1vh;

        p {
            text-transform: uppercase;
            ${subheadingTypography};
            color: rgb(${({ theme }) => theme.colors.accent});
            letter-spacing: 0.15rem;
        }
        h4 {
            font-size: 3rem;
            text-transform: uppercase;
            margin-block: 1rem;
        }
    }
`;

export default StyledDetails;
