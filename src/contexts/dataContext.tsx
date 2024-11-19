import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';

interface IDataContext {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
}

const DataContext = createContext<IDataContext>(undefined);

export default function DataProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(false);

	return (
		<DataContext.Provider value={{ loading, setLoading }}>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	const context = useContext(DataContext);
	if (!context)
		throw new Error('DataContext não está sendo provido neste componente');
	return context;
}
