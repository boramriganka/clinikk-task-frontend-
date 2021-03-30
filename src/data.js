import { default as figma } from "./assets/Figma-logo.svg";
import { default as instagram } from"./assets/instagram.svg";
import { default as photoshop } from "./assets/photoshop.svg";
import { default as pencil } from "./assets/drawpencil.svg";
import { default as analog } from "./assets/analogphoto.svg";

export const CurrentCourse = {
  name: "Spanish",
  Instructor: "Alexendra Velazquaz",
  duration: "6h 30m",
  totalPogress: 82,
  nextStep: "continue",
  number: 2,
};

export const Options = [
  "All Courses",
  "The Newest",
  "Top Rated",
  "Most Popular",
];
export const Allcourses = [
  {
    name: "Learn Figma",
    Instructor: "Chirstopher Morgan",
    duration: "5h 15m",
    likes: 4.9,
    imgsrc: figma,
  },
  {
    name: "Analog Photography",
    Instructor: "Gordon Norman",
    duration: "3h 15m",

    likes: 4.7,
    imgsrc: analog,
  },
  {
    name: "Master Instagram",
    Instructor: "Sophie Gill",

    duration: "7h 40m",
    likes: 4.6,
    imgsrc: instagram,
  },
  {
    name: "Basics Of Drawing",
    Instructor: "Jean Tate",

    duration: "11h 30m",
    likes: 4.8,
    imgsrc: pencil,
  },
  {
    name: "PhotoShop-Essence",
    Instructor: "David Green",
    duration: "5h 35m",
    completion: 83,
    likes: 4.7,
    imgsrc: photoshop,
  },
];

export const searchdata = ["analog photography","photoshop essesnce","learn figma","master instagram","learn photoshop","basics of drawing",]