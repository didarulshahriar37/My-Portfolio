'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // Animate only once
            easing: 'ease-in-out',
        });

        AOS.refresh(); // Ensure AOS calculates positions correctly
    }, []);

    return <>{children}</>;
};

export default AOSProvider;
