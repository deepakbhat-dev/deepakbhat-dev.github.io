
// Navigation Bar Section
const navBar = {
  show: false,
};

// Main Body Section
const mainBody = {
  gradientColors: "#FF9B11, #FF6A5D, #D6598B, #8E5C99, #4B5883, #2F4858, #FF7F7F, #9B59B6",
  firstName: "Deepak",
  middleName: "",
  lastName: "Bhat",
  message: "Passionate to contribute to the world of technology. ",
  icons: [
    {
      description: "GitHub",
      image: "fa-github",
      url: "https://github.com/deepakbhat-dev"
    },
    {
      description: "LinkedIn",
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/deepakbhat-developer/"
    }
  ]
};

/*
  ABOUT Section -
    If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
      a) image in "editable-stuff" directory and use require("") to import here,
        i.e: profilePictureLink: require("../editable-stuff/deepakbhat.jpeg"),
      b) If you do not want any picture to be displayed, just leave it empty :)
        i.e: profilePictureLink: "",
    For Resume either provide link to your resume or import from "editable-stuff" directory
     i.e resume: require("../editable-stuff/resume.pdf"), or
         resume: "https://drive.google.com/file/d/121iHvwSPJcDJUolAYZQcosC-2Xlpe3LE/view?usp=sharing"
*/

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/deepakbhat.jpeg"),
  imageSize: 350,
  message:
    "Graduate of 2K18 with an engineering degree in Computer Science, adding value at present as a full-time software developer. Most passionate about giving back to the software community. Strongly believe that software is the most powerful tool in the present world to make life better and easier. In my free time, I mostly upskill or travel.",
  resume: "https://drive.google.com/file/d/121iHvwSPJcDJUolAYZQcosC-2Xlpe3LE/view?usp=sharing"
};

/*
  RESUME Hover button
  Internally uses mainBody.icons and about.resume to display options
  For Resume either provide link to your resume or import from "editable-stuff" directory
    i.e resume: require("../editable-stuff/resume.pdf"), or
      resume: "https://drive.google.com/file/d/121iHvwSPJcDJUolAYZQcosC-2Xlpe3LE/view?usp=sharing"
*/
const resumeHover = {
  show: true,
  icon: {
    description: "Resume",
    image: "fa-user-tie"
  }
}

/*
  PROJECTS Section -
    Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
      i.e: reposLength: 0,
    If you want to display specfic projects, add the repository names,
      i.e ["repository-1", "repo-2"]
    If you want to ignore specfic projects, add the repository names,
      i.e ["repository-1", "repo-2"]
*/

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "deepakbhat-dev",
  reposLength: 6,
  specificRepos: [],
  ignoreRepos: ['deepakbhat-dev', 'deepakbhat-dev.github.io'],
};

// LEADERSHIP Section
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/deepakbhat.jpeg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/deepakbhat.jpeg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    }
  ],
  imageSize: {
    width:"640",
    height:"480"
  }
};

// SKILLS Section
const skills = {
  show: true,
  heading: "Expertise",
  hardSkills: [
    { name: "Data Structures", value: 85 },
    { name: "Ruby on Rails", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "ReactJS - Redux and Sagas", value: 85 },
    { name: "DBMS - MySQL, MongoDB, Postgresql", value: 67 },
    { name: "Algorithms", value: 73 },
    { name: "CI/CD - Jenkins, Spinnaker, Docker", value: 70 },
    { name: "Python and Django", value: 68 },
    { name: "NodeJS", value: 65 },
    { name: "Amazon Web Services (AWS)", value: 57 }
  ],
  softSkills: [
    { name: "Collaboration", value: 90 },
    { name: "Goal-Oriented", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Creativity", value: 75 },
    { name: "Perfectionism", value: 90 },
    { name: "Ownership", value: 85 },
    { name: "Leadership", value: 80 },
    { name: "Positivity", value: 78 }
  ]
};

// GET IN TOUCH Section
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Have an engineering opportunity? Looking for a Full Stack Web Developer? Have any questions? or maybe, want to say hello? Please feel free to email me at",
  email: "bhatd77@gmail.com"
};

const experiences = {
  show: true,
  heading: "Professional Experience",
  data: [
    {
      company: "lowe's",
      role: 'Software Engineer III',
      companylogo: require('../assets/img/lowes.png'),
      date: 'Jan 2022 – Present'
    },
    {
      company: 'cerner',
      role: 'Software Engineer II',
      companylogo: require('../assets/img/cerner.png'),
      date: 'Sept 2019 – Dec 2021'
    },
    {
      company: 'mphasis',
      role: 'Associate Software Engineer',
      companylogo: require('../assets/img/mphasis.png'),
      date: 'Oct 2018 – Aug 2019'
    }
  ]
}

// BLOG Section
// const blog = {
//   show: false
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, resumeHover };
