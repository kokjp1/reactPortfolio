import afterEffectsIcon from "@/assets/icons/logos--adobe-after-effects.svg";
import illustratorIcon from "@/assets/icons/logos--adobe-illustrator.svg";
import photoshopIcon from "@/assets/icons/logos--adobe-photoshop.svg";
import premiereProIcon from "@/assets/icons/logos--adobe-premiere.svg";
import figmaIcon from "@/assets/icons/devicon--figma.svg";
import miroIcon from "@/assets/icons/logos--miro-icon.svg";
import githubIcon from "@/assets/icons/logos--github-icon.svg";
import githubDesktopIcon from "@/assets/icons/Github-desktop-logo-symbol.svg.png";
import htmlCssIcon from "@/assets/icons/htmlcss.svg";
import javascriptIcon from "@/assets/icons/logos--javascript.svg";
import typescriptIcon from "@/assets/icons/devicon--typescript.svg";
import tailwindCssIcon from "@/assets/icons/devicon--tailwindcss.svg";

import blendersetupImg from "../assets/blender/blendersetup.png";
import boekenzoekerImg from "../assets/boekenzoeker/boekenzoeker.png";
import esotsmImg from "../assets/personalprojects/esotsm.jpg";
import gameboxdImg from "../assets/gameboxd/gameboxd.png";
import gamescoutImg from "../assets/gamescout/gamescout.png";
import onyxImg from "../assets/onyx/onyx.png";
import portfolio1Img from "../assets/portfolio1/portfolio1.png";
import portfolio2Img from "../assets/portfolio2/Portfolio2.png";
import rhythmrainImg from "../assets/rhythmrain/rhythmrain.png";
import userjourneyImg from "../assets/userjourney/userjourney.png";
import whackamoleImg from "../assets/whackamole/whackamole.png";

import boekenzoekerHome from "../assets/boekenzoeker/boekenzoeker_home.jpg"
import boekenzoekerWishlist from "../assets/boekenzoeker/boekenzoeker_wishlist.png"
import boekenzoekerForm from "../assets/boekenzoeker/boekenzoeker_form.png"
import boekenzoekerError from "../assets/boekenzoeker/boekenzoeker_error.png"

import gameboxdChats from "../assets/gameboxd/gameboxdchats.jpg";
import gameboxdCollectionJames from "../assets/gameboxd/gameboxdcollectionjames.jpg";
import gameboxdHome from "../assets/gameboxd/gameboxdhome.jpg";
import gameboxdLogin from "../assets/gameboxd/gameboxdlogin.jpg";
import gameboxdProfileJames from "../assets/gameboxd/gameboxdprofilejames.jpg";
import gameboxdReviewsJames from "../assets/gameboxd/gameboxdreviewsjames.jpg";

export interface Project {
   id: string;
   title: string;
   coverimage: string;
   images: string[];
   badge: string;
   desc: string;
   detaileddesc: string;
   categories: string[];
   tools: string[];
   link: string;
   linkidentifier: string;
}

export const projects: Project[] = [
   {
      id: "boekenzoeker",
      title: "De Boekenzoeker",
      coverimage: boekenzoekerImg,
      images: [boekenzoekerHome, boekenzoekerWishlist, boekenzoekerForm, boekenzoekerError],
      badge: "CMD - 2024",
      desc: "(mock) Assignment for the Municipality of Amsterdam and OBA (Amsterdam Public Library)",
      detaileddesc: " Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina.",
      categories: ["UI 🎨"],
      tools: [figmaIcon, htmlCssIcon, javascriptIcon, tailwindCssIcon, premiereProIcon, photoshopIcon, illustratorIcon, afterEffectsIcon, miroIcon, githubIcon, githubDesktopIcon, typescriptIcon],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "gameboxd",
      title: "Gameboxd",
      coverimage: gameboxdImg,
      images: [gameboxdChats, gameboxdCollectionJames, gameboxdHome, gameboxdLogin, gameboxdProfileJames, gameboxdReviewsJames],
      badge: "CMD - 2024",
      desc: "Interface ontworpen voor een sociale media app gericht op games",
      detaileddesc: " Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina. Dit was een project dat ik voor mijn studie (CMD) gedaan heb. Het was een opdracht voor de Gemeente Amsterdam en de OBA (Openbare Bibliotheek Amsterdam). Het doel was om een (mock) website te maken die het zoeken naar boeken vergemakkelijkt. De website bevat een homepagina, een wishlist pagina, een formulier voor het toevoegen van boeken en een error pagina.",
      categories: ["UI 🎨"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "userjourney",
      title: "User Journey / Persona",
      coverimage: userjourneyImg,
      images: [],
      badge: "CMD - 2024",
      desc: "UX methode om gebruikersinzichten te verzamelen",
      detaileddesc: " banana ",
      categories: ["UX 🔎"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "whackamole",
      title: "Whack-A-Mole",
      coverimage: whackamoleImg,
      images: [],
      badge: "CMD - 2024",
      desc: "Simple browser game to learn the basics of Javascript. I made a Whack-A-Mole game",
      detaileddesc: " banana ",
      categories: ["CODE 💻"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "personalprojects",
      title: "Personal Projects",
      coverimage: esotsmImg,
      images: [],
      badge: "ongoing",
      desc: "Personal projects I've worked on, such as posters",
      detaileddesc: " banana ",
      categories: ["UI 🎨", "UX 🔎", "CODE 💻"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "rhythmrain",
      title: "Rhythm Rain",
      coverimage: rhythmrainImg,
      images: [],
      badge: "CMD - 2025",
      desc: "Designed an Interface for an imaginary app about syncing weather in-game with real-life weather",
      detaileddesc: " banana ",
      categories: ["UI 🎨", "CODE 💻"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "onyx",
      title: "ONYX",
      coverimage: onyxImg,
      images: [],
      badge: "Internship - 2025",
      desc: "Collaborated on ONYX, an app for education that helps stimulate personal growth",
      detaileddesc: " banana ",
      categories: ["UI 🎨", "UX 🔎", "CODE 💻"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "gamescout",
      title: "Gamescout",
      coverimage: gamescoutImg,
      images: [],
      badge: "CMD - 2025",
      desc: "I chose the direction of Tech for my Specialisation Project. We ended up making a full fledged web-app for discovering games",
      detaileddesc: " banana ",
      categories: ["CODE 💻"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
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
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "portfolio1",
      title: "Portfolio v1",
      coverimage: portfolio1Img,
      images: [],
      badge: "2024",
      desc: "This is my first portfolio, it was made using Framer.",
      detaileddesc: " banana ",
      categories: ["UI 🎨"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
   {
      id: "portfolio2",
      title: "Portfolio v2",
      coverimage: portfolio2Img,
      images: [],
      badge: "2025",
      desc: "The portfolio I am currently working on. Built with Tailwindcss, Typescript, DaisyUI, Swiper.js & List.js",
      detaileddesc: " banana ",
      categories: ["CODE 💻"],
      tools: [],
      link: "https://google.com",
      linkidentifier: "testlink",
   },
];
