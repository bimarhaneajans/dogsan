import React from "react";

const Section = ({ children }) => {
  return (
    <section
      style={{
        margin: "20px 0 20px 0"
      }}
    >
      {children}
    </section>
  );
};

export default Section;
