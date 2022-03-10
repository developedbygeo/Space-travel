import { useEffect, useState } from 'react';

const useBackground = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setwindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};

export default useBackground;
