import React, { useEffect } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { About, Blog, Choose, Header, Testimonials } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Choose />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
