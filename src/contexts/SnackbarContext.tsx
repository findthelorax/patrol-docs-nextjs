import React, { useState, createContext, useContext } from 'react';
import Snackbar from '../components/Snackbar';

interface SnackbarContextProps {
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
    showMessage: (message: string, severity: 'success' | 'error' | 'info' | 'warning') => void;
}

const SnackbarContext = createContext<SnackbarContextProps>({
    message: '',
    severity: 'info',
    showMessage: () => {},
});

const useSnackbarContext = () => useContext(SnackbarContext);

const SnackbarProvider: React.FC = ({ children }) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('info');

    const showMessage = (newMessage: string, newSeverity: 'success' | 'error' | 'info' | 'warning') => {
        setMessage(newMessage);
        setSeverity(newSeverity);
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <SnackbarContext.Provider value={{ message, severity, showMessage }}>
            {children}
            {message && <Snackbar />}
        </SnackbarContext.Provider>
    );
};

export { SnackbarProvider, useSnackbarContext };