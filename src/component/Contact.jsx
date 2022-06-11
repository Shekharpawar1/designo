import React from "react";
import Card from "./Card";
import Footer from "./Footer";

import Location from "./Location";

function Contact() {
  return (
    <div
      className="contact"
      style={{
        backgroundImage:
          "url(./assets/images/web-design/desktop/bg-pattern-intro.svg)",
      }}
    >
      <div className="contact__card">
        <Card
          title="Contact Us"
          description="Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
          visible
        />

        <Location />
        <Footer style={{ marginTop: "2rem" }} />
      </div>
    </div>
  );
}

export default Contact;
