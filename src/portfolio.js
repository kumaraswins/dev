
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Aswin Kumar",
  title: "Hi all, I'm Aswin",
  subTitle: emoji("A seasoned Software Engineer with variety of experience and spent most of my time in the startup world. My experience varies from Javascript, interface for networking drivers & Robotics."),
  resumeLink: "https://kumaraswins.github.io/"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/kumaraswins",
  linkedin: "https://www.linkedin.com/in/kumaraswins/",
  gmail: "kumaraswins@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly scalable web applications, ExpressJS and Django"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Chatbots NLP/AI"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
    //,
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr Software Engineer",  
      company: "Invento Robotics",
      companylogo: require("./assets/images/in.jpg"),
      date: "Nov 2016 – Present",
      desc: "Heading the software division, & part of core founding team.",
      descBullets: [
        "Built NLP engine for the robot for multimodal conversations.",
        "Created a IOT and Software platform to integrate the other software or IOT platforms by exposing the REST API.",
        "NodeJS, Django, WebSockets"
      ]
    },
    {
      role: "Product Engineer",   
      company: "Tagit",
      companylogo: require("./assets/images/tg.png"),
      date: "May 2017 – May 2018",
      desc: "Served as a product engineer responsible for develop and maintain the product",
      descBullets: [
        "Push Notifications",
        "Progessive web applications"
      ]
    },
    {
      role: "Member Technical Staff",  
      company: "NP Compete",
      companylogo: require("./assets/images/npc.png"),
      date: "Aug 2012 – May 2015",
      desc: "Part of the start up companies, holding multiple projects from cloud based network management tools, fintech & health care.",
      descBullets: [
        "Built Single Page Application using Python Flask and Angular JS.",
        "Enforced MVC model, for a Python Flask (server side) based architecture and migrated from conventional SQL queries to ORM technique (SQL Alchemy) and Liquibase."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/an.png"),
      link: "",
      class:"aruba"
    },
    {
      image: require("./assets/images/inv.png"),
      link: "https://www.mitrarobot.com/",
      class:"mitra"
    },
    {
      image: require("./assets/images/download.jpeg"),
      link: "https://www.identifor.com/",
      class:"identifor"
    }
    
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Coursera - Algorithmic Toolbox",
      subtitle: "By University of San Diego.",
      image: require("./assets/images/cor.png"),
      footerLink: [
        { name: "Certification", url: "https://coursera.org/share/e7e95bc63bc99032d987b95c4c57a41c" }
      ]
    },
    {
      title: "Presented infront of PM of India",
      subtitle: "Developed Mitra Robot an Indigenous Robot",
      image: require("./assets/images/jpg.jpeg"),
      footerLink: [{ name: "Video", url: "https://www.youtube.com/watch?v=_irZMn5JeB0" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  
  email_address: "kumaraswins@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "kumaraswins"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
