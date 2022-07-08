import React from "react";
import pramesh from "../assets/img/pramesh.JPG";

import { ImQuotesLeft, ImStarEmpty } from "react-icons/im";

const TestimonialCart = (props) => {
  const { person } = props;

  return (
    <div className="testimonial_Box">
      <div className="container">
        <img src={person.photo} alt="Testimonial" className="picture" />
        <p className="name">{person.pName}</p>
        <p className="education">{person.education}</p>
        <p className="detail">
          <span>
            <ImQuotesLeft />
          </span>
          {person.details}
        </p>
        <div className="icon">
          {[0, 1, 2, 3, 4].map(() => {
            return <ImStarEmpty />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCart;
