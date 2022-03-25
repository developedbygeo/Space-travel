import { LayoutProps } from './utils.model';

export type BaseProps = LayoutProps & {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    onChange?: (id: number) => void;
    onBlur?: () => void;
};

export type StyledProps = BaseProps & {
    width?: string;
    height?: string;
    padding?: string;
    color?: string;
};
