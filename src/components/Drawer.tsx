import React from 'react';
import { FaHome, FaUser, FaEnvelope, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import theme from '../styles/theme';
import { useThemeContext } from '../contexts/ThemeContext';

interface DrawerProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
    const { theme: currentTheme } = useThemeContext();

    return (
        <div
            className={`fixed z-10 inset-y-0 left-0 overflow-y-auto transition-all transform ${
                isOpen ? 'w-64' : 'w-20'
            }`}
            style={{ backgroundColor: currentTheme === 'light' ? theme.light.primary : theme.dark.primary, color: currentTheme === 'light' ? theme.light.white : theme.dark.white }}
        >
            <div className="p-8">
                <button
                    className="p-2 rounded absolute top-2 right-0 m-2"
                    onClick={toggleDrawer}
                >
                    {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
                </button>
                <ul className="space-y-4 mt-8">
                    <li className="flex items-center space-x-2">
                        <FaHome style={{ width: '24px !important', height: '24px !important' }} />
                        <span className={`ml-2 ${isOpen ? 'block' : 'hidden'}`}>Page 1</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUser style={{ width: '24px !important', height: '24px !important' }} />
                        <span className={`ml-2 ${isOpen ? 'block' : 'hidden'}`}>Page 2</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaEnvelope style={{ width: '24px !important', height: '24px !important' }} />
                        <span className={`ml-2 ${isOpen ? 'block' : 'hidden'}`}>Page 3</span>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </div>
        </div>
    );
}

export default Drawer;