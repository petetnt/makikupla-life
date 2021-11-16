import React from 'react';
import { graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layout';
import Menu from '../components/menu';

const rotate360reverse = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(-360deg);
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
`;

const SpinnerReverse = styled.span`
  display: inline-block;
  animation: ${rotate360reverse} 2s linear infinite;
`;

const Pizza = () => (
  <Spinner>
    <span role="img" aria-label="pizza">
      🍕
    </span>
  </Spinner>
);
const Beer = () => (
  <SpinnerReverse>
    <span role="img" aria-label="beer">
      🍺
    </span>
  </SpinnerReverse>
);

const Title = styled.h1`
  margin-top: 3rem;
  font-size: 8vw;
  color: red;
  text-transform: uppercase;
  font-weight: 900;
`;

const Answer = styled.span`
  padding-top: 2rem;
  color: blue;
  font-size: 6vw;
  text-transform: uppercase;
  font-weight: 900;
  padding-bottom: 2rem;
`;

const Dropshadow = styled.span`
  text-shadow: 2px 2px #efe020;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <Title>
      <Pizza /> <Dropshadow>Mäkikuplaan?</Dropshadow> <Beer />
    </Title>
    <Answer>No khyl!</Answer>
    <Menu {...data.dataJson} />
  </Layout>
);

export const query = graphql`
  query {
    dataJson {
      address
      phone
      open
      pizza {
        name
        price
        ingredients
      }
      pasta {
        name
        price
        ingredients
      }
      other {
        name
        price
      }
      notes {
        vegan
        beer
        extra
        special
      }
    }
  }
`;

export default IndexPage;
