import React, { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/switch';

// Importation des icones
import { Sun, Moon } from 'lucide-react';

/**
 *
 * @desc: Composant de Switch pour le mode Dark
 */
const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        // Vérifie le mode sombre initial en fonction des préférences du système ou du stockage local
        const darkModePreference =
            localStorage.getItem('abm-mytick-theme') === 'dark' ||
            (!localStorage.getItem('abm-mytick-theme') &&
                window.matchMedia('(prefers-color-scheme: light)').matches);
        setIsDarkMode(darkModePreference);

        // Applique la classe de mode sombre
        if (darkModePreference) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleDarkModeToggle = () => {
        setIsDarkMode((prev) => {
            const newMode = !prev;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('abm-mytick-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('abm-mytick-theme', 'light');
            }
            return newMode;
        });
    };

    return (
        <Switch
            size="sm"
            defaultSelected={
                localStorage.getItem('abm-mytick-theme') === 'dark'
            }
            startContent={<Sun />}
            endContent={<Moon />}
            onChange={handleDarkModeToggle}
            className="font-syne font-normal text-slate-700"
            color={isDarkMode ? 'primary' : 'secondary'}
        >
            Mode sombre
        </Switch>
    );
};

export default DarkModeSwitch;
