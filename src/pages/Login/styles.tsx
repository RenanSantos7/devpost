import styled from 'styled-components/native';
import Page from '../../components/layout/Page';

export const Container = styled(Page)`
	justify-content: center;
	align-items: center;
  background-color: #353840;
  gap: 18px;
  padding-inline: 40px;
`;

export const Title = styled.Text`
	font-weight: 900;
	font-size: 48px;
	font-style: italic;
  color: white;
  margin-bottom: 24px;
`;

export const TitleRed = styled.Text`
	color: #e52246;
`;
