import React from "react";
import "./Project.css";
import Card from "../card/Card";
import aiweb from "../../../picture/fw.png";
import va from "../../../picture/va.png";
import tti from "../../../picture/tti.png";

const Project = () => {
  return (
    <div id="project">
      <div className="slider">
        <Card title="Ai Powered Fitness Web" image={aiweb} />
        <Card title="AI Assistant" image={va} />
        <Card title=" AI Text To Images" image={tti} />
      </div>
    </div>
  );
};

export default Project;
