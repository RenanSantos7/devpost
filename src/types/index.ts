import { ColorValue } from 'react-native';

export interface IUser {
	uid: string;
	name: string;
	email: string;
	createdAt?: Date;
}

interface IColor {
	main: ColorValue;
	dark?: ColorValue;
	light?: ColorValue;
}

interface ISize {
	xlarge?: number;
	large?: number;
	main: number;
	small?: number;
	xsmall?: number;
}

export interface ITheme {
	size: {
        text: ISize;
        spacing: ISize;
	};
	colors: {
		primary: IColor;
		secondary: IColor;
		background: IColor;
		error: ColorValue;
		text: {
			main: ColorValue;
            title: ColorValue;
            placeholder: ColorValue;
		};
	};
}
