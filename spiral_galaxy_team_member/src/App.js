import React from 'react';
// import Team from "./Component/Team"
import "./assets/sass/main.scss"
import TeamMember from './Component/TeamMember';

const App = () => {
  return (
    <div>
        <TeamMember content="Advisory"/>
        <TeamMember content="TeamMember"/>
        <TeamMember content="Experience"/>
        <TeamMember content="mission"/>
    </div>
  )
}

export default App;