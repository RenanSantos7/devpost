import { ActivityIndicator, View } from 'react-native';
import { useAuthContext } from '../../contexts/authContext';

export default function Loading() {
	const { loading } = useAuthContext();

	if (loading) {
		return (
			<View
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					zIndex: 100,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#000000cc',
				}}
			>
				<ActivityIndicator color='#e52246' size={64} />
			</View>
		);
	}
}
