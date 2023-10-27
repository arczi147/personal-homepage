import { StyledIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "../../../../../images/GitHub-black.svg";
import { ReactComponent as FacebookIcon } from "../../../../../images/Facebook.svg";
import { ReactComponent as LinkedINIcon } from "../../../../../images/LinkedIN.svg";
import { ReactComponent as InstagramIcon } from "../../../../../images/Instagram.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/arczi147",
        Icon: StyledIcon(GitHubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/artur.feliks.9/",
        Icon: StyledIcon(FacebookIcon),
    },
    {
        name: "LinkedIN",
        Icon: StyledIcon(LinkedINIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/mr.happy_96/",
        Icon: StyledIcon(InstagramIcon),
    },
];