import { Wrapper, Image, ThisIs, Name, AboutMe, Content, StyledButtonLink, Icon } from "./styled";
import photo from "../../../../images/Artur.png";
import { email } from "../../../../common/data";

export const Header = () => {
    return (
        <Wrapper>
            <Image src={photo} alt="Artur Feliks" />
            <AboutMe>
                <ThisIs>This is</ThisIs>
                <Name>Artur Feliks</Name>
                <Content>
                    👦💻 I'm an impassioned Junior Frontend Developer. In&nbsp;free time I'm developing
                    my skills in React and searching new learning possibilities. In the future I&nbsp;want
                    to work on interesting, large projects.
                </Content>
                <StyledButtonLink
                    href={`mailto:${email}`}
                    title={email}
                    rel="noreferrer noopener">
                    <Icon />
                    Hire Me
                </StyledButtonLink>
            </AboutMe>
        </Wrapper>
    )
};