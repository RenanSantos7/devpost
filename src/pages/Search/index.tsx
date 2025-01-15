import { Container, Result, ResultsContainer, ResultTxt, SearchBox, SearchInput } from './styles';
import { useMemo, useState } from 'react';
import { useThemeContext } from '../../contexts/themeContext';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    const { theme } = useThemeContext();
    
    //temporário
    const resultados = useMemo(() => { 
        return searchQuery ? ['Resultado 1', 'Resultado 2', 'Resultado 3'] : [];
    }, [searchQuery]);

    function handleSearch(text: string) { 
        setSearchQuery(text);
    }

    return (
        <Container>
            <SearchBox>
                <FontAwesomeIcon
                    name='magnifying-glass'
                    size={theme.size.text.main}
                    color={theme.colors.primary.main}
                />
                <SearchInput
                    onChangeText={handleSearch}
                    value={searchQuery}
                    placeholder='Pesquise aqui...'
                    autoCapitalize='none'
                    cursorColor={theme.colors.primary.main}
                    selectionColor='#cc000058'
                    selectionHandleColor={theme.colors.primary.main}
                    underlineColorAndroid='transparent'
                    autoFocus
                    inlineImageLeft='search_icon'
                />
            </SearchBox>
            
            <ResultsContainer>
                {resultados.map((result, index) => (
                    <Result key={index}>
                        <ResultTxt>{result}</ResultTxt>
                    </Result>
                ))}
            </ResultsContainer>
        </Container>
    );
};