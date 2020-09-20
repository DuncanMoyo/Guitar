import React from "react";
import MyButton from "../utils/Button";
import FeaturedHome3 from "../../images/featured/featured_home_3.jpg";

const HomePromotion = (props) => {
  const promotion = {
    img: FeaturedHome3,
    lineOne: "Up to 40% off",
    lineTwo: "On second-hand guitars",
    linkTitle: "Shop Now",
    linkTo: "/shop",
  };

  const {img, lineOne, lineTwo, linkTitle, linkTo} = promotion

  const renderPromotion = () =>
    promotion ? (
      <div
        className="home_promotion_img"
        style={{
          background: `url(${img})`,
        }}
      >
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
    ) : null;

  return <div className="home_promotion">{renderPromotion()}</div>;
};

export default HomePromotion;
