import styled from 'styled-components';
import ButtonCoffee from '../ButtonCoffee';
import LogoCoffee from '../LogoCoffee';

const HeaderCoffee = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary);

  @media(max-width: 800px){
    justify-content: center;
    padding: 15px 16px;

    & > ${LogoCoffee} {
      height: 35px;
    }

    & > ${ButtonCoffee} {
      background-color: var(--color-primary);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
  }
`;

export default HeaderCoffee;