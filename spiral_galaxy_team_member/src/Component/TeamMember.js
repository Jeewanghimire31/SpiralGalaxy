import React from 'react'
import Team from './Team'

import person from "../data/person";


const TeamMember = (props) => {
  const {content} = props;
  return (
    <div >
      <p className="title_page">{content}</p>
      <div className="container_Box">
        {person.map(element=><Team person={element}/>)} 
        </div>   
    </div>
  )
}

export default TeamMember