import styled from "styled-components";

export const ButtonLink = styled.a`
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    border-radius: 4px;
    font-size: 20.058px;
    font-weight: 600;
    border: none;
    text-decoration: none;
`;