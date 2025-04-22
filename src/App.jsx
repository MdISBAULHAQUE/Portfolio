import Nav from "./component/Nav/Nav";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Contact from "./component/contact/Contact";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;
