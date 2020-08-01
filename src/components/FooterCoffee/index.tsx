import styled from 'styled-components';
import LogoCoffee from '../LogoCoffee';

const FooterCoffee = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16rem;
  background-color: var(--color-black-dark);
  color: var(--color-gray-ligth);
  padding: 20rem 0;
  border-top: 4px solid var(--color-primary)


  & > ${LogoCoffee} {
    margin-bottom: 20rem;
  }
`;

export default FooterCoffee;