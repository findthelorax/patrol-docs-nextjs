import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Drawer from '../components/Drawer';

const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
            <div className="flex flex-col flex-1">
                <NavBar isDrawerOpen={isOpen} />
                {/* Rest of your content */}
            </div>
        </div>
    );
};

export default Home;