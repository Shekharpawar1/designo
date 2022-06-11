import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
import HomePageCard from "./HomePageCard";
import "./Card.css";

function AppDesign() {
  const navigate = useNavigate();
  const [width, setWidth] = useState();
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <Card
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        visible
        form
        style={{
          backgroundImage:
            "url(./assets/images/web-design/desktop/bg-pattern-intro-web.svg)",
        }}
      />
      <div className="appdesign">
        <div>
          <img
            className="appdesign__img"
            src="./assets/images/app-design/desktop/image-airfilter.jpg"
            alt="Air filter screenshot"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />

          <Card
            style={{
              width: "100%",
              borderRadius: 0,
            }}
            title="AIRFILTER"
            description="Solving the problem of poor indoor air quality by filtering the air "
            visible
            form
          />
        </div>

        <div>
          <img
            className="appdesign__img"
            src="./assets/images/app-design/desktop/image-eyecam.jpg"
            alt="EYECAM screenshot"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />

          <Card
            title="EYECAM"
            description="Product that lets you edit your favorite photos and videos at any time "
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
            className="appdesign__img"
            src="./assets/images/app-design/desktop/image-faceit.jpg"
            alt="faceit  App screenshot"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />

          <Card
            title="FACEIT "
            description="Get to meet your favorite nternet superstar with the faceit app  "
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
            className="appdesign__img"
            src="./assets/images/app-design/desktop/image-loopstudios.jpg"
            alt="LOOPSTUDIOS  App screenshot"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />

          <Card
            title="LOOPSTUDIOS "
            description="A VR experience app made for Loopstudios"
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
            className="appdesign__img"
            src="./assets/images/app-design/desktop/image-todo.jpg"
            alt="TODO  App screenshot"
            style={{
              transform: "translateY(2.4rem)",
            }}
          />

          <Card
            title="TODO "
            description="A todo app that features cloud sync with light and dark mode "
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

export default AppDesign;
