import { ActivityIndicator, View } from 'react-native';
import { useDataContext } from '../../contexts/dataContext';

export default function Loading() {
	const { loading } = useDataContext();

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#00000090',
				}}
			>
				<ActivityIndicator color='#e52246' size={64} />
			</View>
		);
	}
}
