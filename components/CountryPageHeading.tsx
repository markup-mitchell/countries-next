import Image from 'next/image';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const Title = styled.h1`
  display: inline-block;
`;

const CountryPageHeading= ({title, image}) => {
  return (
    <Row>
      <Title>{title}</Title>
      <Image src={image} height="100px" width="100px"/>
    </Row>
  )
}

export default CountryPageHeading;