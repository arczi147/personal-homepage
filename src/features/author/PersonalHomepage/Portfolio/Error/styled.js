import styled from "styled-components";
import { ReactComponent as DangerIcon } from "../../../../../images/danger.svg";
import { ButtonLink } from "../../../ButtonLink";

export const StyledError = styled.div`
    text-align: center;
    margin-top: 88px;
`;

export const Icon = styled(DangerIcon)`
    width: 48px;
    height: 48px;
`;

export const Message = styled.h2`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 24px;
    margin: 18px 0 32px 0;
`;

export const Info = styled.span`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: 20px;
    line-height: 1.4;
    display: block;
`;

export const StyledButtonLink = styled(ButtonLink)`
    margin: 16px auto 140px;
    display: inline-flex;
`;