import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../../../images/GitHub-black.svg";
import { ReactComponent as FacebookIcon } from "../../../../images/Facebook.svg";
import { ReactComponent as LinkedINIcon } from "../../../../images/LinkedIN.svg";
import { ReactComponent as InstagramIcon } from "../../../../images/Instagram.svg";

export const Wrapper = styled.div`

`;

export const LetsTalk = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
    margin-bottom: 24px;
`;

export const Email = styled.h1`
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

export const Socials = styled.a`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 110px;
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
    width: 48px;
    height: 48px;
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
    width: 48px;
    height: 48px;
`;

export const StyledLinkedINIcon = styled(LinkedINIcon)`
    width: 48px;
    height: 48px;
`;

export const StyledInstagramIcon = styled(InstagramIcon)`
    width: 48px;
    height: 48px;
`;