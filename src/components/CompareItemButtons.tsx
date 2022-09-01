import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const CompareItemButtons = () => {
  return (
    <ButtonContainer>
      <button>다른 주소지 검색</button>
      <button>선택하기</button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 18px;

  & > button {
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 32px;

    border-radius: 8px;

    font-size: 0.875rem;
    font-weight: 400;

    cursor: pointer;
  }

  & > button:nth-of-type(1) {
    color: ${palette.GRAY_5A6268};
    background-color: ${palette.GRAY_EB};
  }
  & > button:nth-of-type(2) {
    color: ${palette.WHITE_FF};
    background-color: ${palette.DATAWN_MAIN_40B8A2};
  }
`;

export default CompareItemButtons;
