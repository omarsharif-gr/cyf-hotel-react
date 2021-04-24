import React from "react";
const Footer = prop => {
  return (
    <ul>
      {prop.details.map((details, index) => (
        <li key={index}>{details}</li>
      ))}
    </ul>
  );
};
export default Footer;
