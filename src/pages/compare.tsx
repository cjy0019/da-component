import React from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';

const Compare = () => {
  return (
    <Layout>
      <Container>
        <DivideContainer>
          <MapInfoContainer>
            <MapBox>{/* 지도 */}</MapBox>

            <InlineText>
              <div>대지면적</div>
              <div>187.7m2</div>
            </InlineText>

            <InlineText>
              <div>건물연면적</div>
              <div>300m2</div>
            </InlineText>

            <InlineText>
              <div>건물 구조</div>
              <div>철골철근콘크리트구조</div>
            </InlineText>

            <InlineText>
              <div>건물 규모</div>
              <div>건물 B6,F40/3000세대</div>
            </InlineText>

            <InlineText>
              <div>사용승인일</div>
              <div>2020.07.07</div>
            </InlineText>

            <InlineText>
              <div>건물주용도</div>
              <div>근린생활시설</div>
            </InlineText>

            <InlineText>
              <div>용도지역</div>
              <div>준공업지역</div>
            </InlineText>

            <InlineText>
              <div>지목</div>
              <div>대</div>
            </InlineText>

            <InlineText>
              <div>토지이용상황</div>
              <div>상업용</div>
            </InlineText>
          </MapInfoContainer>
        </DivideContainer>
        <DivideContainer>{/* 분석 그래프 */}</DivideContainer>
        <DivideContainer>{/* 오른쪽 */}</DivideContainer>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 90%;
  border-radius: 16px;

  background-color: red;
`;

const DivideContainer = styled.div`
  width: 33.333%;
  height: 100%;
  padding: 18px 18px 45px;

  border-radius: 16px;
  background-color: ${palette.BLUE_2F99F5};
`;

const MapInfoContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 8px 9px 8px 7px;

  background-color: ${palette.WHITE_F5};
`;

const MapBox = styled.div`
  height: 256px;
  border-radius: 8px;
  background-color: gold;
`;

const InlineText = styled.div`
  display: flex;
`;

export default Compare;
