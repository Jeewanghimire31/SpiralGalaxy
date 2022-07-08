import React from "react";


const Team = (props) => {
  const {person}=props;
  return (
    <div className="container">
      <div className="container__content">
        <div className="img_name">
        <img src={person.photo} alt="image" className="picture" />
        <p className="name"> {person.pName}</p>
        </div>
        
        <span className="badge">{person.position}</span>
        <p className="detail">{person.details}</p>
        <p className="education"><span>Education: </span>{person.education}</p></div>
      </div>
  );
};



export default Team;
