import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import imgs from '../shared/images';

interface SizeVariants {
    type: string;
    mobile: string;
    tablet: string;
    desktop: string;
}

const [
    homeMobile,
    homeTablet,
    homeDesktop,
    destinationMobile,
    destinationTablet,
    destinationDesktop,
    crewMobile,
    crewTablet,
    crewDesktop,
] = imgs;

const lookup: SizeVariants[] = [
    { type: 'home', mobile: homeMobile, tablet: homeTablet, desktop: homeDesktop },
    { type: 'destination', mobile: destinationMobile, tablet: destinationTablet, desktop: destinationDesktop },
    { type: 'crew', mobile: crewMobile, tablet: crewTablet, desktop: crewDesktop },
];

const useBackground = () => {
    const [windowWidth, setwindowWidth] = useState(0);
    const { pathname } = useLocation();

    const device = windowWidth < 480 ? 'mobile' : windowWidth > 480 && windowWidth < 900 ? 'tablet' : 'desktop';

    const type =
        pathname !== undefined && pathname === '/' ? 'home' : pathname === 'destination' ? 'destination' : 'crew';

    useEffect(() => {
        const handleResize = () => {
            setwindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const lookupMatch = lookup.find((obj) => obj.type === type);

    if (lookupMatch) {
        return lookupMatch[device];
    }
};

export default useBackground;
