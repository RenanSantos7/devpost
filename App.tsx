import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';

import AuthProvider from './src/contexts/authContext';
import Routes from './src/routes';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar
				backgroundColor='#36393f'
				barStyle='light-content'
				translucent={false}
			/>
			<View
				style={{
					height: 5,
					backgroundColor: '#36393f',
				}}
			/>
      <AuthProvider>
        <Routes />
      </AuthProvider>
		</NavigationContainer>
	);
}
