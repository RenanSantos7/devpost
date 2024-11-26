import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/authContext';
import DataProvider from './src/contexts/dataContext';
import AppThemeProvider from './src/contexts/themeContext';
import Base from './src/pages/Base';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<DataProvider>
					<AppThemeProvider>
						<Base />
					</AppThemeProvider>
				</DataProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}
