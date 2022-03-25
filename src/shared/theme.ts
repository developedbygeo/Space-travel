import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
    typography: {
        fonts: {
            heading: "'Bellefair', serif",
            subheading: "'Barlow Condensed', sans-serif",
            body: "'Barlow', sans-serif",
        },
        lineHeight: {
            body: '18px',
        },
    },
    colors: {
        mainBg: '11, 13, 23' || '#0b0d17',
        text: '255, 255, 255' || '#ffffff',
        accent: '208, 214, 249' || '#d0d6f9',
        highlight: '164, 176, 244' || '#a4b0f4',
        nav: '151, 151, 151' || '#979797',
    },
};

export { myTheme };
