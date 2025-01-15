import { ColorValue } from 'react-native';

export interface IUser {
	uid: string;
	name: string;
	email: string;
	createdAt?: Date;
	likes?: string[]
	photoUrl?: string;
}

export interface IPost {
	uid: string;
	author: string;
	avatarUrl: string | null;
	content: string;
	created: Date;
	likes: number;
	userId: string | null;
}

interface IColor {
	main: ColorValue;
	dark?: ColorValue;
	darker?: ColorValue;
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
			light: ColorValue;
			lighter: ColorValue;
		};
	};
}
