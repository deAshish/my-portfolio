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
    email: 'ghimireera@gmail.com'
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
    isCompleted: false,
    year: "June 2024",
    universityName: "Maharishi International University – Fairfield, Iowa",
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
    year: "Oct 2022 - Dec 2022",
    company: "STRATEGIC SOLUTIONS GROUP (SSG-LLC)",
    contributions: [
      "Estimated and developed functional requirements provided by the client.",
      "Collaborated with Business Analyst (BA) and Quality Assurance (QA) team to maintain functional and non-functional requirements of the system.",
      "Collaborated with QA and other developer to analyze, debugged, and resolve production issues.",
      "Develop frontend applications pages using Spring MVC, JSP, jQuery, and Bootstrap.",
      "Utilized S3 Bucket, and Google Cloud Storage for cloud storage to store database backup files, documents, images, and files uploaded by the user in the application." ,
      "Created and optimized SQL queries"
    ]
  },

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
  {
    title: "Jr. Developer",
    year: "Jun 2017 - Aug 2018",
    company: "PERFECT ACTIVE SOLUTION PVT. LTD.",
    contributions: [
      "Developed new APIs and maintained existence APIs for school web application using spring and spring boot Framework.",
      "	Use Spring Dev Tools and Lombok to speed up the development process.",
      "	Use Map Struct to map Data Transfer Objects (DTO) to entities and vice versa.", 
      "	Co-ordinated with QA team for manual Testing.",
      "	Client-Side support to implement and improve the system functionality.",
      "	Designed webpages using HTML5, CSS3 and JavaScript.",
      
    ]
  },

]

const skillsWithIcons: string[] = [
  '<i class="fa-brands fa-java fa-xl fa-beat fa-xl"></i>&nbsp Java',
  '<i class="fa-regular fa-sun fa-beat fa-xl"></i> Spring',
  '<i class="fa-solid fa-door-open fa-beat fa-xl"></i> Hibernate',
  '<i class="fa-solid fa-cloud fa-beat fa-xl"></i> REST',
  '<i class="fa fa-file-code fa-beat fa-xl"></i> JSON',
  '<i class="fa-solid fa-diagram-project fa-beat fa-xl"></i> Design Patterns',
  '<i class="fa-brands fa-angular fa-beat fa-xl"></i> Angular',
  '<i class="fa-brands fa-react fa-beat fa-xl"></i> React',
  '<i class="fa-regular fa-file-code fa-beat fa-xl"></i> TypeScript',
  '<i class="fa-solid fa-database fa-beat fa-xl"></i> Databases: MySQL, MongoDB, Oracle',
  '<i class="fa-solid fa-server fa-beat fa-xl"></i> Apache Tomcat',
  '<i class="fa-solid fa-repeat fa-beat"></i> Agile Scrum',
  '<i class="fa-brands fa-git-alt fa-beat fa-xl"></i> Git / <i class="fa-brands fa-github fa-beat fa-xl"></i> Github',
  '<i class="fa-solid fa-arrows-spin fa-beat fa-xl"></i> CI/CD',
  '<i class="fa-brands fa-jenkins fa-beat fa-xl"></i> Jenkins',
  '<i class="fa-brands fa-docker fa-beat fa-xl"></i> Docker',
];


