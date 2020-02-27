import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import MemberList from './MemberList';

function App() {

  const [team, setTeam] = useState([
    {
        name: 'john',
        email: 'abc@gmail.com',
        role: 'frontend'
    },
    {
        name: 'tim',
        email: '123@gmail.com',
        role: 'backend'
    }
])

const addNewTeamMember = member => {
  const newMember = {
    name: member.name,
    email: member.email,
    role: member.role
  };
  setTeam([...team, newMember]);
};

  return (
    <div className="App">
      <Form addNewTeamMember={addNewTeamMember}/>
      <MemberList team={team}/>
    </div>
  );
}

export default App;
