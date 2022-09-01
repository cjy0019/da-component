import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

interface PropTypes {
  title: string;
  content: string;
}

// molecules
const InlineText = ({ title, content }: PropTypes) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

const Title = styled.div`
  color: ${palette.GRAY_9A};
  width: 150px;
`;

const Content = styled.div`
  font-weight: 400;
  color: ${palette.BLACK_30};
`;

const UseLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79px;
  height: 25px;
  color: ${palette.BLACK_30};
  background-color: ${palette.GRAY_EF};
  border-radius: 4px;
`;

const LandUse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 51px;
  height: 25px;

  font-weight: 400;
  font-size: 0.875rem;

  color: ${palette.PINK_F52F79} !important;
  background-color: ${palette.PINK_FFE5F0};
  border-radius: 4px;
`;

export default InlineText;
