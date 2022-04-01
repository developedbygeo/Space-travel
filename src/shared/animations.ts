export const pageAnimation = {
    hidden: { opacity: 0, x: -100 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.75, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.25 },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.35, ease: 'easeOut' } },
};

export const titleAnimation = {
    hidden: { y: 200 },
    show: { y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const fadeAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export const photoAnimation = {
    hidden: { scale: 1.25, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.65, ease: 'easeOut' } },
};
