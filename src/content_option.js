import stocksImg from "./assets/images/stocks.jpg";
import messaging from "./assets/images/messaging.webp";
import ASML from "./assets/images/ASML.jpg";
import Bosch from "./assets/images/Bosch.webp";
import jet3up from "./assets/images/jet3up.webp";
import aircraft from "./assets/images/aircraft.jpg";
import Pokerstars from "./assets/images/PSC.jpg";


const logotext = "[ BBI ]";
const meta = {
  title: "Boboc Bogdan Ioan",
  description:
    "Building Seamless Solutions, Bridging Code, Hardware, and Innovation.",
};

const introdata = {
  title: "I'm Bogdan",
  animated: {
	  first: "I love engineering, porblem solving and a good challange",
    second:
      "I provide scalable solutions with for any issues you struggle with.",
    third:
      "I can provide any specialized industrial solution you are looking for!",
  },
  description:
    "Building Seamless Solutions, bridging Code, Hardware, and Innovation. You need it, I make it real!",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "I am a engineer with real life experience in small and large scale application looking to help local business thrive in this hyper aggresive world. Any problem is just an interesting new puzzle for me that i cannot wait to solve and the satisfaction on my clients face is priceless when i deliver my products. ",
};
const worktimeline = [
  {
    jobtitle:
      "Automated trading solution for brokers looking to automate the crypto market and ensure small daily wins.",
    where: "Bucharest",
    date: "2021",
  },
  {
    jobtitle:
      "Personalized messaging solution for a small indie company with local data hosting to ensure security of data.",
    where: "Bucharest",
    date: "2022",
  },
  {
    jobtitle:
      "Software Engineer for Bosch working on a industrial scale Model Languace converter",
    where: "Bucharest",
    date: "2022",
  },
  {
    jobtitle:
      "Automated Aircraft controller for a fixed wing body in the presence of wind.",
    where: "Cluj-Napoca",
    date: "2022",
  },
  {
    jobtitle: "Software Engineer working for ASML on lithography Systems ",
    where: "Cluj-Napoca",
    date: "2022",
  },
  {
    jobtitle:
      "(Windows) Specialized Human Machine interface for new printers on automated lines for Airbus",
    where: "Brasov",
    date: "2024",
  },
  {
    jobtitle: "Software Engineer for Betfair working on Pokerstars systems.",
    where: "Cluj-Napoca",
    date: "2025",
  },
  {
    jobtitle: "Looking for new quests!!",
    where: "Cluj-Napoca",
    date: "2025",
  },
];

const skills = [
  {
    name: "Programming",
    value: 90,
  },
  {
    name: "Software Arhitecture",
    value: 85,
  },
  {
    name: "Industrial process automation",
    value: 80,
  },
  {
    name: "Continious development and continious delivery",
    value: 60,
  },
];

const services = [
  {
    title: "Custom Solutions Delivery",
    description:
      "Even if the process in question is digital, electrical or mechanical if there is a more efficient way to do it I can find it for you!",
  },
  {
    title: "Feature implementation and system maintenance",
    description:
      "Are you working on a project and are in need of a Backend engineer with knowledge of OOP and embedded development? I would love to be part of your team!",
  },
];

const dataportfolio = [
  {
    img: stocksImg,
    description:
      "Automated trading solution for brokers looking to automate the crypto market and ensure small daily wins.",
    link: "#",
  },
  {
    img: messaging,
    description:
      " Personalized message chat for a small indie company with local data hosting to ensure security of data.",
    link: "#",
  },
  {
    img: ASML,
    description: "Software Engineer for ASML on lithography Systems",
    link: "#",
  },
  {
    img: Bosch,
    description:
      "Software Engineer for Bosch working on a industrial scale Model Languace converter",
    link: "#",
  },
  {
    img: jet3up,
    description:
      "Specialized Human Machine interface for new printers on automated lines for Airbus",
    link: "#",
  },
  {
    img: aircraft,
    description:
      "Automated Aircraft controller for a fixed wing body in the presence of wind.",
    link: "#",
  },
  {
    img: Pokerstars,
    description: "Software Engineer for Betfair working on Pokerstars systems.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "bobocbogdanfac@proton.me",
  YOUR_FONE: "+(40)741-278-054",
  description:
    "Looking for an upgrade at for your company? Look no further, I have the solution for any issue you are facing. Let's get in touch I am looking forward to colaborate with you !",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_n0i5xh2",
  YOUR_TEMPLATE_ID: "template_ivfxwjo",
  YOUR_USER_ID: "GVQFPIvIcCtU-zlTO",
};

const socialprofils = {
  github: "https://github.com/Borkanie",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/bogdan-ioan-boboc-850969231/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
