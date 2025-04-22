import React from 'react'
import "./About.css"
import Card from '../card/Card'
import mern from "../../../picture/mern.png"
import java from "../../../picture/java.png"
import dsa from "../../../picture/dsa.png"
const About = () => {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : MD ISBAUL HAQUE 
              </li>
              <li>
                <span>AGE</span> : 22
              </li>
              <li>
                <span>GENDER</span> : MALE 
              </li>
              <li>
                <span>LANGUAGE</span> : BENGALI ,  ENGLISH ,HINDI
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B-TECH 
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 8.5
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                MERN STACK WEB DEVELOPER
              </li>
              <li>
                DSA
              </li>
              <li>
                JAVA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
        <Card title="JAVA" image={java}/>
        <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About