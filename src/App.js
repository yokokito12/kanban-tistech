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
          idProj="portal"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=81&projectKey=PG&selectedIssue=PG-26" 
          />
        <ProjectKamban
          nome="Novo Nome"
          idProj="pagafacil"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=72&projectKey=PAGF"
         />
        <ProjectKamban
          nome="Novo Nome"
          idProj="sgp"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=94&projectKey=SGP"
         />
         <ProjectKamban
          nome="Novo Nome"
          idProj="treino"
          kanbanPath="http://jiratis.northeurope.cloudapp.azure.com:8080/secure/RapidBoard.jspa?rapidView=99&projectKey=EI&view=detail&selectedIssue=EI-17"
         />
      </Projects>
          

      </header>
    </div>
  );
}

export default App;
