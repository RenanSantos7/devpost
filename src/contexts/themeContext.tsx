import { createContext, ReactNode, useContext, useState } from 'react';

import { ITheme } from '../types/index.ts';
import theme from '../theme/index.tsx';
import { ThemeProvider } from 'styled-components/native';

interface IThemeContext {
	theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>(undefined);

export default function AppThemeProvider({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<ThemeContext.Provider value={{ theme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error('ThemeContext não está sendo provido neste componente');
	return context;
}
