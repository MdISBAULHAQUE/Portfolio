import React from "react";
import "./Home.css";
import TypingEffect from "react-typing-effect"; // Correct import
import pic from "../../../picture/mpic.jpeg";

const Home = () => {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">MD ISBAUL HAQUE</div>
          <div className="line3">
            <TypingEffect
              text={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR"]}
              speed={100}
              eraseDelay={1000}
              eraseSpeed={50}
              typingDelay={500}
              cursor="|"
            />
          </div>
          <button onClick={() => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}}>
  HIRE ME
</button>

        </div>
      </div>

      <div className="righthome">
        <img src={pic} alt="MD ISBAUL HAQUE" />
      </div>
    </div>
  );
};

export default Home;
