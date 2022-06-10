import React from "react";
import { useState } from "react";
import AboutCard from "./AboutCard";
import Card from "./Card";
import "./Card.css";
import Footer from "./Footer";
import Location from "./Location";

function About() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return (
    <div className="about">
      <AboutCard
        style={{
          backgroundColor: "hsl(11,73%,66%)",
          color: "hsl(210,17%,95%)",
        }}
        src={
          width >= 1080
            ? "./assets/images/about/desktop/image-about-hero.jpg"
            : width >= 768
            ? "./assets/images/about/tablet/image-about-hero.jpg"
            : "./assets/images/about/mobile/image-about-hero.jpg"
        }
        title="About Us"
        p={{ color: " white " }}
        description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We've
    partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're
    always looking forward to creating brands, products, and digital experiences that connect with our clients'
    audiences."
      />
      <AboutCard
        style={{
          backgroundColor: "rgb(253, 243, 240)",
          color: "hsl(11,73%,66%)",
        }}
        src={
          width >= 1080
            ? "./assets/images/about/desktop/image-world-class-talent.jpg"
            : width >= 768
            ? "./assets/images/about/tablet/image-world-class-talent.jpg"
            : "./assets/images/about/mobile/image-world-class-talent.jpg"
        }
        title="World-class Talent"
        description="We are a crew of strategists, problem-solvers, and technologists.
      Every design is thoughtfully crafted from concept to launch, ensuring success in its given market.
      We are constantly updating our skills in a myriad of platforms."
        desc="Our team is multi-disciplinary and we are not merely interested in form - content
      and meaning are just as important. We give great importance to craftsmanship, service and prompt delivery.
      Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and
      mission."
      />
      <Location />
      <AboutCard
        style={{
          backgroundColor: "rgb(253, 243, 240)",
          color: "hsl(11,73%,66%)",
        }}
        src={
          width >= 1080
            ? "./assets/images/about/desktop/image-real-deal.jpg"
            : width >= 768
            ? "./assets/images/about/tablet/image-real-deal.jpg"
            : "./assets/images/about/mobile/image-real-deal.jpg"
        }
        title="The real deal"
        description="As strategic partners in our clients' businesses, we are ready 
        to take on any challenge as our own. Solving real problems require empathy and collaboration,
        and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible
        and give you tools to measure success."
        desc="we are visual storytellers in appealing and captiviting ways.
        By combining business and marketing strategies, we inspire audiences to take 
        action and drive real results."
      />
      <Card
        style={{ transform: "translateY(10rem)" }}
        title="Let's talk about your project"
        description=" Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow."
        form
      />
      <Footer />
    </div>
  );
}

export default About;
