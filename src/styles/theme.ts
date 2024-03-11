interface Theme {
    light: {
        primary: string;
        secondary: string;
        accent: string;
        white: string;
        black: string;
        red: string;
    };
    dark: {
        primary: string;
        secondary: string;
        accent: string;
        white: string;
        black: string;
        red: string;
    };
}

const theme: Theme = {
    light: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#4a5568',
        white: '#ffffff',
        black: '#000000',
        red: '#e53e3e',
    },
    dark: {
        primary: '#2d3748',
        secondary: '#4a5568',
        accent: '#1a202c',
        white: '#e53e3e',
        black: '#ffffff',
        red: '#ffffff',
    },
};

export default theme;