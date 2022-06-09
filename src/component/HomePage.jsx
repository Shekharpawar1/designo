import Card from "./Card";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "./Grid";
import "./HomePage.css";
import Footer from "./Footer";

function HomePage() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <div className="homepage">
      <div className="homepage__heroSection">
        <h1 className="homepage__heroSection--title">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="hompage__heroSection--description">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our Services.
        </p>
        <button
          className="homepage__heroSection--button"
          type="submit"
          onClick={() => navigate("/about")}
        >
          LEARN MORE
        </button>
        <img
          src="https://designo-software-agency.vercel.app/static/media/desktop-hero-image.c63e6d07.png"
          alt="website screenshot"
        />
      </div>
      <div className="homepage__card">
        <div
          className="homepage__card--web"
          onClick={() => navigate("/web-design")}
          style={{
            backgroundImage:
              width >= 1080
                ? "url(./assets/images/home/desktop/image-web-design-small.jpg)"
                : width >= 768
                ? "url(./assets/images/home/tablet/image-web-design.jpg)"
                : "url(./assets/images/home/mobile/image-web-design.jpg)",
            height: "13rem",
            width: "20rem",
            objectFit: "contain",
          }}
        >
          <h2>WEB DESIGN</h2>
          <p className="homepage__card--link">
            VIEW PROJECTS
            <i
              class="fa fa-chevron-right"
              style={{ color: "red", margin: "0 .5rem" }}
            ></i>
          </p>
        </div>
        <div
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
            width: "20rem",
            objectFit: "contain",
          }}
        >
          <h2>APP DESIGN</h2>
          <p className="homepage__card--link">
            VIEW PROJECTS
            <i
              class="fa fa-chevron-right"
              style={{ color: "red", margin: "0 .5rem" }}
            ></i>
          </p>
        </div>
        <div
          className="homepage__card--graphic"
          style={{
            backgroundImage:
              width >= 1080
                ? "url(./assets/images/home/desktop/image-graphic-design-small.jpg)"
                : width >= 768
                ? "url(./assets/images/home/tablet/image-graphic-design.jpg)"
                : "url(./assets/images/home/mobile/image-graphic-design.jpg)",
            height: "13rem",
            width: "20rem",
            objectFit: "contain",
          }}
          onClick={() => {
            navigate("/graphic-design");
          }}
        >
          <h2>GRAPHIC DESIGN</h2>
          <p className="homepage__card--link">
            VIEW PROJECTS
            <i
              class="fa fa-chevron-right"
              style={{ color: "red", margin: "0 .5rem" }}
            ></i>
          </p>
        </div>
      </div>
      <Grid />
      <Card
        style={{ transform: "translateY(10rem)" }}
        title="Let's talk about your project"
        description=" Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow."
      />
      <Footer />
    </div>
  );
}

export default HomePage;
