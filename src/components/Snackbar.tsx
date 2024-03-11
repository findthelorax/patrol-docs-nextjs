import React from 'react';
import { useSnackbarContext } from '../contexts/SnackbarContext';

const Snackbar: React.FC = () => {
    const { message, severity } = useSnackbarContext();

    if (!message) {
        return null;
    }

    let backgroundColor;
    switch (severity) {
        case 'success':
            backgroundColor = 'green';
            break;
        case 'error':
            backgroundColor = 'red';
            break;
        case 'warning':
            backgroundColor = 'orange';
            break;
        case 'info':
        default:
            backgroundColor = 'blue';
            break;
    }

    return (
        <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', backgroundColor, color: 'white', padding: '1em', borderRadius: '5px' }}>
            {message}
        </div>
    );
};

export default Snackbar;