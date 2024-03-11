import React from 'react';
import { SunIcon, MoonIcon, CogIcon } from '@heroicons/react/24/outline';
import theme from '../styles/theme';
import { useThemeContext } from '../contexts/ThemeContext';

interface NavBarProps {
    isDrawerOpen: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isDrawerOpen }) => {
    const { theme: currentTheme, toggleTheme } = useThemeContext();

    return (
        <nav className={`p-4 fixed right-0 transition-all ease-in-out`} style={{ backgroundColor: currentTheme === 'light' ? theme.light.primary : theme.dark.primary, color: currentTheme === 'light' ? theme.light.white : theme.dark.white, left: isDrawerOpen ? '16rem' : '5rem', width: isDrawerOpen ? 'calc(100% - 16rem)' : 'calc(100% - 5rem)', transitionDuration: isDrawerOpen ? '300ms' : '200ms' }}>
            <div className="flex justify-between items-center">
                <h1>NavBar</h1>
                <div className="flex items-center">
                    <div className="border-r h-6 mx-2" style={{ borderColor: currentTheme === 'light' ? theme.light.white : theme.dark.white }}></div>
                    <button onClick={toggleTheme}>
                        {currentTheme === 'light' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>
                    <button className="ml-2">
                        <CogIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;