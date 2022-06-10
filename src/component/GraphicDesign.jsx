import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
import HomePageCard from "./HomePageCard";

function GraphicDesign() {
  const navigate = useNavigate();
  const [width, setWidth] = useState();
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <Card
        title="graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        visible
        form
        style={{
          backgroundImage:
            "url(./assets/images/web-design/desktop/bg-pattern-intro-web.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "Center",
        }}
      />
      <div className="graphicdesign">
        <div>
          {" "}
          <img
            src="./assets/images/graphic-design/desktop/image-change.jpg"
            alt="Change by Tim Brown"
            width="100%"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />
          <Card
            title="TIM BROWN"
            description="A book cover designed for Tim Brown's new release, ''Change'"
            visible
            form
            style={{
              width: "100%",
              borderRadius: 0,
            }}
          />
        </div>
        <div>
          {" "}
          <img
            width="100%"
            src="./assets/images/graphic-design/desktop/image-boxed-water.jpg"
            alt="BOXED WATER cover"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />
          <Card
            title="BOXED WATER"
            description="A simple packaging concept made for Boxed Water"
            visible
            form
            style={{
              width: "100%",
              borderRadius: 0,
            }}
          />
        </div>
        <div>
          {" "}
          <img
            width="100%"
            src="./assets/images/graphic-design/desktop/image-science.jpg"
            alt="SCIENCE book cover"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />
          <Card
            title="SCIENCE"
            description="A simple cover for  new Edition of Science book"
            visible
            form
            style={{
              width: "100%",
              borderRadius: 0,
            }}
          />
        </div>
      </div>
      <div className="homepage__card">
        <HomePageCard
          title="WEB DESIGN"
          desc="VIEW PROJECTS"
          style={{
            backgroundImage:
              width >= 1080
                ? "url(./assets/images/home/desktop/image-web-design-small.jpg)"
                : width >= 768
                ? "url(./assets/images/home/tablet/image-web-design.jpg)"
                : "url(./assets/images/home/mobile/image-web-design.jpg)",
            height: "13rem",

            objectFit: "contain",
          }}
          onClick={() => navigate("/web-design")}
          className="homepage__card--web"
        />
        <HomePageCard
          className="homepage__card--app"
          onClick={() => {
            navigate("/app-design");
          }}
          style={{
            backgroundImage:
              width >= 1080
                ? "url(./assets/images/home/desktop/image-app-design.jpg)"
                : width >= 768
                ? "url(./assets/images/home/tablet/image-app-design.jpg)"
                : "url(./assets/images/home/mobile/image-app-design.jpg)",
            height: "13rem",

            objectFit: "contain",
          }}
          title="APP DESIGN"
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

export default GraphicDesign;
