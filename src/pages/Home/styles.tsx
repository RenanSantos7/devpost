import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #36393f;
  padding: 14px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.FlatList`
  flex: 1;
  padding: 12px;
`;

export const Separator = styled.View`
  height: 16px;
`;

export const Post = styled.View`
  background-color: white;
  box-shadow: 1px 1px rgba(0,0,0,0.2);
  height: 120px;
  border-radius: 4px;
`;