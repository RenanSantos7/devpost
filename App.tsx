import { useEffect } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function App() {

  return (
    <Container>
      <Text>App</Text>
    </Container>
  );
};