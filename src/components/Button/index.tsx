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
			<SecondaryBtn $disabled={props.disabled} onPress={props.onPress}>
				<SecondaryBtnTxt $disabled={props.disabled}>{props.text}</SecondaryBtnTxt>
			</SecondaryBtn>
		);
	}

	if (variant === 'only-text') {
		return (
			<OnlyTxtBtn $disabled={props.disabled} onPress={props.onPress}>
				<OnlyTxtBtnTxt $disabled={props.disabled}>{props.text}</OnlyTxtBtnTxt>
			</OnlyTxtBtn>
		);
	}

	return (
		<PrimaryBtn $disabled={props.disabled} onPress={props.onPress}>
			<PrimaryBtnTxt $disabled={props.disabled}>{props.text}</PrimaryBtnTxt>
		</PrimaryBtn>
	);
}
