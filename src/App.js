import Contact from "layouts/Contact/Contact";
import Footer from "layouts/Footer/Footer";
import "./App.css";
import Hero from "./layouts/Hero/Hero";
import WhatWeHave from "./layouts/WhatWeHave/WhatWeHave";

function App() {
  return (
    <div>
      <Hero />
      <WhatWeHave />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
