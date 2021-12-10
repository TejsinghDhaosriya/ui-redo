import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import logo from "../assets/icons/logo.svg";

const StyledFooterSection = styled.footer`
  background-color: #f8f8f8;
  padding: 5rem var(--side-padding);
  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md_end}) {
    background-color: none;
  
  }
`;

const FooterGroupBox = styled.div`
  display: flex;
  padding-top: 4rem;

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md_end}) {
    & {
      flex-wrap: wrap;
    }
  }
`;

const LogoAndSocialMediaLinksBox = styled.div`
  flex: 0 0 30%;
  margin-right: auto;

  & .companyDescription {
    margin: 1rem 0 1.875rem;

    & span {
      font-weight: 500;
    }
  }

  & .copyright {
    color: #afb5c0;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.md_end}) {
    & {
      flex: 0 0 100%;
      order: 5;
      margin-top: 2rem;
    }
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md_end}) {
    & {
      flex: 0 0 60%;
    }
  }
`;

const SingleFooterQuickLinksContainer = styled.div`
  flex: 0 0 18%;

  & h4 {
    margin-bottom: 1.75rem;
  }

  & div {
    margin-top: 0.75rem;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 0 0 50%;
    margin-bottom: 3.5rem;
  }
  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.md_end}) {
    flex: 0 0 33%;
    margin-bottom: 3.5rem;
  }
`;
const productList = [
  "Download",
  "Pricing",
  "Locations",
  "Server",
  "Countries",
  "Blog",
];
const engageList = [
  "LaslesVPN",
  "FAQs",
  "Tutorials",
  "About Us",
  "Privacy Policy",
  "Terms of Service",
];
export default function Footer() {
  return (
    <StyledFooterSection>
      <FooterGroupBox>
        <LogoAndSocialMediaLinksBox>
          <img src={logo} alt="LaslesVPN logo" />
          <p className="companyDescription">
            <span>LaslesVPN</span> is a virtual private network that has unique
            features and has high security.
          </p>
          <p className="copyright">&copy; 2020LaslesVPN</p>
        </LogoAndSocialMediaLinksBox>

        <SingleFooterQuickLinksContainer>
          <h4>Product</h4>
          {productList.map((pl) => {
            return <div>{pl}</div>;
          })}
        </SingleFooterQuickLinksContainer>

        <SingleFooterQuickLinksContainer>
          <h4>Engage</h4>
          {engageList.map((pl) => {
            return <div>{pl}</div>;
          })}
        </SingleFooterQuickLinksContainer>

        <SingleFooterQuickLinksContainer>
          <h4>Earn Money</h4>
          <div>Affiliate</div>
          <div>Become Partner</div>
        </SingleFooterQuickLinksContainer>
      </FooterGroupBox>
    </StyledFooterSection>
  );
}
