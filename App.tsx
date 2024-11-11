import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';

import Routes from './src/routes';

export default function App() {
	return (
		<NavigationContainer>
      <StatusBar
        backgroundColor='#36393f'
        barStyle='light-content'
        translucent={false}
        />
      <View style={{
        height: 5,
        backgroundColor:'#36393f'
      }} /> 
			<Routes />
		</NavigationContainer>
	);
}
