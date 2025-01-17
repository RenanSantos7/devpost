import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Settings from '../pages/Settings';
import Search from '../pages/Search';
import HomeRoutes from './home.routes';

export type AppRouteParams = {
	HomeTab: undefined;
	Pesquisar: undefined;
	Settings: undefined;
}

const Tabs = createBottomTabNavigator<AppRouteParams>();

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
                name='Settings'
                component={Settings}
                options={{
					tabBarIcon: ({ color, size }) => (
                        <FeatherIcon
                            color={color}
                            size={size}
                            name='sliders'
                        />
					),
				}}
            />

			{/* <Tabs.Screen name="Post" component={NewPost} /> */}
		</Tabs.Navigator>
	);
}
