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
   id: string;
   title: string;
   coverimage: string;
   images: string[];
   badge: string;
   desc: string;
   detaileddesc: string;
   categories: string[];
}

export const projects: Project[] = [
   {
      id: "boekenzoeker",
      title: "De Boekenzoeker",
      coverimage: boekenzoekerImg,
      images: [],
      badge: "CMD - 2024",
      desc: "(mock) Assignment for the Municipality of Amsterdam and OBA (Amsterdam Public Library)",
      detaileddesc: " banana ",
      categories: ["UI"],
   },
   {
      id: "gameboxd",
      title: "Gameboxd",
      coverimage: gameboxdImg,
      images: [],
      badge: "CMD - 2024",
      desc: "Interface ontworpen voor een sociale media app gericht op games",
      detaileddesc: " banana ",
      categories: ["UI"],
   },
   {
      id: "userjourney",
      title: "User Journey / Persona",
      coverimage: userjourneyImg,
      images: [],
      badge: "CMD - 2024",
      desc: "UX methode om gebruikersinzichten te verzamelen",
      detaileddesc: " banana ",
      categories: ["UX"],
   },
   {
      id: "whackamole",
      title: "Whack-A-Mole",
      coverimage: whackamoleImg,
      images: [],
      badge: "CMD - 2024",
      desc: "Simple browser game to learn the basics of Javascript. I made a Whack-A-Mole game",
      detaileddesc: " banana ",
      categories: ["CODE"],
   },
   {
      id: "personalprojects",
      title: "Personal Projects",
      coverimage: esotsmImg,
      images: [],
      badge: "ongoing",
      desc: "Personal projects I've worked on, such as posters",
      detaileddesc: " banana ",
      categories: ["UI", "UX", "CODE"],
   },
   {
      id: "rhythmrain",
      title: "Rhythm Rain",
      coverimage: rhythmrainImg,
      images: [],
      badge: "CMD - 2025",
      desc: "Designed an Interface for an imaginary app about syncing weather in-game with real-life weather",
      detaileddesc: " banana ",
      categories: ["UI", "CODE"],
   },
   {
      id: "onyx",
      title: "ONYX",
      coverimage: onyxImg,
      images: [],
      badge: "Internship - 2025",
      desc: "Collaborated on ONYX, an app for education that helps stimulate personal growth",
      detaileddesc: " banana ",
      categories: ["UI", "UX", "CODE"],
   },
   {
      id: "gamescout",
      title: "Gamescout",
      coverimage: gamescoutImg,
      images: [],
      badge: "CMD - 2025",
      desc: "I chose the direction of Tech for my Specialisation Project. We ended up making a full fledged web-app for discovering games",
      detaileddesc: " banana ",
      categories: ["CODE"],
   },
   {
      id: "blender",
      title: "3D - Blender",
      coverimage: blendersetupImg,
      images: [],
      badge: "CMD - 2025",
      desc: "3D Objects/Scenes I've (re)created to increase my Blender Skills",
      detaileddesc: " banana ",
      categories: [],
   },
   {
      id: "portfolio1",
      title: "Portfolio v1",
      coverimage: portfolio1Img,
      images: [],
      badge: "2024",
      desc: "This is my first portfolio, it was made using Framer.",
      detaileddesc: " banana ",
      categories: ["UI"],
   },
   {
      id: "portfolio2",
      title: "Portfolio v2",
      coverimage: portfolio2Img,
      images: [],
      badge: "2025",
      desc: "The portfolio I am currently working on. Built with Tailwindcss, Typescript, DaisyUI, Swiper.js & List.js",
      detaileddesc: " banana ",
      categories: ["CODE"],
   },
];
