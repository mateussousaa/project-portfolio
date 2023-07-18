import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../data/projects";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-slide div {
    margin-top: 24px;
    outline: none;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;

const SlideContainer = styled.a`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-decoration: none;
  color: #ffffff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0468bf2f; /* Mudar a cor de fundo ao passar o mouse */
  }
`;

const SlideImage = styled.img`
  max-width: 80%;
  max-height: 300px;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider {...settings}>
      {projects.map((p) => (
        <div data-index={p.id} key={p.id}>
          <SlideContainer href={p.link} target="_blank" rel="noopener noreferrer">
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <SlideImage src={p.img} alt={p.description} />
          </SlideContainer>
        </div>
      ))}
    </StyledSlider>
  );
};

export default Carousel;
