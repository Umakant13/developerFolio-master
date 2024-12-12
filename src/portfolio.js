/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Umakant Dodtalle",
  title: "Hi all, I'm Umakant",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in building web applications using JavaScript, Angular, Node.js, and expertise in backend technologies like Java and Spring Boot."
  ),
  resumeLink:
  "https://drive.google.com/file/d/1O_GwIoWl-Ev8fqVaJnVGbwGEGcqI9FgA/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Umakant13",
  linkedin: "https://www.linkedin.com/in/umakant-dodtalle/",
  gmail: "umakantdodtalle0@gmail.com",
  instagram: "https://www.instagram.com/umakant.dodtalle/",
  stackoverflow: "https://stackoverflow.com/users/26318485/umakant-dodtalle",
  leetcode:"https://leetcode.com/u/umakant_dodtalle/",
  geeksforgeeks:"https://www.geeksforgeeks.org/user/umakantdodtalle/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend/User Interfaces using HTML5, CSS3, JavaScript, and Angular"
    ),
    emoji(
      "⚡ Build robust backend services and APIs using Spring Boot and Hibernate frameworks"
    ),
    emoji(
      "⚡ Proficient in database design and management with MySQL"
    ),
    emoji(
      "⚡ Version control and collaboration using Git and GitHub"
    ),
    emoji(
      "⚡ Efficient API testing and debugging using Postman"
    ),
    emoji(
      "⚡ Integration of third-party services such as Render"
    )  
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "javaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf" // Use a leaf icon as a placeholder
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-envelope" // Use an envelope icon as a placeholder
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Savitribai Phule Pune University",
      logo: require("./assets/images/SPPU.png"), // Replace with the actual path to the SPPU logo
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "January 2021 - June 2024",
      desc: "Graduated with 80% and gained a strong foundation in computer science and engineering concepts."
    },
    {
      schoolName: "Higher Secondary Certificate",
      logo: require("./assets/images/HSC.png"), // Replace with the actual path to the SMM International School logo
      subHeader: "12th Grade (Science)",
      duration: "June 2018 - February 2020",
      desc: "Graduated with 78.62%, focusing on Science stream with strong performance in Mathematics, Physics, and Chemistry.",
    },
    {
      schoolName: "Secondary School Certificate (SSC)",
      logo: require("./assets/images/HSC.png"), // Replace with the actual path to the SSC logo
      subHeader: "10th Grade",
      duration: "June 2017 - March 2018",
      desc: "Graduated with 85.00%, excelling in subjects like Mathematics, Science, and English.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Database",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Internship - Full Stack Java Developer",
      company: "The Kiran Academy",
      companylogo: require("./assets/images/tka.jpeg"), // Replace with your academy's logo path
      date: "June 2024 – December 2024",
      desc: "Completed a 6-month Java Full Stack Development course, gaining practical experience in Core Java, Frontend Technologies, and Advanced Java frameworks like Spring Boot and Hibernate.",
      descBullets: [
        "Learned Core Java concepts including object-oriented programming, data structures, and algorithms.",
        "Developed web applications using Spring Boot and Hibernate for backend development.",
        "Worked with frontend technologies like HTML, CSS, JavaScript, and Angular.",
        "Built and deployed database-driven applications with MySQL.",
        "Received an internship letter from Kiran Academy for the completion of the course and hands-on internship."
      ]
    },
    {
      role: "Intern - Machine Learning Developer",
      company: "Softtech Solutions",
      companylogo: require("./assets/images/softech-1.jpg"), // Replace with the actual logo image path
      date: "June 2023 – March 2024",
      desc: "Internship focused on the project 'Retinal Diseases Classification Using Deep Learning'. Worked with deep learning algorithms and machine learning models, contributing to research and development in the healthcare sector.",
      descBullets: [
        "Worked on machine learning models for retinal disease classification",
        "Collaborated with a team of engineers to refine algorithms",
        "Gained exposure to industry-specific technologies and research"
      ]
    },
    {
      role: "Intern - Web Developer",
      company: "Oasis Infobyte",
      companylogo: require("./assets/images/oasis_infobyte_logo.jpg"), // Replace with the actual logo image path
      date: "January 2023 – April 2023",
      desc: "Worked as a Web Developer intern at Oasis Infobyte, contributing to website development and content management. Utilized testing tools and frameworks to maintain code quality and ensure website functionality. Collaborated with team members to enhance user experience and optimize web pages.",
      descBullets: [
        "Developed and managed web content using CMS (Content Management Systems)",
        "Ensured website functionality and maintained code quality with various testing tools and frameworks",
        "Collaborated with a team to improve the design and responsiveness of websites",
        "Worked with front-end technologies like HTML5, CSS3, JavaScript"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Notable Projects",
  subtitle: "DEPLOYED PROJECTS DEMONSTRATING MY EXPERTISE IN BUILDING WEB APPLICATIONS AND MARKETPLACE PLATFORMS",
  projects: [
    {
      image: require("./assets/images/food-del.webp"),
      projectName: "Smart Food Delivery",
      projectDesc: "A fully functional food ordering and delivery platform with a sleek UI and seamless backend integration.",
      techStack: {
        frontend: ["React JS", "TypeScript"],
        backend: ["Express", "Node.js"],
        paymentGateways: ["Stripe"],
        database: ["MongoDB"]
      },
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Umakant13/food-del",

        },
        {
          name: "View Live",
          url: "https://food-del-frontend-8as7.onrender.com/",

        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/image.jpg"),
      projectName: "Multi-Vendor Marketplace",
      projectDesc: "An interactive and efficient multi-vendor marketplace platform, optimized for scalability.",
      techStack: {
        frontend: ["React", "TypeScript"],
        backend: ["Spring Boot"],
        database: ["MySQL"],
        paymentGateways: ["Razorpay", "Stripe"]
      },
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Umakant13/multi-vendor-marketplace"
        },
        {
          name: "View Live",
          url: "https://multi-vendor-market.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/jobportal.jpg"),
      projectName: "HireHub - A Job Portal Application",
      projectDesc: "A comprehensive job portal application connecting employers and job seekers with advanced search and management features.",
      techStack: {
        frontend: ["React"],
        backend: ["Spring Boot"],
        database: ["MongoDB"]
      },
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Umakant13/hirehub-connect"
        },
        {
          name: "View Live",
          url: "https://jobhook.onrender.com/"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  
  subtitle: "Achievements, Certifications, Recognitions and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Project Sponsorship by Softtech Solutions",
      subtitle:
        "Sponsorship granted by Softtech Solutions for the project 'Retinal Diseases Classification Using Deep Learning'.",
      image: require("./assets/images/softtech.png"),
      imageAlt: "Softtech Solutions",
      footerLink: [
        {
          name: "Sponsorship Letter",
          url: "https://drive.google.com/file/d/11IFAkbSrcjfOUApU1ATz7zRQjQUJsQrg/view?usp=drive_link"
        },
        {
          name: "Project Demonstration",
          url: "https://drive.google.com/file/d/1FkRnN6I8BO9MM8KPGdHopTUTICax7aUh/view?usp=sharing"
        },
      ]
    },
    {
      title: "JSCOE HACKFEST 2024",
      subtitle:  "Developed a deep learning model for retinal disease classification, earning a certificate at JSCOE HACKFEST 2024.",
      image: require("./assets/images/jspm.jpeg"),
      imageAlt: "Retinal Disease Classification Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1puPIPBFeO-ThQ39SjoMD4r_WMsNTtR-y/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Research Paper Publication ",
      subtitle: 
      "Published a research paper on Retinal Diseases Classification in the International Journal of Scientific Research in Engineering and Management (IJSREM).",
      image: require("./assets/images/ijsrem.png"),
      imageAlt: "ijsrem Logo",
      footerLink: [
        {
          name: "View Research Paper",
          url: "https://drive.google.com/file/d/1R4G2zCliynYsNzGiDj2f2YEr4lQRUvTD/view?usp=drive_link"},
          {
            name: "Research Paper DOI",
            url: "https://doi.org/10.55041/IJSREM29420"
          }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

/*
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
*/

// Talks Sections
/*
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
*/

// Podcast Section
/*
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};
*/

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "As a fresher, I'm eager to explore new opportunities and connect with professionals in the industry.",
  number: "+91 7709273762",
  email_address: "umakantdodtalle0@gmail.com"
};

// Twitter Section
/*
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};
*/

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection, bigProjects, contactInfo, educationInfo, greeting, illustration, isHireable, openSource, resumeSection, skillsSection, socialMediaLinks,
  splashScreen, techStack,
  workExperiences
};

