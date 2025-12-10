import Navbar from "./components/navbar.tsx";
import Intro from "./components/Intro.tsx";
import Projects from "./components/Projects.tsx";
import AboutMe from "./components/aboutMe.tsx";
import Skills from "./components/skills.tsx";
import Quote from './components/Quote.tsx';
import Experience from './components/Experience.tsx';
import Contacts from './components/Contact.tsx';
import Wow from './components/wow.tsx';
import Certifications from './components/Certifications.tsx';
import Form from "./components/form.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden">
              <Navbar />
              <Intro />
              <AboutMe />
              <Skills />
              <Projects />
              <Quote />
              <Experience />
              <Certifications />
              <Wow />
              <Contacts />
            </div>
          }
        />

        {/* Form Page */}
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
  );
}
