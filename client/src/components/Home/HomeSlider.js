import React from "react";
import Slider from "react-slick";
import MyButton from "../utils/Button";
import FeaturedHome from "../../images/featured/featured_home.jpg";
import FeaturedHome2 from "../../images/featured/featured_home_2.jpg";

const HomeSlider = (props) => {
  const slides = [
    {
      img: FeaturedHome,
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      linkTitle: "Shop Now",
      linkTo: "/shop",
    },
    {
      img: FeaturedHome2,
      lineOne: "B-stock",
      lineTwo: "Awesome Discounts",
      linkTitle: "View Offers",
      linkTo: "/shop",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
  };

  const generateSlides = () =>
    slides
      ? slides.map(({img, linkTitle, lineOne, lineTwo, linkTo}) => (
          <div key={img}>
            <div
              className="featured_image"
              style={{
                background: `url(${img})`,
                height: `${window.innerHeight}px`,
              }}
            >
              <div className="featured_action">
                <div className="tag title">{lineOne}</div>
                <div className="tag low_title">{lineTwo}</div>
                <div>
                  <MyButton
                    type="default"
                    title={linkTitle}
                    linkTo={linkTo}
                    addStyles={{ margin: "10px 0 0 0" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      : null;

  return (
    <div className="featured_container">
      <Slider {...settings}>{generateSlides()}</Slider>
    </div>
  );
};

export default HomeSlider;
