import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';

import AuthProvider from './src/contexts/authContext';
import Routes from './src/routes';
import Loading from './src/components/layout/Loading';
import DataProvider from './src/contexts/dataContext';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar
				backgroundColor='#36393f'
				barStyle='light-content'
				translucent={false}
			/>
			<AuthProvider>
				<DataProvider>
					<Loading />
					<Routes />
				</DataProvider>
			</AuthProvider>
		</NavigationContainer>
	);
}
