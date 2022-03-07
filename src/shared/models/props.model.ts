import { PropsLayout } from './utils.model';

export interface AppProps extends PropsLayout {
    message?: string;
    count?: number;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    onChange?: (id: number) => void;
    onBlur?: () => void;
}
