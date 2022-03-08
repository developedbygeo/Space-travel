export type PropsLayout = {
    flexSettings?: {
        justify: string;
        align: string;
        dir: string;
    };
    gridSettings?: {
        cols: string;
        rows: string;
        gap?: string | undefined;
    };
};
