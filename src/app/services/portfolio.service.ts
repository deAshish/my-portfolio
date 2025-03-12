import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {
  }

  getSummary(): Summary {
    return summary;
  }

  getEducation(): Education[] {
    return education;
  }

  getExperience(): Experience[]{
    return experience;
  }

  getSkills(): string[]{
    return skillsWithIcons;
  }

  getProject(): Project[]{
    return project;
  }
}

const summary: Summary =
  {
    description: "Experienced Software Engineer with 5 years of expertise" +
    " in web-based software development, automation, and enhancing business" +
    " operations. Skilled in requirement analysis, quality assurance, project documentation" +
    ", and enterprise architecture implementation. Proficient in Java, Spring Boot, and React" +
     "for end-to-end software development.",
    name: "Ashish Ghimire",
    address: "Chicago, IL 60660",
    phoneNumber: "+1-641-2332-411",
    email: 'asghimire17@gmail.com'
  };

export interface Summary {
  description: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

export interface Education {
  title: string;
  isCompleted: boolean;
  year: string;
  universityName: string;
}

const education: Education[] = [
  {
    title: "Master of Science in Computer Science",
    isCompleted: true,
    year: "2021-2025",
    universityName: "Maharishi International University, Fairfield, Iowa",
  },
  {
    title: "Bachelor of Engineering in Computer Engineering",
    isCompleted: true,
    year: "2014-2018",
    universityName: "Kathmandu Engineering College, Kathmandu, Nepal",
  }
]

export interface Experience {
  title: string;
  year: string;
  company: string;
  contributions: string[];
}

const experience: Experience[] = [
  {
    title: "Software Engineer",
    year: "Dec 2019 - Oct 2021",
    company: "YOUNG MINDS CREATIONS PVT. LTD.",
    contributions: [
      	"Implementing all phases of the Software Development Life Cycle (SDLC) Analysis, Design, Development, Testing, and Deployment using Agile Methodologies using Jira.",
"Develop monolithic and microservices applications using Spring Boot, Spring Cloud, and Spring Framework using Behavior Driven Development approach.",
	"Develop frontend applications using Angular, Spring MVC, JSP, jQuery, React, Webpack, and Bootstrap.",
"Use Spring AOP to separate cross-cutting concerns from logical operations.",
"Implement Saga and CQRS patterns in microservices architecture using Apache Kafka, Zookeeper, and Spring for Apache Kafka.", 
	"Develop asynchronous communication between microservices using Rabbit MQ and Spring AMQP.",
	"Implement synchronous communication between microservices using Spring Cloud Open Feign and Rest Template.",
	"Implementing different Design Patterns (CQRS, SAGA), Multi-Threading and Multiprocessing to improve the System response time and efficiency.",
	"Utilize Spring Cloud Netflix as a service registry for microservice applications.",
	"Implement Spring Cloud Gateway as an API Gateway for clients and server-side load balancing. ",
	"Utilize other Spring Cloud starter frameworks to develop robust microservice architecture. ",
	"Use Spring Data JPA and Hibernate to handle JDBC-based database access and object-relational mappings (ORM). ",
	"Use Spring Data MongoDB and Spring Data Radis to handle NOSQL database access and to implement Server-Side Caching in web server.",
	"Achieve Test Driven Development by implementing unit testing using JUnit and Mockito.", 
	"Implement Spring Batch for processing high-volume batch jobs, such as reading CSV and XML files and updating databases at fixed intervals. ",
	"Utilize AWS S3 Bucket and Google Cloud Storage as cloud storage for files and images in applications.", 
"Use GIT for version control and Maven, NPM for dependency management and building tools."

    ]
  },

  {
    title: "Java Developer",
    year: "Sept 2018 - Oct 2019",
    company: "DYNAMIC INTERNATIONAL TECHNOLOGY PVT. LTD",
    contributions: [
      	"Participated in development planning meetings with clients and played an active role by contributing insights, ideas, and expertise to facilitate productive discussions and effective decision-making processes.",
        "	Develop RESTful web services using Spring Boot and Spring Framework.",
        "	Use Log4j logger and Spring AOP for logging and debugging.",
        "	Work with RDBMS like PostgreSQL and MySQL to store and retrieve data from web services.",
        "	Secure web services by implementing authentication and authorization using Spring Security and JWT.",
        "	Test REST APIs using Postman and Swagger.",  
        "	Participated in code review process.",
        "	Complete assigned tasks using Jira and Git, including pushing completed code to the repository and sending merge requests.",
    ]
  },

]
export interface Project {
  title: string;
  description: string;
  projectUrl: string;
  technologies: string[];
}

const project: Project[] = [
  {
    title: "Research Assistant Extension",
    description: "Research Assistant Extension is a Chrome extension designed to enhance research productivity by providing AI-powered assistance. This project is built using a Spring Boot backend integrated with the Gemini AI API for natural language processing, and a React-based user interface for seamless user interaction.",
    projectUrl: "https://github.com/deAshish/Research-Assistant-Extension",
    technologies: [ "Spring Boot","Spring Ai","WebClient","Gemini AI API", "Jackson", "React", "Manifest V3" ]
  },
  {
    title: "AI Modules",
    description: "This project is build using springAI with AI services like ChatService, Image Service and Recipe Generator service. The frontend is build using React which provides an interface for user to use those services.",
    projectUrl: "https://github.com/deAshish/SpringAiI",
    technologies: [ "Spring Boot","Spring AI","OpenAI API","WebClient", "React"]
  },
  {
    title: "Audio to Text Convertor",
    description: "The Audio-to-Text Converter is a web-based application that allows users to upload audio files and convert them into text using OpenAI's Whisper API. The frontend is built with React and handles API requests via Axios.",
    projectUrl: "https://github.com/deAshish/Audio-Text",
    technologies: [ "Spring Boot","Spring AI","OpenAI Whisper API", "React", "lombok" ]
  },

  {
    title: "AI Email Assistance",
    description: "This project is a Chrome extension that integrates with a Spring Boot backend and a React-based UI to generate AI-powered email replies in Gmail. "
    + "The extension adds an \"AI Reply\" button with a tone selection dropdown in the Gmail compose window, allowing users to generate context-aware responses in various tones.",
    projectUrl: "https://github.com/deAshish/email-writer",
    technologies: [ "Spring Boot", "React", "lombok" ]
  },

  {
    title: "Online Shopping Cart System",
    description: "The Online Shopping Cart System is a secure, role-based e-commerce platform that facilitates online product sales from multiple vendors, "+ 
    "with integrated Visa and MasterCard payment options. It provides comprehensive user management, product catalog maintenance, order tracking, and automated "+ 
    "reporting for vendors and administrators. The system ensures secure payment processing, vendor approvals, and profit-sharing while leveraging Spring Security for authentication and authorization.",
    projectUrl: "https://github.com/deAshish/waa-june-2022-final-project",
    technologies: [ "JPA", "Spring Boot","Spring Security", "mySQL", "react", "axios" ]
  },

  {
    title: "Alumni Management System",
    description: "Developed system to manage records of all graduates and generate necessary data for better analysis for future decision making.",
    projectUrl: "https://github.com/deAshish/waa-june-2022-final-project",
    technologies: [ "JPA", "Spring Boot", "Postgres SQL","Keycloak", "Redux Toolkit","ECharts" ]
  },

  {
    title: "Badge and Student Management System",
    description: "Worked with a team of four to create a UML class diagram and developed RESTful "+
                  "API using Pair Programming Technique. Developed system for university to provide unique badges to students, staff, and faculty to control "+
                  "access to campus locations",
    projectUrl: "https://github.com/deAshish/EA-project",
    technologies: [ "JPA", "Hibernate","Spring Boot", "MySQL", "Mockito", "Keycloak"]
  },

  {
    title: "Music Player",
    description: "An web-based application built on Node.js where user can login with their username and password. User can add songs to their playlist from the list of songs and play the songs.",
    projectUrl: "https://github.com/deAshish/music",
    technologies: [ "Node.js", "Express","HTML", "CSS"]
  },

  {
    title: "Tax Visualization",
    description: "This project is the representation of tax paid by different private institutions, governmental branches and the citizens. We are trying to show the statistics of taxes paid throughout the country."+
    "The project was a wordpress powered website which visualized different statistic related to tax in Nepal. We scraped datas related to tax and saved them in CSV format. The the csv were hosted on cloud in google "+
    "drive and we made interactive graphs and charts using the CSV. Any changes made to the spreadsheet updated the graphs as well. \n" +"It was made at the hackathon orgranised by YoungInnovations on the occasion of \"Open Data Day 2015\" at DeerWalk Institute"+
    " of Technology, Sifal.",
    projectUrl: "https://github.com/deAshish/taxvisualization",
    technologies: ["Wordpress" ]
  },
  

]

const skillsWithIcons: string[] = [
  '<i class="fa-brands fa-java fa-xl  fa-xl"></i>&nbsp Java',
  '<i class="fa-regular fa-sun  fa-xl"></i> Spring',
  '<i class="fa-solid fa-door-open  fa-xl"></i> Hibernate',
  '<i class="fa-solid fa-cloud  fa-xl"></i> REST',
  '<i class="fa fa-file-code  fa-xl"></i> JSON',
  '<i class="fa-solid fa-diagram-project  fa-xl"></i> Design Patterns',
  '<i class="fa-brands fa-angular  fa-xl"></i> Angular',
  '<i class="fa-brands fa-react  fa-xl"></i> React',
  '<i class="fa-regular fa-file-code  fa-xl"></i> TypeScript',
  '<i class="fa-solid fa-database  fa-xl"></i> Databases: MySQL, MongoDB, Oracle',
  '<i class="fa-solid fa-server  fa-xl"></i> Apache Tomcat',
  '<i class="fa-solid fa-repeat "></i> Agile Scrum',
  '<i class="fa-brands fa-git-alt  fa-xl"></i> Git / <i class="fa-brands fa-github  fa-xl"></i> Github',
  '<i class="fa-solid fa-arrows-spin  fa-xl"></i> CI/CD',
  '<i class="fa-brands fa-jenkins  fa-xl"></i> Jenkins',
  '<i class="fa-brands fa-docker  fa-xl"></i> Docker',
];


