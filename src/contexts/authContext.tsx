import { Alert } from 'react-native';
import {
	createContext,
	ReactNode,
	useContext,
	useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthContext {
	isSignedIn: boolean;
	signUp: (name: string, email: string, password: string) => void;
	signIn: (email: string, password: string) => void;
	signOut: () => void;
}

const AuthContext = createContext<IAuthContext>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState(null);

	function signUp(name: string, email: string, password: string) {
		Alert.alert('Logar', 'Logado');
		console.log(`Nome: ${name}
		Email: ${email}
		Senha: ${password}
		`);
	}

	function signIn(email: string, password: string) {
		Alert.alert('Logar', 'Logado');
		console.log(`Email: ${email}
		Senha: ${password}	
		`);
		setUser({ email });
	}

	function signOut() {
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{
				isSignedIn: !!user,
				signUp,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (!context)
		throw new Error('AuthContext não está sendo provido neste componente');
	return context;
}
