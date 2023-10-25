import { AboutMe, Email, LetsTalk, Wrapper, Socials, StyledGitHubIcon, StyledFacebookIcon, StyledLinkedINIcon, StyledInstagramIcon } from "./styled";

export const Contact = () => (
    <Wrapper>
        <LetsTalk>Let’s talk!</LetsTalk>
        <Email>arturfeliks4@gmail.com</Email>
        <AboutMe>I’m always open to new projects whenever I have the time. If you have a&nbsp;website,
            dashboard or mobile app in mind and need some help to make your ideas come to life,
            feel free to contact me. 🤞
        </AboutMe>
        <Socials>
            <StyledGitHubIcon />
            <StyledFacebookIcon />
            <StyledLinkedINIcon />
            <StyledInstagramIcon />
        </Socials>
    </Wrapper>
);