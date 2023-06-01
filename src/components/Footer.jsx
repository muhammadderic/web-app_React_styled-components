import { Container } from "../styled/Container.styled";
import { Flex } from "../styled/Flex.styled";
import { StyledFooter } from "../styled/Footer.styled";
import { Logo, LogoContainer } from "../styled/Header.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <LogoContainer>
          <Logo src="http://placekitten.com/50/50" alt="Company logo" />
          <p>Web App</p>
        </LogoContainer>
        <Flex>
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, rem?</p>
          </div>
          <ul>
            <li>What i do?</li>
            <li>What you do?</li>
            <li>What we do?</li>
          </ul>
          <ul>
            <li>About me</li>
            <li>Contect us</li>
            <li>Blog</li>
          </ul>
          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  )
}