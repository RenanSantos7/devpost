import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { Alert } from 'react-native';

interface IAuthContext {
	isSignedIn: boolean;
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
	signIn: (email: string, password: string) => void;
	signOut: () => void;
	signUp: (name: string, email: string, password: string) => void;
}

const AuthContext = createContext<IAuthContext>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);

	function signIn(email: string, password: string) {
		Alert.alert('Logar', 'Logado')
		console.log(`
Email: ${email}
Senha: ${password}
		`)
	}

	function signOut() {}

	function signUp(name: string, email: string, password: string) {
		Alert.alert('Logar', 'Logado')
		console.log(`
Nome: ${name}
Email: ${email}
Senha: ${password}
		`)
	}

	return (
		<AuthContext.Provider
			value={{
				isSignedIn: !!user,
				loading,
				setLoading,
				signIn,
				signUp,
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
