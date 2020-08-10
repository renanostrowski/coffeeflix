import styled from 'styled-components';
import container from '../../tools/container';
import TagCoffee from '../TagCoffee';
import TitleCoffee from '../TitleCoffee';


export const Text = styled.div`
    padding: 10rem;
    max-width: 45%;

    ${TagCoffee} {
        margin-bottom: 40rem;
    }

    ${TitleCoffee} {
        margin-bottom: 20rem;
    }
`;

export const BannerCoffee = styled.section`
    ${container};
    padding: 50rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-height: 70vh;
    height: 100vh;
`;