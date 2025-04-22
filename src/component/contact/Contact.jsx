import React from 'react';
import con from "../../../picture/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className="left">
        <img src={con} alt="Contact" />
      </div>
      <div className="right">
        <form action="https://formspree.io/f/mzzevdkz" method='POST'>
          <input name="username" type="text" placeholder='Name'/>
          <input name="Email" type="email" placeholder='Email'/>
          <textarea name='message' id="textarea" placeholder='message me'></textarea>
          <input type="Submit" id="btn" value="Submit"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
