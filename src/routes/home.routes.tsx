import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import PostsUser from '../pages/PostsUser';

export type HomeStackParams = {
	Home: undefined;
	Post: undefined;
	PostsUser: { userId: string };
}

const Stack = createNativeStackNavigator<HomeStackParams>();

export default function HomeRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: '#fff',
				headerStyle: {
					backgroundColor: '#36393f',
				},
			}}
		>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name='Post'
				component={NewPost}
				options={{
					title: 'Novo Post',
					headerTintColor: '#fff',
				}}
			/>

			<Stack.Screen
				name='PostsUser'
				component={PostsUser}
				options={{
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	);
}
