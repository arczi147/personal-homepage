import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 63px;
    max-height: 404px;
    width: 1216px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    padding: 32px;
    margin-bottom: 72px;
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.color.mineShaft};
    padding-bottom: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.color.iron};
    margin: 0;
`;

export const Content = styled.div`
    padding: 0;
`;

