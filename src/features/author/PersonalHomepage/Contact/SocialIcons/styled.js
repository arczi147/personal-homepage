import styled from "styled-components";

export const StyledIcon = Icon => styled(Icon)`
    height: auto;
    fill: ${({ theme }) => theme.color.icons};
    transition: 0.3s;

    &:hover {
        fill: ${({ theme }) => theme.color.iconHover};
    }
`;

export const List = styled.ul`
    display: flex;
    gap: 24px;
    align-items: flex-start;
    padding: 0;
`;

export const Item = styled.li`
    list-style: none;
`;

export const Link = styled.a``;