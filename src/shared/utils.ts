import { flexMixin, gridMixin } from './mixins';
import { LayoutProps } from './models/utils.model';

export const getLayout = ({ flexSettings, gridSettings }: LayoutProps) => {
    if (flexSettings) {
        return flexMixin(flexSettings.justify, flexSettings.align, flexSettings.dir);
    } else if (gridSettings) {
        return gridMixin(gridSettings.cols, gridSettings.rows);
    }
};
