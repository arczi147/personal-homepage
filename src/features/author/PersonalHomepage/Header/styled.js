import { styled } from "styled-components";
import { ReactComponent as EmailIcon } from "../../../../images/Message.svg";
import { ButtonLink } from "../../ButtonLink";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
`;

export const Image = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
`;

export const AboutMe = styled.div`
    max-width: 633px;
`;

export const ThisIs = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.slateGray};
    text-transform: uppercase;
    margin-top: 50px;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.mineShaft};
`;

export const Content = styled.p`
    font-size: 20px;
    line-height: 1.4;
    text-align: justify;
    color: ${({ theme }) => theme.color.slateGray};
`;

export const StyledButtonLink = styled(ButtonLink)`
    margin-top: 16px;
    display: inline-flex;
    gap: 16px;
`;

export const Icon = styled(EmailIcon)`
    height: 24px;
    width: 24px;
`;