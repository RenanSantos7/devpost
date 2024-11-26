import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import { useThemeContext } from '../contexts/themeContext';
import Loading from '../components/layout/Loading';
import Routes from '../routes';

export default function Base() {
    const { theme } = useThemeContext();

	useEffect(() => {
		changeNavigationBarColor('#202225', true);
	}, []);

	return (
		<Container>
			<StatusBar
				backgroundColor={theme.colors.background.main}
				barStyle='light-content'
				translucent={false}
			/>
			<Loading />
			<Routes />
		</Container>
	);
}

const Container = styled.View`
	flex: 1;
`;
