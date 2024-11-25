import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import AuthProvider from './src/contexts/authContext';
import Routes from './src/routes';
import Loading from './src/components/layout/Loading';
import DataProvider from './src/contexts/dataContext';
import { useEffect } from 'react';

export default function App() {

	useEffect(() => {
		changeNavigationBarColor('#202225', true);
	}, []);

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
