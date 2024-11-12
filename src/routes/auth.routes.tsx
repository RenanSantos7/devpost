import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';

export type AuthRouteParams = {
	Login: undefined;
	Register: undefined;
};

const Stack = createNativeStackNavigator<AuthRouteParams>();

export default function AuthRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Login' component={Login} />
		</Stack.Navigator>
	);
}
