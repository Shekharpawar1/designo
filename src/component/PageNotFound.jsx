import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pageNotFound" style={{ textAlign: "center" }}>
      <h1
        className="pageNotFound__title"
        style={{
          color: "hsl(11, 73%, 66%)",
          fontSize: "9rem",
          padding: "1rem 0rem .5rem",
        }}
      >
        404
      </h1>
      <p
        className="pageNotFound__desc"
        style={{ padding: "1rem 0rem", fontSize: "1.5rem", color: "#111" }}
      >
        PAGE NOT FOUND!
      </p>
      <p
        className="pageNotFound__link"
        style={{ padding: "1rem 0rem", fontSize: "1.2rem", color: "#111" }}
      >
        Go back to the{" "}
        <NavLink
          to="/"
          style={{ color: "hsl(11, 73%, 66%)", textDecoration: "none" }}
        >
          Homepage
        </NavLink>
      </p>
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

export default PageNotFound;
