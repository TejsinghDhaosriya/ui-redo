import styled from "styled-components";

const BaseButton = styled.a`
  font-family: "Rubik", sans-serif;
  font-weight: normal;
  display: inline-block;
  text-decoration: none;
  padding: 1rem;
  border: none;
  background-color: transparent;
  color: var(--body-text-color);
  transition: 0.3s;

  &:hover,
  &:focus,
  &:active {
    color: var(--orange);
  }

  &:focus {
    outline: 1px solid var(--orange);
  }

  &:hover,
  &:active {
    outline: 0;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: red;
  color: #ffff;
  font-weight: 500;
  padding: 1rem 3rem;
  border: 1px solid var(--orange);
  border-radius: 10px;
  box-shadow: 0 20px 44px -1px rgba(245, 56, 56, 0.35);

  &:hover,
  &:focus,
  &:active {
    background-color: #ffffff;
    color: var(--orange);
    box-shadow: 0 10px 24px 0 rgba(245, 56, 56, 0.35);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: #ffffff;
  color: red;
  font-weight: 700;
  padding: 1rem 3rem;
  border: 3px solid red;
  border-radius: 50px;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--orange);
    color: #ffffff;
  }
`;

const AlternateButton = styled(BaseButton)`
  color: var(--heading-text-color);
  font-weight: 500;
`;

export default function Button({ primary, secondary, alternate, children }) {
  if (primary) {
    return <PrimaryButton href="#!">{children}</PrimaryButton>;
  } else if (secondary) {
    return <SecondaryButton href="#!">{children}</SecondaryButton>;
  } else if (alternate) {
    return <AlternateButton href="#!">{children}</AlternateButton>;
  } else {
    return <BaseButton href="#!">{children}</BaseButton>;
  }
}
