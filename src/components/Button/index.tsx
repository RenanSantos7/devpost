import { TouchableWithoutFeedbackProps } from 'react-native';
import { OnlyTxtBtn, OnlyTxtBtnTxt, PrimaryBtn, PrimaryBtnTxt } from './styles';

interface ButtonProps extends TouchableWithoutFeedbackProps {
	text: string;
	variant?: 'primary' | 'only-text';
}

export default function Button({ variant = 'primary', ...props }: ButtonProps) {
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
