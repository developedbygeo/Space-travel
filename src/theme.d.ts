import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            fonts: {
                heading: string;
                subheading: string;
                body: string;
            };
            lineHeight: {
                body: string;
            };
        };
        colors: {
            mainBg: string;
            darkAccent: string;
            text: string;
            accent: string;
            highlight: string;
            nav: string;
        };
    }
}
