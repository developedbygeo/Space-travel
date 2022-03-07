import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            lineHeight: {
                body: string;
            };
        };
        colors: {
            mainBg: string;
            text: string;
            accent: string;
        };
    }
}
