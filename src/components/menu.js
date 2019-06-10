import React from 'react';
import styled from 'styled-components';
import { arrayOf, string, shape } from 'prop-types';

const MenuWrapper = styled.div`
  font-family: 'Papyrus', sans-serif;
  width: 100%;
  max-width: 1080px;
  color: #444;
  background-color: #fff;
  margin-bottom: 2rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  position: relative;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-columns: 100px;
  gap: 10px;
  border-top: 3px solid blue;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
`;

const Address = styled.address`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Item = styled.div`
  width: 100%;
  padding-bottom: 1rem;
`;

const Location = styled.div``;

const Phone = styled.div``;

const Upper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
`;

const Number = styled.span`
  font-weight: 300;
`;

const Name = styled.span`
  font-weight: ${props => (props.normal ? 300 : 600)};
  padding-left: ${props => (props.normal ? 0 : '0.5rem')};
  width: 100%;
  white-space: nowrap;
`;

const Price = styled.span`
  font-weight: 300;
`;

const Spacer = styled.span`
  border-bottom: 2px dotted rgba(68, 68, 68, 0.75);
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  width: 100%;
`;

const Pizzas1 = styled.div`
  padding: 20px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  @media only screen and (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const Pizzas2 = styled.div`
  padding: 20px;
  padding-top: calc(2rem + 20px);
  grid-column: 2 / 3;
  grid-row: 1 / 4;

  @media only screen and (max-width: 800px) {
    padding-top: 20px;
    grid-column: 1;
    grid-row: 2;
  }
`;

const Row3 = styled.div`
  padding: 20px;
  grid-column: 3;
  grid-row: 1;

  @media only screen and (max-width: 800px) {
    grid-column: 1;
    grid-row: 3;
  }
`;

const Ingredients = styled.div`
  display: block;
  color: rgba(68, 68, 68, 0.75);
`;

const Other = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Notes = styled.div`
  padding: 20px;
  grid-column: 3;
  grid-row: 3;
`;

const Open = styled.div`
  width: 100%;
  max-width: 1080px;
  background-color: red;
  font-size: 2rem;
  color: white;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 1rem;
`;

const Note = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 2rem;
`;

const Beer = styled.div`
  position: absolute;
  color: red;
  font-size: 2rem;
  right: 1rem;
  top: 2rem;
  transform: rotateZ(-15deg);

  @media only screen and (max-width: 660px) {
    position: relative;
    right: initial;
    top: initial;
    text-align: center;
    transform: none;
    padding-top: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: blue;
`;

function getNumber(number) {
  const listNumber = number + 17;
  if (listNumber >= 23 && listNumber <= 25) {
    return `S${listNumber - 22}`;
  }

  if (listNumber > 25) {
    return listNumber - 3;
  }

  return listNumber;
}

function Menu({ pizza, pasta, other, open, phone, address, notes }) {
  return (
    <MenuWrapper>
      <Beer>{notes.beer}</Beer>
      <Address>
        <Location>{address}</Location>
        <Phone>{phone}</Phone>
      </Address>
      <Wrapper>
        <Pizzas1>
          <Title>Pizzat:</Title>
          {pizza.slice(0, 16).map((i, idx) => (
            <Item>
              <Upper>
                <Number>{idx + 1}.</Number>
                <Name key={i.name}>{i.name}</Name>
                <Spacer />
                <Price>{i.price}</Price>
              </Upper>
              <Ingredients>{i.ingredients.join(', ')}</Ingredients>
            </Item>
          ))}
        </Pizzas1>
        <Pizzas2>
          {pizza.slice(16, 30).map((i, idx) => (
            <Item>
              <Upper>
                <Number>{getNumber(idx)}.</Number>{' '}
                <Name key={i.name}>{i.name}</Name>
                <Spacer />
                <Price>{i.price}</Price>
              </Upper>
              <Ingredients>{i.ingredients.join(', ')}</Ingredients>
            </Item>
          ))}
        </Pizzas2>
        <Row3>
          <Title>Pastat:</Title>
          {pasta.map((i, idx) => (
            <Item>
              <Upper>
                <Number>{idx + 1}.</Number> <Name key={i.name}>{i.name}</Name>
                <Spacer />
                <Price>{i.price}</Price>
              </Upper>
              <Ingredients>{i.ingredients.join(', ')}</Ingredients>
            </Item>
          ))}
          <Other>
            {other.map(i => (
              <Item>
                <Upper>
                  <Name normal key={i.name}>
                    {i.name}
                  </Name>
                  <Spacer />
                  <Price>{i.price}</Price>
                </Upper>
              </Item>
            ))}
          </Other>
          <Notes>
            <Note>{notes.vegan}</Note>
            <Note>{notes.special}</Note>
            <Note>{notes.extra}</Note>
          </Notes>
        </Row3>
      </Wrapper>
      <Open>{open}</Open>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  address: string.isRequired,
  phone: string.isRequired,
  open: string.isRequired,
  pizza: arrayOf(
    shape({
      name: string.isRequired,
      ingredients: arrayOf(string.isRequired).isRequired,
      price: string.isRequired,
    }).isRequired
  ).isRequired,
  pasta: arrayOf(
    shape({
      name: string.isRequired,
      ingredients: arrayOf(string.isRequired).isRequired,
      price: string.isRequired,
    }).isRequired
  ).isRequired,
  other: arrayOf(
    shape({
      name: string.isRequired,
      price: string.isRequired,
    }).isRequired
  ).isRequired,
  notes: shape({
    vegan: string.isRequired,
    extra: string.isRequired,
    beer: string.isRequired,
    special: string.isRequired,
  }).isRequired,
};

export default Menu;
