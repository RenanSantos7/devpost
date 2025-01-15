import { ITheme } from '../types';

const theme: ITheme = {
	size: {
		text: {
			large: 24,
			main: 16,
			small: 14,
			smaller: 12,
		},
		spacing: {
			main: 20,
			small: 16,
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
			dark: '#323238',
			darker: '#222227',
			light: '#eee',
			lighter: 'white',
		},
		error: '#fc506f',
		text: {
			main: '#303030',
			light: '#aaa',
			lighter: '#eee',
			title: '#fff',
			placeholder: '#ccc',
		},
	},
};

export default theme;
