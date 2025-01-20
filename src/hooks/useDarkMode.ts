import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    // Check if the code is running on the client
    const isClient = typeof window !== 'undefined';

    // Initialize darkMode state based on client matchMedia or fallback to false
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Exit early if running on the server
        if (!isClient) return;

        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

        const matchMediaList = window.matchMedia('(prefers-color-scheme: dark)');
        const updateDarkMode = (e: MediaQueryListEvent) => setDarkMode(e.matches);

        // Listen for changes in theme preference
        matchMediaList.addEventListener('change', updateDarkMode);

        // Cleanup listener on unmount
        return () => {
            matchMediaList.removeEventListener('change', updateDarkMode);
        };
    }, [isClient]);

    return darkMode;
};
