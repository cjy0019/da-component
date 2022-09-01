import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import AddressBox from './AddressBox';
import CompareItemButtons from './CompareItemButtons';
import InlineText from './InlineText';

const CompareItemOrg = () => {
  return (
    <Container>
      <MapBox>
        {/* 지도 */}
        <Image style={{ zIndex: 99 }} src="/svg/ss.svg" width={400} height={200} />
      </MapBox>

      <AddressBox addr="부산광역시 강서구 송정동 1735-15" roadAddr="독산산단382로 14번가길 10" />

      <Contents>
        <InlineText title="대지면적" content="187.7m2" />
        <InlineText title="건물연면적" content="300m2" />
        <InlineText title="건물 구조" content="철골철근콘크리트구조" />
        <InlineText title="건물 규모" content="B6,F40/3000세대" />
        <InlineText title="사용승인일" content="2020.07.07" />
        <InlineText title="건물주용도" content="근린생활시설" />
        <InlineText title="용도지역" content="준공업지역" />

        <InlineText title="지목" content="대" />
        <InlineText title="토지이용상황" content="상업용" />
      </Contents>

      <CompareItemButtons />
    </Container>
  );
};

const Container = styled.div`
  width: 28.25rem;
  border-radius: 16px;

  padding: 24px 24px 29px;
  background-color: ${palette.GRAY_506273};
`;

const MapBox = styled.div`
  height: 274px;
  background-color: ${palette.DATAWN_MAIN_40B8A2};
  border-radius: 16px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`;

export default CompareItemOrg;
