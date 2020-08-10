import styled from 'styled-components';
import ButtonCoffee from '../ButtonCoffee';
import LogoCoffee from '../LogoCoffee';
import container from '../../tools/container';

export const HeaderCoffee = styled.header`
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary);
  padding: 20rem 25rem;

  @media(max-width: 800px){
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media(max-width: 800px) {
        justify-content: center;
        
        & > ${LogoCoffee} {
            height: 35px;
        }
        & > ${ButtonCoffee} {
            background-color: var(--color-primary-medium);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
`;