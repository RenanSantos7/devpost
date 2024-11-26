import { Container, Header, Post, Separator } from './styles';
import { Page } from '../../components/layout';
import FloatingBtn from '../../components/FloatingBtn';
import Logo from '../../components/Logo';

export default function Home() {
	const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<Page>
			<Header>
				<Logo size={32} />
			</Header>

			<Container
				data={array}
				renderItem={({ item }) => <Post />}
                keyExtractor={item => String(item)}
                ItemSeparatorComponent={() => <Separator />}
			/>
			<FloatingBtn />
		</Page>
	);
}
