import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./Card.css";

import Footer from "./Footer";
import HomePageCard from "./HomePageCard";

function WebDesign() {
  const [width, setWidth] = useState();
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  const navigate = useNavigate();
  return (
    <>
      <Card
        title="web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand exprerience"
        visible
        form
        style={{
          width: "72rem",
          backgroundImage:
            "url(./assets/images/web-design/desktop/bg-pattern-intro-web.svg)",
        }}
      />
      <div className="webdesign">
        <div>
          <img
            style={{
              transform: "translateY(2.4rem)",
            }}
            src="./assets/images/web-design/desktop/image-express.jpg"
            alt="express website screenshot"
            width="100%"
          />

          <Card
            title="EXPRESS"
            description="A multi-carrier shipping website for ecommerce business"
            visible
            form
            style={{
              width: "100%",
              borderRadius: 0,
            }}
          />
        </div>
        <div>
          <img
            style={{
              transform: "translateY(2.4rem)",
            }}
            width="100%"
            src="./assets/images/web-design/desktop/image-photon.jpg"
            alt="express website screenshot"
          />

          <Card
            title="PHOTON"
            description="A state-of-art music player with high-resolution audio and DSP effect"
            visible
            form
            style={{
              width: "100%",
              borderRadius: 0,
            }}
          />
        </div>
        <div>
          <img
            style={{
              transform: "translateY(2.4rem)",
            }}
            width="100%"
            src="./assets/images/web-design/desktop/image-transfer.jpg"
            alt="express website screenshot"
          />

          <Card
            title="TRANSFER"
            description="Site for low-cost money transfers and sending money withing seconds"
            visible
            form
            style={{
              width: "100%",
              borderRadius: 0,
            }}
          />
        </div>

        <div>
          <img
            style={{
              transform: "translateY(2.4rem)",
            }}
            width="100%"
            src="./assets/images/web-design/desktop/image-camp.jpg"
            alt="express website screenshot"
          />

          <Card
            title="CAMP "
            description="Get expert training in coding, data, design and digital marketing"
            visible
            form
            style={{
              width: "100%",
              borderRadius: 0,
            }}
          />
        </div>
        <div>
          <img
            style={{
              transform: "translateY(2.4rem)",
            }}
            width="100%"
            src="./assets/images/web-design/desktop/image-builder.jpg"
            alt="express website screenshot"
          />

          <Card
            style={{
              width: "100%",
              borderRadius: 0,
            }}
            title="BUILDER "
            description="Connects users with local contractors based on their location"
            visible
            form
          />
        </div>

        <div>
          <img
            style={{
              transform: "translateY(2.4rem)",
            }}
            width="100%"
            src="./assets/images/web-design/desktop/image-blogr.jpg"
            alt="express website screenshot"
          />

          <Card
            style={{
              width: "100%",
              borderRadius: 0,
            }}
            title="BLOGR"
            description="Blogr is a platform for creating an online blog or publication"
            visible
            form
          />
        </div>
      </div>

      <div className="homepage__card">
        <HomePageCard
          className="homepage__card--app"
          onClick={() => {
            navigate("/app-design");
          }}
          style={{
            backgroundImage:
              width >= 1080
                ? "url(./assets/images/home/desktop/image-app-design-small.jpg)"
                : width >= 768
                ? "url(./assets/images/home/tablet/image-app-design.jpg)"
                : "url(./assets/images/home/mobile/image-app-design.jpg)",
            height: "13rem",

            objectFit: "contain",
          }}
          title="APP DESIGN"
        />
        <HomePageCard
          className="homepage__card--graphic"
          style={{
            backgroundImage:
              width >= 1080
                ? "url(./assets/images/home/desktop/image-graphic-design-small.jpg)"
                : width >= 768
                ? "url(./assets/images/home/tablet/image-graphic-design.jpg)"
                : "url(./assets/images/home/mobile/image-graphic-design.jpg)",
            height: "13rem",

            objectFit: "contain",
          }}
          onClick={() => {
            navigate("/graphic-design");
          }}
          title="GRAPHIC DESIGN"
        />
      </div>
      <Card
        style={{ transform: "translateY(10rem)" }}
        title="Let's talk about your project"
        description=" Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow."
        form
      />
      <Footer />
    </>
  );
}

export default WebDesign;
