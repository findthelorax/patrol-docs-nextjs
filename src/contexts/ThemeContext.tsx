import React, { useState, createContext, useContext, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
});

const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const { theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme);

    useEffect(() => {
        // Get the initial theme from localStorage
        const savedTheme = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
        setCurrentTheme(savedTheme || theme);
    }, []);

    useEffect(() => {
        // Save the current theme to localStorage whenever it changes
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('theme', currentTheme);
        }
    }, [currentTheme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setCurrentTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, useThemeContext };