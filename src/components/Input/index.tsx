import { TextInputProps } from 'react-native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

import { Container, StyledInput } from './styles';

interface InputProps extends TextInputProps {
	icon?: string;
	secret?: boolean;
}

export default function Input({
	secret = false,
	...props
}: InputProps) {
	return (
		<Container>
			{/*  
			{props.icon && (
                <FontAwesomeIcon
                    name={props.icon}
                    
                />
            )}
			*/}
			<StyledInput
				placeholder={props.placeholder}
				placeholderTextColor='#A09D9D'
				underlineColorAndroid='transparent'
				cursorColor='#e52246'
				secureTextEntry={secret}
				autoCapitalize={props.autoCapitalize || 'none'}
				{...props}
			/>
		</Container>
	);
}
