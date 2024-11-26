import 'styled-components/native';
import { ITheme } from './src/types/index.tsx';

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
