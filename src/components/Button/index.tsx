import { TouchableWithoutFeedbackProps } from 'react-native';
import {
	OnlyTxtBtn,
	OnlyTxtBtnTxt,
	PrimaryBtn,
	PrimaryBtnTxt,
	SecondaryBtn,
	SecondaryBtnTxt,
} from './styles';

interface ButtonProps extends TouchableWithoutFeedbackProps {
	text: string;
	variant?: 'primary' | 'secondary' | 'only-text';
}

export default function Button({ variant = 'primary', ...props }: ButtonProps) {
	if (variant === 'secondary') {
		return (
			<SecondaryBtn onPress={props.onPress}>
				<SecondaryBtnTxt>{props.text}</SecondaryBtnTxt>
			</SecondaryBtn>
		);
	}

	if (variant === 'only-text') {
		return (
			<OnlyTxtBtn onPress={props.onPress}>
				<OnlyTxtBtnTxt>{props.text}</OnlyTxtBtnTxt>
			</OnlyTxtBtn>
		);
	}

	return (
		<PrimaryBtn onPress={props.onPress}>
			<PrimaryBtnTxt>{props.text}</PrimaryBtnTxt>
		</PrimaryBtn>
	);
}
