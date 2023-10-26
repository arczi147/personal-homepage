import styled from "styled-components";

export const Tile = styled.li`
    padding: 56px;
    margin: 0;
`;

export const Name = styled.h2`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 24px;
    font-weight: 700;
`;

export const Description = styled.p`
    margin: 24px 0;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    line-height: 1.4;
`;

export const DemoLink = styled.div`
    display: grid;
    grid-gap: 8px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 18px;
    line-height: 1.4;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: 18px;
    line-height: 1.4;
`;