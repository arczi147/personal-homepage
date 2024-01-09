import styled from "styled-components";

export const Wrapper = styled.div`
    width: 592px;
    height: auto;
    background-color: ${({ theme }) => theme.color.projectTileBackground};
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    border: 6px solid rgba(209, 213, 218, 0.30);
    transition: 0.3s;
`;

export const Tile = styled.li`
    padding: 56px;
    margin: 0;
`;

export const Name = styled.h2`
    color: ${({ theme }) => theme.color.projectName};
    font-size: 24px;
    font-weight: 700;
    transition: 0.3s;
`;

export const Description = styled.p`
    margin: 24px 0;
    color: ${({ theme }) => theme.color.projectDescription};
    font-size: 18px;
    line-height: 1.4;
    transition: 0.3s;
`;

export const DemoLink = styled.div`
    display: grid;
    grid-gap: 8px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.projectDescription};
    font-size: 18px;
    line-height: 1.4;
    display: flex;
    flex-wrap: wrap;
    transition: 0.3s;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.projectLink};
    font-size: 18px;
    line-height: 1.4;
    word-break: break-word;
    transition: 0.3s;
`;