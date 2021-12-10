import styled from "styled-components";
import headerIllustration from "../assets/images/header_illustration.png";
import Button from "./Button";
import { breakpoints } from "./breakpoints";

const StyledHeaderSection = styled.section`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  padding: 3rem var(--side-padding);
`;

const TextContainer = styled.div`
  flex: 50%;

  & span {
    font-weight: bold;
  }

  & p {
    margin: 1.25rem 0 3.125rem;
  }

  & h1 {
    font-size:2rem
  }


  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 100%;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 50%;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 100%;
    margin-top: 3rem;
  }
`;

export default function HeaderSection() {
  return (
    <StyledHeaderSection>
      <TextContainer>
        <h1>
          Want anything to be easy with <span>LaslesVPN.</span>
        </h1>
        <p>
          Provide a network for all your needs with ease and fun using{" "}
          <span>LaslesVPN</span> discover interesting features from us.
        </p>
        <Button primary>Get Started</Button>
      </TextContainer>
      <ImageContainer>
        <img src={headerIllustration} alt="" />
      </ImageContainer>
    </StyledHeaderSection>
  );
}
