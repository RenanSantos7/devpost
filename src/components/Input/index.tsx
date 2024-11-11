import { TextInputProps } from 'react-native';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

import { Container, StyledInput } from './styles';

interface InputProps extends TextInputProps {
	icon?: string;
}

export default function Input(props: InputProps) {
	return (
		<Container>
           {/*  {props.icon && (
                <FontAwesomeIcon
                    name={props.icon}
                    
                />
            )} */}
			<StyledInput placeholder={props.placeholder} />
		</Container>
	);
}
