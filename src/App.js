import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ProjectKamban from './Project/ProjectKamban'; 
import Projects from './Project/Projects';
//import Projects from './Project/Projects';

function App() {

  return (
    <div className="App">
      <header className="App-header">

      <Projects>
        <ProjectKamban 
          nome="Fortuna"
          idProj="PGCO"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=5&projectKey=PGCO" 
          />
        <ProjectKamban
          nome="Novo Nome"
          idProj="GeoCad"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=102&projectKey=PG"
         />
        <ProjectKamban
          nome="Novo Nome"
          idProj="SAD"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=8&projectKey=SAD"
         />
         <ProjectKamban
          nome="Novo Nome"
          idProj="treino"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=99&projectKey=EI"
         />
      </Projects>
          

      </header>
    </div>
  );
}

export default App;
