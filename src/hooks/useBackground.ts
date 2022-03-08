import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import lookup from '../shared/images';
import homeDesktop from '../assets/home/background-home-desktop.jpg';

const useBackground = () => {
    const [windowWidth, setwindowWidth] = useState(0);
    const { pathname } = useLocation();
    const location = pathname.replace('/', '');

    const device = windowWidth < 480 ? 'mobile' : windowWidth > 480 && windowWidth < 900 ? 'tablet' : 'desktop';

    useEffect(() => {
        const handleResize = () => {
            setwindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const lookupMatch = lookup.find((obj) => obj.location === location);

    if (lookupMatch) {
        return { width: windowWidth, img: lookupMatch[device] };
    }
    return { width: windowWidth, img: homeDesktop };
};

export default useBackground;
