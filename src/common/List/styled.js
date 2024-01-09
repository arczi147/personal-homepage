import styled from "styled-components";
import { ReactComponent as DashIcon } from "../../images/dash.svg";

export const StyledList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    column-gap: 115px;
    padding-left: 0;
    margin-top: 32px;
    line-height: 1.4;
    margin-bottom: 0;
`;

export const Item = styled.li`
    list-style: none;
    font-size: 18px;
    color: ${({ theme }) => theme.color.listText};
    transition: 0.3s;
`;

export const Dash = styled(DashIcon)`
    width: 9px;
    height: 9px;
    margin-right: 16px;
`;