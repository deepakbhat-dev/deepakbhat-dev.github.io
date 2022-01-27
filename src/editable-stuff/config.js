
// Navigation Bar Section
const navBar = {
  show: false,
};

// Main Body Section
const mainBody = {
  gradientColors: "#FF9B11, #FF6A5D, #D6598B, #8E5C99, #4B5883, #2F4858, #FF7F7F, #9B59B6",
  firstName: "Shreesha",
  middleName: "",
  lastName: "Bhat",
  message: "Learn  Live  Code.",
  icons: [
    {
      description: "GitHub",
      image: "fa-github",
      url: "https://github.com/Shreesha5102"
    },
    {
      description: "LinkedIn",
      image: "fa-linkedin",
      url: "https://linkedin.com/in/bhat-shreesha"
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
  imageLink: require("../editable-stuff/shreesha_profile_pic.jpg"),
  imageSize: 350,
  message:
    "Currently a final year under-graduate of Information Sceince and Enginnering at BMS College of Engineering. Passionate about learning new skills that can change the world of technolgy.'Never Give Up' are the words i live by. I'm a gamer, crazy about motor cycles and an enthusiastic traveller.",
  resume: "https://drive.google.com/file/d/1td8CQfgIO8zJpDDpVSD6-QYWUDHaepxq/view?usp=sharing"
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
  gitHubUsername: "Shreesha5102",
  reposLength: 0,
  specificRepos: ['HPE-nvme-health-monitoring','Event-Handler','Crossing-Dots-Problem','HangMan-Game'],
  ignoreRepos: ['Shreesha5102.github.io','Expense-tracker','Devops_Lab']
};

// LEADERSHIP Section
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/shreesha_profile_pic.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/shreesha_profile_pic.jpg"), 
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
    { name: "C / C++ ", value: 84 },
    { name: "Python ", value: 84 },
    { name: "JavaScript", value: 70 },
    { name: "ReactJS", value: 75 },
    { name: "DBMS - MySQL, MongoDB", value: 70 },
    { name: "Data Structures", value: 80 },
    { name: "Algorithms", value: 80 },
    { name: "NodeJS", value: 65 },

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
    "Currently looking for oppurtunities to kick-off my career. Please feel free to contact me, or just drop a 'Hi' at",
  email: "shreeshabhat.is18@bmsce.ac.in"
};

const experiences = {
  show: true,
  heading: "Professional Experience",
  data: [
    {
      
    },
    {
      company: 'Hewlett-Packark Enterprises',
      role: 'Project Intern',
      companylogo: require('../assets/img/HPE-logo.png'),
      date: 'April - July 2021'
    },
    {
      
    },
  ]
}

// BLOG Section
// const blog = {
//   show: false
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, resumeHover };
