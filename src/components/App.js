import React from "react";
import '../styles/App.css';

const App = () => {
   const projects = [
    { name: "AI Personal Assistant", description: "An AI-powered virtual assistant that helps with scheduling, tasks, and recommendations." },
    { name: "E-commerce Platform", description: "A fully functional online marketplace with payment integration and product management." },
    { name: "Fitness Tracking App", description: "A mobile app that tracks workouts, nutrition, and provides personalized fitness plans." }
  ];
  return (
    <div id="main">
       {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  )
}


export default App;
