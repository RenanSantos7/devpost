import { ColorValue } from 'react-native';

export interface IUser {
	uid: string;
	name: string;
	email: string;
	createdAt?: Date;
}

export interface IPost {
	uid: string;
	author: string;
	avatarUrl: string;
	content: string;
	created: Date;
	likes: number;
	userId: string;
}

interface IColor {
	main: ColorValue;
	dark?: ColorValue;
	light?: ColorValue;
	lighter?: ColorValue;
}

interface ISize {
	larger?: number;
	large?: number;
	main: number;
	small?: number;
	smaller?: number;
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
