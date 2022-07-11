import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled.section`
    width: inherit;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    z-index: 1000000000000000;

    & > div{
        width: 19%;
        border: 2px solid red;
    }
`;

export const PorfolioBody = styled.section`
    /* margin-left: 20%; */
    padding: 0rem 2rem 0rem 0rem;
    width: 80%;
    border: 2px solid red;
`;

export const PorfolioHeader = styled.section`
    width: 100%;
`;

export const MainContent = styled.section`
    width: 100%;
    height: max-content;
`;

