import blendersetupImg from "../assets/blendersetup.png";
import boekenzoekerImg from "../assets/boekenzoeker.png";
import esotsmImg from "../assets/esotsm.jpg";
import gameboxdImg from "../assets/gameboxd.png";
import gamescoutImg from "../assets/gamescout.png";
import onyxImg from "../assets/onyx.png";
import portfolio1Img from "../assets/portfolio1.png";
import portfolio2Img from "../assets/Portfolio2.png";
import rhythmrainImg from "../assets/rhythmrain.png";
import userjourneyImg from "../assets/userjourney.png";
import whackamoleImg from "../assets/whackamole.png";

export interface Project {
   title: string;
   image: string;
   badge: string;
   desc: string;
   categories: string[];
   link: string;
}

export const projects: Project[] = [
   {
      title: "De Boekenzoeker",
      image: boekenzoekerImg,
      badge: "CMD - 2024",
      desc: "(mock) Assignment for the Municipality of Amsterdam and OBA (Amsterdam Public Library)",
      categories: ["UI"],
      link: "/projects/boekenzoeker/boekenzoeker.html",
   },
   {
      title: "Gameboxd",
      image: gameboxdImg,
      badge: "CMD - 2024",
      desc: "Interface ontworpen voor een sociale media app gericht op games",
      categories: ["UI"],
      link: "/projects/gameboxd/gameboxd.html",
   },
   {
      title: "User Journey / Persona",
      image: userjourneyImg,
      badge: "CMD - 2024",
      desc: "UX methode om gebruikersinzichten te verzamelen",
      categories: ["UX"],
      link: "/projects/userjourney/userjourney.html",
   },
   {
      title: "Whack-A-Mole",
      image: whackamoleImg,
      badge: "CMD - 2024",
      desc: "Simple browser game to learn the basics of Javascript. I made a Whack-A-Mole game",
      categories: ["CODE"],
      link: "/projects/whack-a-mole/whack-a-mole.html",
   },
   {
      title: "Personal Projects",
      image: esotsmImg,
      badge: "ongoing",
      desc: "Personal projects I've worked on, such as posters",
      categories: ["UI", "UX", "CODE"],
      link: "/projects/personalprojects/personalprojects.html",
   },
   {
      title: "Rhythm Rain",
      image: rhythmrainImg,
      badge: "CMD - 2025",
      desc: "Designed an Interface for an imaginary app about syncing weather in-game with real-life weather",
      categories: ["UI", "CODE"],
      link: "/projects/rhythmrain/rhythmrain.html",
   },
   {
      title: "ONYX",
      image: onyxImg,
      badge: "Internship - 2025",
      desc: "Collaborated on ONYX, an app for education that helps stimulate personal growth",
      categories: ["UI", "UX", "CODE"],
      link: "/projects/onyx/onyx.html",
   },
   {
      title: "Gamescout",
      image: gamescoutImg,
      badge: "CMD - 2025",
      desc: "I chose the direction of Tech for my Specialisation Project. We ended up making a full fledged web-app for discovering games",
      categories: ["CODE"],
      link: "/projects/gamescout/gamescout.html",
   },
   {
      title: "3D - Blender",
      image: blendersetupImg,
      badge: "CMD - 2025",
      desc: "3D Objects/Scenes I've (re)created to increase my Blender Skills",
      categories: [],
      link: "/projects/blender/blender.html",
   },
   {
      title: "Portfolio v1",
      image: portfolio1Img,
      badge: "2024",
      desc: "This is my first portfolio, it was made using Framer.",
      categories: ["UI"],
      link: "/projects/portfolioV1/portfolioV1.html",
   },
   {
      title: "Portfolio v2",
      image: portfolio2Img,
      badge: "2025",
      desc: "The portfolio I am currently working on. Built with Tailwindcss, Typescript, DaisyUI, Swiper.js & List.js",
      categories: ["CODE"],
      link: "/projects/portfolioV2/portfolioV2.html",
   },
];
