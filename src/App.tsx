/* -------------------------------------------------------------------------- */
/*                              import statements                             */
/* -------------------------------------------------------------------------- */

// ─── React ───────────────────────────────────────────

import { Routes, Route } from 'react-router'
import { useEffect } from 'react';

// ─── Libraries ───────────────────────────────────────

import AOS from 'aos';
import 'aos/dist/aos.css';

// ─── Pages ───────────────────────────────────────────

import About from './pages/about/about.tsx'
import Home from './pages/home/home.tsx'
import Projects from './pages/projects/projectlist.tsx'
import Project from './pages/projects/project.tsx';

// ─── Components ──────────────────────────────────────

import Nav from './components/nav.tsx'
import Footer from './components/footer.tsx'
import { useThemeSelector } from './typescript/themeselector.ts';
import { backgroundSphere } from './typescript/backgroundsphere.ts';

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                     app                                    */
/* -------------------------------------------------------------------------- */

function App() {

  useThemeSelector();
  backgroundSphere();

  useEffect(() => {
    AOS.init({});
  }, []);


  return (
    <div>
      <canvas id="bg-canvas" className="fixed inset-0 z-[-10] pointer-events-none"></canvas>
      <svg id="background-sphere" className="fixed rounded-full pointer-events-none z-[-10] hidden lg:block text-primary/20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 595.28">
         <defs>
            <radialGradient id="radial-gradient" cx="297.64" cy="297.64" fx="297.64" fy="297.64" r="297.64" gradientUnits="userSpaceOnUse">
               <stop offset="0" stop-color="currentColor" stop-opacity=".5" />
               <stop offset=".46" stop-color="currentColor" stop-opacity=".24" />
               <stop offset=".82" stop-color="currentColor" stop-opacity=".07" />
               <stop offset="1" stop-color="currentColor" stop-opacity="0" />
            </radialGradient>
         </defs>
         <g id="Layer_1-2" data-name="Layer_1">
            <rect className="cls-1" width="1595.28" height="1595.28" />
         </g>
      </svg>
      <Nav />
      <main className="space-y-48">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;