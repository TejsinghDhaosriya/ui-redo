import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import viezhRobertImg from "../assets/images/viezh_robert.png";
import yessicaChristyImg from "../assets/images/yessica_christy.png";
import kimYoungJouImg from "../assets/images/kim_young_jou.png";
import { useRef, useState } from "react";

const StyledTestimonialSection = styled.section`
  padding: 5rem 0 15rem;
`;

const SectionHeadingBox = styled.div`
  text-align: center;
  max-width: 550px;
  margin: 0 auto;

  & p {
    margin: 1.25rem 0 0;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xs_end}) {
    padding: 0 var(--side-padding);
  }
`;

const TestimonialGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5.5rem 0 5.5rem var(--side-padding);
  overflow: hidden;
`;

const SingleTestimonialCard = styled.div`
  flex: 0 0 31%;
  background-color: #ffffff;
  border: ${(props) =>
    props.isCardActive ? "2px solid #f53838" : "2px solid #dddddd"};
  border-radius: 10px;
  padding: 2rem;
  margin: 0 1.5rem;
  box-shadow: ${(props) =>
    props.isCardActive ? "0 20px 114px rgba(13, 16, 37, 0.06)" : "none"};
  transition: 0.3s ease-in-out;

  &:first-of-type {
    margin-left: 0;
  }

  & .testimonialRemarks {
    color: var(--heading-text-color);
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm_end}) {
    flex: 0 0 80%;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.md_end}) {
    flex: 0 0 60%;
  }

  @media (min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.lg_end}) {
    flex: 0 0 45%;
  }
`;

const TestimonialCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;

  & .testimonialNameAndImg {
    display: inline-flex;
    align-items: center;

    & img {
      padding-right: 1rem;
    }

    & .testimonialName {
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--heading-text-color);
      display: block;
    }

    & .testimonialLocation {
      font-size: 0.875rem;
      display: block;
    }
  }

  & .ratings {
    display: inline-flex;
    align-items: center;

    & span {
      color: var(--heading-text-color);
      margin-right: 0.5rem;
    }

    @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xs_end}) {
      flex: 100%;
      margin-top: 0.75rem;
    }
  }
`;

const IndicatorAndNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--side-padding);
`;

const IndicatorsContainer = styled.div`
  display: inline-flex;

  & span {
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: #dde0e4;
    margin-right: 0.75rem;
    transition: 0.3s ease-in-out;

    &[data-active-indicator="true"] {
      background-color: red;
      width: 30px;
    }
  }
`;

const TestimonialNavContainer = styled.div`
  display: inline-flex;

  & button {
    height: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;
    cursor: pointer;

    &:focus {
      outline: 1px solid var(--orange);
    }
  }
  & .prevBtn {
    background-color: transparent;
    border: 1px solid var(--orange);
    margin-right: 1.25rem;
  }
  & .nextBtn {
    background-color: var(--orange);
    border: 1px solid var(--orange);
  }
