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
  username: "Utkarsh Srivastava",
    title: "Hi all, I'm Utkarsh",
    subTitle: emoji(
      "A Product Management enthusiast with a background as a Software Engineer, Certified Scrum Master, and Product Owner 🚀. I excel at driving product strategies, leading Agile teams, and optimizing SaaS platforms to deliver high-impact, user-focused products. With hands-on experience in Development using JavaScript and Python, I bridge the gap between technical execution and product innovation to build scalable, user-centric solutions."
    ),
    resumeLink:
      "https://drive.google.com/drive/folders/1ueLJZuu4Xt8U4mm8ab7kvx79mfgLyqnp?usp=drive_link", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/utkarshsri22",  
    linkedin: "https://www.linkedin.com/in/utkarshsrivastava22/",
    gmail: "sut.sri.22@gmail.com",
    gitlab: "https://gitlab.com/utkarshsri22",
    facebook: "https://www.facebook.com/profile.php?id=61561429325563",
    medium: "https://medium.com/@utkarsh22",
    stackoverflow: "https://stackoverflow.com/users/19102690/utkarsh22",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
    subTitle: "Product Management Enthusiast & Software Engineer",
    skills: [
      emoji("⚡ Champion user-centric product strategies that drive innovation and enhance user satisfaction."),
      emoji("⚡ Lead cross-functional Agile teams to deliver high-impact products on time."),
      emoji("⚡ Conduct data-driven market analysis and user research to inform product decisions."),
      emoji("⚡ Develop and implement effective A/B testing strategies to optimize user engagement."),
      emoji("⚡ Bridge the gap between technical execution and business objectives through effective stakeholder collaboration."),
      emoji("⚡ Create comprehensive user stories and documentation that align with product roadmaps."),
      emoji("⚡ Drive continuous improvement in product lifecycle management and deployment processes.") 
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IMS Engineering College",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor's of Technology in Information Technology",
      duration: "August 2019 - July 2023",
      desc: "Graduated with Honors and a CGPA of 8.68, actively involved in technical and leadership roles.",
      descBullets: [
      "Presented research paper 'Innovation: A Key to Successful Entrepreneurship' at NCETADI-22",
      "President - Chapter Head at InfoCorp Society and Technical Lead of college magazine CHRONICLE",
      "Member of All India Council for Technical Skill Development"
      ]
    },
    {
      schoolName: "City Montessori School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Intermediate (Class 12th) and High School (Class 10th)",
      duration: "Completed in 2016 (10th) and 2018 (12th)",
      desc: "Achieved academic excellence with 91% in High School and 89% in Intermediate, while leading key international events, blending academics with leadership and innovation.",
      descBullets: [
      "Led QUANTA, an international competition fostering innovation in Science, Mathematics, and Robotics",
      "Coordinated the prestigious *International Chief Justices Conference*, showcasing exceptional leadership",
      "Excelled in academics, balancing event management and global leadership roles on a large scale"
]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
      {
        Stack: "Product Management Tools(Trello, Bitrix, Jira, Slack, Teams, Notion)", //Insert stack or technology you have experience in
        progressPercentage: "90%" //Insert relative proficiency in percentage
      },
      {
        Stack: "Agile Methodologies(Scrum, Kanban)", //Insert stack or technology you have experience in
        progressPercentage: "100%" //Insert relative proficiency in percentage
      },
      {
        Stack: "User Research and Feedback(UserTesting, A/B Testing)", //Insert stack or technology you have experience in
        progressPercentage: "70%" //Insert relative proficiency in percentage
      },
      {
        Stack: "Data Analysis and Metrics(Google Analytics, Mixpanel, Amplitude, Power BI)", //Insert stack or technology you have experience in
        progressPercentage: "80%" //Insert relative proficiency in percentage
      },
      {
        Stack: "Product Development(Figma, Canva, GitHub, GitLab)", //Insert stack or technology you have experience in
        progressPercentage: "85%" //Insert relative proficiency in percentage
      },
      {
        Stack: "Development/Design and Programming", //Insert stack or technology you have experience in
        progressPercentage: "90%" //Insert relative proficiency in percentage
      },
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product - Software Engineer",
      company: "Cavisson Systems",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "November 2023 – Present",
      desc: "Driving product development and cost optimization solutions in SaaS environments through innovative engineering practices.",
      descBullets: [
        "Lead the product development lifecycle for the Koku project, focusing on enhancing cost management for SaaS offerings using agile methodologies.",
        "Manage an open-source project aimed at cost optimization in SaaS environments using Python, applying go-to-market strategies to engage the community.",
        "Utilize product lifecycle management techniques to align technical development with market needs and customer feedback.",
        "Conduct market analysis to inform product features and enhancements, resulting in a 15% increase in system stability.",
        "Create user stories and manage product backlogs to prioritize features based on user needs and business objectives.",
        "Implement sprint planning and backlog management practices to improve project timelines and team productivity by 25%.",
        "Develop comprehensive training modules and product documentation to ensure clear communication of features and benefits, improving user satisfaction scores by 15%."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Cavisson Systems",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "February 2023 – November 2023",
      desc: "Contributed to the success of application performance monitoring solutions, applying product management principles to enhance product delivery.",
      descBullets: [
        "Collaborated in defining product features for the NetDiagnostics tool based on market research and user feedback, employing competitive analysis techniques.",
        "Led User Acceptance Testing (UAT) to ensure that products meet user needs and quality standards, reducing post-release issues by 20%.",
        "Streamlined testing processes in collaboration with QA teams, enhancing product quality and reliability through iterative feedback.",
        "Worked on comprehensive test cases and test requirements to ensure thorough validation of product features and functionality.",
        "Contributed to the development of the Common UI Dashboard, integrating functionalities from all products to enhance user experience.",
        "Conducted research on competitive products like Grafana, DataDog, and New Relic, providing insights for strategic product positioning.",
        "Engaged in strategic discussions with the CTO to align product development with company goals, successfully launching multiple key features through effective cross-functional team collaboration."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Eminence Innovation",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "July 2021 – October 2021",
      desc: "Contributed to web solution development with a focus on enhancing user experience and product functionality through iterative feedback.",
      descBullets: [
        "Participated in defining project requirements and specifications for the boriyabasta.in website, ensuring alignment with business objectives and user needs.",
        "Developed clean, modular, and deployable code while collaborating with stakeholders to validate design decisions.",
        "Conducted user testing sessions and A/B testing strategies, resulting in a 15% increase in customer satisfaction ratings and a 10% increase in click-through rates.",
        "Collaborated on SEO strategies that resulted in a 10% increase in organic search traffic within three months, enhancing market visibility.",
        "Conducted thorough analysis of product metrics and customer feedback to drive data-informed decisions for feature enhancements.",
        "Assisted in gathering product requirements and market research to inform project direction and feature prioritization."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "CASE STUDIES AND PRODUCT TEAR DOWNS I HAVE COMPLETED",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Add the actual path to Razorpay logo
      projectName: "Product Tear Down: Razorpay",
      projectDesc: "Analyzed the product architecture, user experience, and payment gateway integration to identify areas for improvement in usability and scaling.",
      footerLink: [
        {
          name: "View Detailed Report",
          url: "https://docs.google.com/presentation/d/1Pd_9b9wXtaVkTiIKTraCMPB_w4_EpWkh" // Replace with actual URL
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Add the actual path to American Express logo
      projectName: "Case Study: American Express",
      projectDesc: "In-depth case study focusing on product management strategies, digital transformation, and competitive positioning within the financial services industry.",
      footerLink: [
        {
          name: "View Case Study",
          url: "https://drive.google.com/drive/folders/1g6uqvuNleoMfREyZMfJ2Wd_j6AumIOHf" // Replace with actual URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Certified Scrum Master",
      subtitle:
        "Certified ScrumMaster (CSM) with expertise in Agile Methodologies and Scrum practices.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Certified Scrum Master Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15mtxMwULJaALy74riE3DwK0xD3-oqZ3C/"
        },
        {
          name: "View on Credly",
          url: "https://www.credly.com/users/utkarshsrivastava22"
        },
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/posts/utkarshsrivastava22_scrummaster-productmanagement-agile-activity-7240892289647046656-9Ivy?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title: "Certified Scrum Product Owner",
      subtitle:
        "Certified Scrum Product Owner (CSPO), skilled in product backlog management and user story mapping.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Certified Scrum Product Owner Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15l8DuC2ONd8w3FSk80KFLIpMEoelUJaF/"
        },
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/posts/utkarshsrivastava22_ceo-stakeholderengagement-vision-activity-7240897778254520320-vv7A?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },

    {
      title: "IBM Certified Product Manager",
      subtitle: "Completed Specialization covering product management fundamentals, agile development, and product strategy.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "IBM Product Manager Logo",
      footerLink: [
        {name: "Certification", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZZNM7KRHDSPQ"},
        {
          name: "Agile",
          url: "https://www.credly.com/badges/5f04965e-a9ec-4de4-b903-3759fd496cc2/public_url"
        },
        {
          name: "Credly",
          url: "https://www.credly.com/badges/df0e170c-53e3-47c7-a7d2-22775c51af52/public_url"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/posts/utkarshsrivastava22_ibmproductmanager-activity-7241420104939233280-rzfk?utm_source=share&utm_medium=member_desktop"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

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

// Talks Sections

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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project/product or just want to say hi? My Inbox is open for all.",
  number: "+91-9454044498",
  email_address: "ut.sri.22@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
