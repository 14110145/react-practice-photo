import React from "react";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

function MainPage(props) {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={Images.PINK_BG} />
    </div>
  );
}
export default MainPage;
