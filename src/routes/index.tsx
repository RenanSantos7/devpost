import { useState } from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { ActivityIndicator, View } from 'react-native';

export default function Routes() {
	const isSignedIn = false;
	const [loading, setloading] = useState(false);

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00000090'
				}}
			>
				<ActivityIndicator
					color='#e52246'
					size={64}
				/>
			</View>
		);
	}

	return isSignedIn ? <AppRoutes /> : <AuthRoutes />;
}
