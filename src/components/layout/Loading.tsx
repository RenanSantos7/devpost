import { ActivityIndicator, View } from 'react-native';
import { useAuthContext } from '../../contexts/authContext';
import { useThemeContext } from '../../contexts/themeContext';

export default function Loading() {
	const { loading } = useAuthContext();

	const { theme } = useThemeContext();

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
				<ActivityIndicator
					color={theme.colors.primary.main}
					size={64}
				/>
			</View>
		);
	}
}
