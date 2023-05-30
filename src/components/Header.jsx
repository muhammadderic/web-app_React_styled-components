import { Image, Logo, LogoContainer, Nav, StyledHeader } from "../styled/Header.styled"
import { Container } from "../styled/Container.styled"
import { Button } from "../styled/Button.styled"
import { Grid } from "../styled/Grid.styled"

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <LogoContainer>
            <Logo src="http://placekitten.com/50/50" alt="Company logo" />
            <p>Web App</p>
          </LogoContainer>
          <Button>Try It Free</Button>
        </Nav>
        <Grid>
          <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, dolorem neque quis repudiandae animi cum iste? Magni alias libero natus tenetur delectus in quam a ipsa repudiandae, veritatis, odit dolorum.</p>
            <Button>
              Get Started for Free
            </Button>
          </div>
          <Image src="https://picsum.photos/200/300" hg='250px' />
        </Grid>
      </Container>
    </StyledHeader>
  )
}