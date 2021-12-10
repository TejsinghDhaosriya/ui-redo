import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import openGiftBox from "../assets/images/open_gift_box.png";
import Button from "./Button";

const tickMark =
  "M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z";

const StyledPricingPlansSection = styled.section`
  padding: 5rem var(--side-padding);
`;

const PricingCardsGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md_end}) {
    justify-content: center;
  }
`;

const SinglePricingCard = styled.div`
  flex: 0 0 30%;
  background-color: #ffffff;
  padding: 5rem 1.5rem 3rem;
  border: 2px solid #dddddd;
  border-radius: 10px;
  display: inline-flex;
  flex-flow: column wrap;
  justify-content: space-between;
  transition: 0.3s;

  &:hover,
  &:focus-within {
    border-color: var(--orange);
  }

  & .center-text {
    text-align: center;
  }
  & .pricingCardImg {
    margin: 0 auto;
    display: block;
  }
  & .planName {
    font-size: 1.125rem;
    margin: 1.5rem 0;
  }
  & .planPrice {
    font-size: 1.5rem;
    margin: 2.5rem 0 1rem;
  }
  & .planName,
  & .planPrice {
    color: var(--heading-text-color);
    font-weight: 500;
  }
  & .planPrice span {
    color: var(--body-text-color);
    font-weight: normal;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xs_end}) {
    flex: 0 0 100%;

    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }

  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md_end}) {
    flex: 0 0 45%;

    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
    &:first-of-type {
      margin-right: auto;
    }
`;

const SinglePricingPlanPerk = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 10%;

  & svg {
    margin-right: 1rem;
    flex-shrink: 0;
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const PricingPlanSectionHeadingBox = styled.div`
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  & p {
    margin: 1.25rem 0 3.5rem;
  }
`;
const freePlan = [
  "Unlimited Bandwidth",
  "Encrypted Connection",
  "No Traffic Logs",
  "Works on All Devices",
];

const standardPlan = [
  "Unlimited Bandwidth",
  "Encrypted Connection",
  "Yes Traffic Logs",
  "Works on All Devices",
  "Connect Anywhere",
];

const premiumPlan = standardPlan.concat("Get New Features");

export default function PricingPlansSection() {
  return (
    <StyledPricingPlansSection>
      <PricingPlanSectionHeadingBox>
        <h2>Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </PricingPlanSectionHeadingBox>
      <PricingCardsGroupContainer>
        <Plans plans={freePlan} planType="Free Plan" />
        <Plans plans={standardPlan} planType="Standard Plan" />
        <Plans plans={premiumPlan} planType="Premium Plan" />
      </PricingCardsGroupContainer>
    </StyledPricingPlansSection>
  );

  function Svg() {
    return (
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <path d={tickMark} fill="#2FAB73" />
      </svg>
    );
  }
  function Plans(props) {
    return (
      <SinglePricingCard>
        <div>
          <img src={openGiftBox} alt="" className="pricingCardImg" />
          <p className="center-text planName">{props.planType}</p>
          {props.plans.map((fp, index) => {
            return (
              <SinglePricingPlanPerk key={index}>
                <Svg />
                <span>{fp}</span>
              </SinglePricingPlanPerk>
            );
          })}
        </div>
        <div className="center-text">
          <p className="planPrice">Free</p>
          <Button secondary>Select</Button>
        </div>
      </SinglePricingCard>
    );
  }
}
