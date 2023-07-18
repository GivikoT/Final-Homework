import style from "../components/Slider/slider.module.css";
import styles from "../components/WorkSection/worksection.module.css";
import { ABOUT } from "./routes";

const navigation = [
  {
    id: "about",
    title: "About",
    path: ABOUT,
  },
  {
    id: "selected_work",
    title: "Selected Work",
    path: "#",
  },
  {
    id: "contact",
    title: "Contact",
    path: "#",
  },
];

const services = [
  { id: 1, name: "Art Direction", className: style.first },
  { id: 2, name: "UI/UX Design", className: style.second },
  { id: 3, name: "App Development", className: style.third },
  { id: 4, name: "Branding", className: style.first },
  { id: 5, name: "Graphic Design", className: style.second },
  { id: 6, name: "Photography", className: style.third },
];

const workServices = [
  {
    id: 1,
    name: "Mauris ligula elit",
    date: "2013",
    titleClass: styles.title,
    yearClass: styles.year,
  },
  {
    id: 2,
    name: "Nullam varius",
    date: "2015",
    titleClass: styles.title,
    yearClass: styles.year,
  },
  {
    id: 3,
    name: "Nunc et turpis nec",
    date: "2014",
    titleClass: styles.title,
    yearClass: styles.year,
  },
  {
    id: 4,
    name: "Ut iaculis purus",
    date: "2014",
    titleClass: styles.title,
    yearClass: styles.year,
  },
  {
    id: 5,
    name: "Praesent nisl nis",
    date: "2016",
    titleClass: styles.title,
    yearClass: styles.year,
  },
];

export { navigation, services, workServices };
