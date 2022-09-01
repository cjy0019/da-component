import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

interface PropTypes {
  addr: string;
  roadAddr: string;
}

const AddressBox = ({ addr, roadAddr }: PropTypes) => {
  return (
    <TextBox>
      <p>{addr}</p>
      <p>({roadAddr})</p>
    </TextBox>
  );
};

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background-color: ${palette.GRAY_EB};

  color: ${palette.BLACK_30};
  font-size: 0.875rem;

  margin-top: 8px;
  padding: 6px 0 8px;

  & > p:nth-of-type(1) {
    font-weight: 700;
  }
  & > p:nth-of-type(2) {
    font-weight: 400;
  }
`;

export default AddressBox;
