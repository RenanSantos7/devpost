import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Profile from '../pages/Profile';
import Search from '../pages/Search';
import HomeRoutes from './home.routes';

const Tabs = createBottomTabNavigator();

export default function AppRoutes() {
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				tabBarActiveTintColor: '#fff',
				tabBarStyle: {
					backgroundColor: '#202225',
					borderTopWidth: 0,
				},
			}}
		>
			<Tabs.Screen
				name='HomeTab'
				component={HomeRoutes}
				options={{
					tabBarIcon: ({ color, size }) => (
                        <FeatherIcon
                            color={color}
                            size={size}
                            name='home'
                        />
					),
				}}
			/>

            <Tabs.Screen
                name='Pesquisar'
                component={Search}
                options={{
					tabBarIcon: ({ color, size }) => (
                        <FeatherIcon
                            color={color}
                            size={size}
                            name='search'
                        />
					),
				}}
            />

            <Tabs.Screen
                name='Perfil'
                component={Profile}
                options={{
					tabBarIcon: ({ color, size }) => (
                        <FeatherIcon
                            color={color}
                            size={size}
                            name='user'
                        />
					),
				}}
            />

			{/* <Tabs.Screen name="Post" component={NewPost} /> */}
		</Tabs.Navigator>
	);
}
