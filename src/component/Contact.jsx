import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Location from "./Location";

function Contact() {
  const hidden = false;
  return (
    <div className="contact">
      <div className="contact__card">
        <Card
          title="Contact Us"
          style={{ width: "100%", borderRadius: "0" }}
          description="Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line."
          visibility={hidden}
        />
        <Location />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
