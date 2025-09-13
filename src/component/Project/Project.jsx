import React from "react";
import "./Project.css";
import Card from "../card/Card";
import aiweb from "../../../picture/fw.png";
import va from "../../../picture/va.png";
import tti from "../../../picture/tti.png";
import m from "../../../picture/medical.jpeg";
import task from "../../../picture/pic-banner.webp";

const Project = () => {
  return (
    <div id="project">
      <div className="slider">
        <Card title="MediConnect" image={m} />
        <Card title="Task-flow" image={task} />
        <Card
          title="AI Assistant"
          image={va}
          onClick={() => window.open("https://zita-ai.netlify.app/", "_blank")}
        />
        <Card title=" AI Text To Images" image={tti} onClick={() => window.open('https://textureai.netlify.app/', '_blank')} />
      </div>
    </div>
  );
};

export default Project;
