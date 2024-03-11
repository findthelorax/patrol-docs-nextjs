import '../app/globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';
import { SnackbarProvider } from '@/contexts/SnackbarContext';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<SnackbarProvider>
				<Component {...pageProps} />
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default MyApp;
