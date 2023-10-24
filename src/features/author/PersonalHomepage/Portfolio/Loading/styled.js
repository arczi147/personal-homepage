import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../../../../images/spinner.svg";

export const StyledLoading = styled.div`
    text-align: center;
    margin-top: 88px;
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 20px;
    line-height: 1.4;
    display: block;
    margin-bottom: 48px;
`;

export const Icon = styled(LoadingIcon)`
    width: 160px;
    height: 160px;
    margin-bottom: 140px;
`;