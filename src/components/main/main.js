import styled, { createGlobalStyle } from "styled-components";

const Main = () => {
  return (
    <Container>
      <Title>
        <p>베스킨라빈스 성격 테스트</p>
      </Title>
      <Middle>
        <p>베스킨라빈스로 알아보는 나의 성격</p>
      </Middle>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: ivory;
`;
const Title = styled.div``;

const Middle = styled.div``;

export default Main;
