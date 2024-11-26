import { ITheme } from '../types';

const theme: ITheme = {
	size: {
		text: {
			large: 24,
			main: 16,
			small: 14,
		},
		spacing: {
			main: 20,
		},
	},
	colors: {
		primary: {
			main: '#cc0000',
		},
		secondary: {
			main: 'hsl(216, 97%, 62%)',
			dark: 'hsl(216, 77%, 42%)',
		},
		background: {
			main: '#353840',
			light: 'white',
		},
		error: '#fc506f',
		text: {
			main: '#eee',
			title: '#fff',
			placeholder: '#ccc',
		},
	},
};

export default theme;
