import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "./Banner.css";

export default function Banner() {
  return (
    <div>
      <CCarousel className="CCarousel">
        <CCarouselItem>
          <CImage
            className="d-block w-100 imgHgt"
            src="https://www.teahub.io/photos/full/27-279596_awesome-early-morning-beautiful-village-wllpaper-4k-village.jpg"
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100 imgHgt"
            src="https://www.keralatourism.org/images/hri/large/cattle_being_herded_58.jpg"
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100 imgHgt"
            src="https://hummingbird.travel/wp-content/uploads/2019/01/Canoe.jpg"
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
      <center className="center">
        <h1>Village Data Management System</h1>
      </center>
    </div>
  );
}
