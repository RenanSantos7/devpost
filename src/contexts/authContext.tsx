import { Alert } from 'react-native';
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { IUser } from '../types';
import isEmptyObj from '../utils/isEmptyObj';

interface IAuthContext {
	user: IUser;
	error: Error;
	isSignedIn: boolean;
	signUp: (name: string, email: string, password: string) => void;
	signIn: (email: string, password: string) => void;
	signOut: () => void;
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuthContext>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<IUser>(null);
	const [error, setError] = useState<Error>(null);
	const [loading, setLoading] = useState(false);

	async function signUp(name: string, email: string, password: string) {
		setLoading(true);
		await auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async value => {
				let { uid } = value.user;
				await firestore()
					.collection('users')
					.doc(uid)
					.set({
						name,
						email,
						createdAt: new Date(),
					})
					.then(() => {
						setUser({
							uid,
							name,
							email,
						});
					});
			})
			.catch(error => {
				console.error(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	async function signIn(email: string, password: string) {
		setLoading(true);
		await auth()
			.signInWithEmailAndPassword(email, password)
			.then(async value => {
				const id = value.user.uid;
				const userProfile = await firestore()
					.collection('users')
					.doc(id)
					.get();
				setUser({
					uid: id,
					name: userProfile.data().name,
					email: userProfile.data().email,
				});
				setError(null);
			})
			.catch(err => {
				console.log(err);
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	async function signOut() {
		setLoading(true);
		await auth()
			.signOut()
			.finally(() => {
				setLoading(false);
			});
		setUser(null);
	}

	async function saveUserOnAsyncStorage(data: IUser) {
		if (isEmptyObj(data)) {
			await AsyncStorage.setItem('user', '');
		}

		await AsyncStorage.setItem('user', JSON.stringify(data));
	}

	async function loadUserFromAsyncStorage() {
		setLoading(true);
		const storagedUser = await AsyncStorage.getItem('user');
		if (storagedUser) {
			setUser(JSON.parse(storagedUser));
		}
		setLoading(false);
	}

	useEffect(() => {
		loadUserFromAsyncStorage();
	}, []);

	useEffect(() => {
		saveUserOnAsyncStorage(user);
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				error,
				isSignedIn: !!user,
				signUp,
				signIn,
				signOut,
				loading,
				setLoading,
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
