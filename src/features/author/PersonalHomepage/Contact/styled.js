import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 110px;
`;

export const LetsTalk = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    margin-bottom: 24px;
`;

export const Email = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 32px;
    line-height: normal;
    font-weight: 900;
    margin-bottom: 24px;
`;

export const AboutMe = styled.p`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 18px;
    line-height: 1.4;
    width: 670px;
    text-align: justify;
    margin-bottom: 56px;
`;