`;

export default function TestimonialSection() {
  const [activeItem, setActiveItem] = useState(1);

  const handleNextBtnClick = () => {
    if (activeItem === 4) {
      setActiveItem(1);
      scrollTestimonialForward();
    } else {
      setActiveItem(activeItem + 1);
      scrollTestimonialForward();
    }
  };

  const handlePrevBtnClick = () => {
    if (activeItem === 1) {
      setActiveItem(4);
      scrollTestimonialBackward();
    } else {
      setActiveItem(activeItem - 1);
      scrollTestimonialBackward();
    }
  };

  const testimonialGroupRef = useRef();
  const cardRef = useRef();

  const scrollTestimonialForward = () => {
    const element = testimonialGroupRef.current;
    const width = cardRef.current.offsetWidth;
    let scrollDistance;

    if (activeItem === 1) {
      scrollDistance = width + 48;
    } else if (activeItem === 2) {
      scrollDistance = width * 2 + 48 * 2;
    } else if (activeItem === 3) {
      scrollDistance = width * 3 + 48 * 3;
    } else if (activeItem === 4) {
      scrollDistance = 0;
    } else {
      return;
    }

    element.scroll({
      left: `${scrollDistance}`,
      behavior: "smooth",
    });
  };

  const scrollTestimonialBackward = () => {
    const element = testimonialGroupRef.current;
    const width = cardRef.current.offsetWidth;
    let scrollDistance;

    if (activeItem === 1) {
      scrollDistance = width * 3 + 48 * 3;
    } else if (activeItem === 2) {
      scrollDistance = 0;
    } else if (activeItem === 3) {
      scrollDistance = width + 48;
    } else if (activeItem === 4) {
      scrollDistance = width * 2 + 48 * 2;
    } else {
      return;
    }

    element.scroll({
      left: `${scrollDistance}`,
      behavior: "smooth",
    });
  };
  const testimonalData = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      intro:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems LaslesVPN always the best",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, Chin",
      intro:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      intro:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
  ];
  return (
    <StyledTestimonialSection>
      <SectionHeadingBox>
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </SectionHeadingBox>
      <TestimonialGroupContainer ref={testimonialGroupRef}>
        <SingleTestimonialCard isCardActive={activeItem === 1} ref={cardRef}>
          <TestimonalCard
            name={testimonalData[0].name}
            location={testimonalData[0].location}
            intro={testimonalData[0].intro}
            image={viezhRobertImg}
          />
        </SingleTestimonialCard>
        <SingleTestimonialCard isCardActive={activeItem === 2}>
          <TestimonalCard
            name={testimonalData[1].name}
            location={testimonalData[1].location}
            intro={testimonalData[1].intro}
            image={yessicaChristyImg}
          />
        </SingleTestimonialCard>
        <SingleTestimonialCard isCardActive={activeItem === 3}>
          <TestimonalCard
            name={testimonalData[2].name}
            location={testimonalData[2].location}
            intro={testimonalData[2].intro}
            image={kimYoungJouImg}
          />
        </SingleTestimonialCard>
        <SingleTestimonialCard isCardActive={activeItem === 4}>
          <TestimonalCard
            name={testimonalData[1].name}
            location={testimonalData[1].location}
            intro={testimonalData[1].intro}
            image={yessicaChristyImg}
          />
        </SingleTestimonialCard>
      </TestimonialGroupContainer>

      <IndicatorAndNavContainer>
        <IndicatorsContainer>
          <span data-active-indicator={activeItem === 1 && "true"}></span>
          <span data-active-indicator={activeItem === 2 && "true"}></span>
          <span data-active-indicator={activeItem === 3 && "true"}></span>
          <span data-active-indicator={activeItem === 4 && "true"}></span>
        </IndicatorsContainer>
        <TestimonialNavContainer>
          <button onClick={handlePrevBtnClick} className="prevBtn">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
              <path
                d="M23.75 14.0029H8.925L13.4625 8.55291C13.6747 8.29764 13.7768 7.96854 13.7463 7.638C13.7158 7.30747 13.5553 7.00258 13.3 6.79041C13.0447 6.57823 12.7156 6.47616 12.3851 6.50663C12.0546 6.53711 11.7497 6.69764 11.5375 6.95291L5.2875 14.4529C5.24545 14.5126 5.20785 14.5752 5.175 14.6404C5.175 14.7029 5.175 14.7404 5.0875 14.8029C5.03084 14.9462 5.00118 15.0988 5 15.2529C5.00118 15.407 5.03084 15.5596 5.0875 15.7029C5.0875 15.7654 5.0875 15.8029 5.175 15.8654C5.20785 15.9306 5.24545 15.9933 5.2875 16.0529L11.5375 23.5529C11.655 23.694 11.8022 23.8075 11.9686 23.8853C12.1349 23.963 12.3164 24.0032 12.5 24.0029C12.7921 24.0035 13.0751 23.9018 13.3 23.7154C13.4266 23.6105 13.5312 23.4816 13.6079 23.3362C13.6846 23.1907 13.7318 23.0316 13.7469 22.8679C13.762 22.7042 13.7447 22.5391 13.6959 22.3821C13.6471 22.2251 13.5678 22.0792 13.4625 21.9529L8.925 16.5029H23.75C24.0815 16.5029 24.3995 16.3712 24.6339 16.1368C24.8683 15.9024 25 15.5844 25 15.2529C25 14.9214 24.8683 14.6034 24.6339 14.369C24.3995 14.1346 24.0815 14.0029 23.75 14.0029Z"
                fill="#F53838"
              />
            </svg>
          </button>
          <button onClick={handleNextBtnClick} className="nextBtn">
            <svg width="30" height="31" viewBox="0 0 30 31" fill="#F53838">
              <path
                d="M6.25 14.0029H21.075L16.5375 8.55291C16.3253 8.29764 16.2232 7.96854 16.2537 7.638C16.2842 7.30747 16.4447 7.00258 16.7 6.79041C16.9553 6.57823 17.2844 6.47616 17.6149 6.50663C17.9454 6.53711 18.2503 6.69764 18.4625 6.95291L24.7125 14.4529C24.7545 14.5126 24.7922 14.5752 24.825 14.6404C24.825 14.7029 24.825 14.7404 24.9125 14.8029C24.9692 14.9462 24.9988 15.0988 25 15.2529C24.9988 15.407 24.9692 15.5596 24.9125 15.7029C24.9125 15.7654 24.9125 15.8029 24.825 15.8654C24.7922 15.9306 24.7545 15.9933 24.7125 16.0529L18.4625 23.5529C18.345 23.694 18.1978 23.8075 18.0314 23.8853C17.8651 23.963 17.6836 24.0032 17.5 24.0029C17.2079 24.0035 16.9249 23.9018 16.7 23.7154C16.5734 23.6105 16.4688 23.4816 16.3921 23.3362C16.3154 23.1907 16.2682 23.0316 16.2531 22.8679C16.238 22.7042 16.2553 22.5391 16.3041 22.3821C16.3529 22.2251 16.4322 22.0792 16.5375 21.9529L21.075 16.5029H6.25C5.91848 16.5029 5.60054 16.3712 5.36612 16.1368C5.13169 15.9024 5 15.5844 5 15.2529C5 14.9214 5.13169 14.6034 5.36612 14.369C5.60054 14.1346 5.91848 14.0029 6.25 14.0029Z"
                fill="#F53838"
              />
            </svg>
          </button>
        </TestimonialNavContainer>
      </IndicatorAndNavContainer>
    </StyledTestimonialSection>
  );

  function TestimonalCard(props) {
    return (
      <>
        <TestimonialCardTop>
          <div className="testimonialNameAndImg">
            <img src={props.image} alt="Viezh Robert" />
            <div className="testimonialNameAndLocation">
              <span className="testimonialName">{props.name}</span>
              <span className="testimonialLocation">{props.location}</span>
            </div>
          </div>
          <div className="ratings">
            <span>4.5</span>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                d="M14.1891 6.41802L10.2219 5.84146L8.44847 2.24615C8.40003 2.14771 8.32034 2.06802 8.2219 2.01959C7.97503 1.89771 7.67503 1.99927 7.55159 2.24615L5.77815 5.84146L1.81097 6.41802C1.70159 6.43365 1.60159 6.48521 1.52503 6.56334C1.43247 6.65847 1.38146 6.78646 1.38322 6.91918C1.38498 7.0519 1.43936 7.1785 1.5344 7.27115L4.40472 10.0696L3.72659 14.0211C3.71069 14.1131 3.72086 14.2076 3.75595 14.294C3.79105 14.3805 3.84966 14.4554 3.92514 14.5102C4.00062 14.565 4.08995 14.5976 4.183 14.6042C4.27605 14.6108 4.3691 14.5913 4.45159 14.5477L8.00003 12.6821L11.5485 14.5477C11.6453 14.5993 11.7578 14.6165 11.8657 14.5977C12.1375 14.5508 12.3203 14.293 12.2735 14.0211L11.5953 10.0696L14.4657 7.27115C14.5438 7.19459 14.5953 7.09459 14.611 6.98521C14.6532 6.71177 14.4625 6.45865 14.1891 6.41802Z"
                fill="#FEA250"
              />
            </svg>
          </div>
        </TestimonialCardTop>
        <p className="testimonialRemarks">{props.intro}</p>
      </>
    );
  }
}
