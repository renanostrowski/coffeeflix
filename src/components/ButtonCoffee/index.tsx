import styled from 'styled-components';

const ButtonCoffee = styled.a`
  padding: 14px 35px;
  background-color: var(--color-black-dark);
  color: var(--color-gray-ligth);
  border: 1px solid var(--color-gray-ligth);
  border-radius: 5px;
  font-size: 16rem;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: .7;
  }

`;

export default ButtonCoffee;