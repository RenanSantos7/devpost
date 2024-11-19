import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { useAuthContext } from '../contexts/authContext';

export default function Routes() {
	const { isSignedIn } = useAuthContext();

	return isSignedIn ? <AppRoutes /> : <AuthRoutes />;
}
