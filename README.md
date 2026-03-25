# Jam Judge

<div align="center">
    <a href="#about">About</a> •
    <a href="#features">Features</a> ••
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#installation">Installation</a> •
</div>

## About
Jam Judge is a full stack project for the LaunchCode curriculum built to cover concepts such as APIs, databases, front-end and back-end web development, and object oriented programming. The primary purpose of the application is to allow music listeners to share their thoughts about the music that they’ve been listening to.

## Features
JamJudge is a music review platform that allows users to share their opinions on albums and explore reviews from others. The application includes several core features: submitting reviews, browsing community reviews, viewing user profiles, and exploring trending charts.

The Submit Reviews page enables users to rate albums on a scale of 1–5 and write their own reviews. The Reviews page allows users to browse and read reviews posted by other members of the community.

The Charts page integrates with the Discogs API to display albums that users have marked as most wanted, providing insight into trending and highly anticipated releases.

Each user has a Profile page where they can view and edit their personal information, as well as see a collection of all the reviews they have submitted.

## Tech Stack

### Front End


| Technology | Description |
|       ---: | :---        |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=323330) | Core programming language, native to all browsers for dynamic user experience |
| ![React](https://img.shields.io/badge/React-61DBFB?style=for-the-badge&logo=react&logoColor=20232A) | Efficient, interactive UI through component-based architecture and a virtual DOM |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white) | Declarative, component-based navigation and routing |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | Quick cold start and near-instantaneous Hot Module Replacement (HMR) |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=vite&logoColor=white) | HTTP client used to send asynchronous requests to APIs and handle responses |
| ![CSS](https://img.shields.io/badge/CSS-rebeccapurple?style=for-the-badge&logo=css&logoColor=white) | Styling, layout, responsiveness, and accessibility improvements |
| ![Google Fonts](https://img.shields.io/badge/Google_Fonts-EA4335?style=for-the-badge&logo=googlefonts&logoColor=white) | A vast library of open-source fonts, making high-quality typography easily accessible across the web |


### Back End & Database

| Technology | Description |
|       ---: | :---        |
| ![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge) | Core programming language for robust and scalable web applications |
| ![SpringBoot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) | Rapid creation of standalone application with a RESTful API |
| ![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white) | Comprehensive, convention-over-configuration approach that simplifies dependency management |
| ![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white) | Object-Relational Mapping (ORM) tool for database interactions |
| ![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge) | Relational database with structured data storage |

---

## Installation

> [!NOTE]
> To run this project locally, you will need the following installed:
> - Node.js (LTS version)
> - npm or yarn
> - Java Development Kit (JDK) 21
> - MySQL Server (version 8.0+)
> - MySQL Workbench

### Back-end Setup

Clone the repository. In the terminal apply the link in the desired directory and run this line.
 ```shell
https://github.com/lukefrederick/JamJudge.git    cd swd-unit2-java-art-gallery-project/art-gallery-backend
```

In MySQL workbench, with a server running, create a new schema titled jamjudge and ensure that the SQL server is running and run the Java/Springboot application in IntelliJ. If you don't have IntelliJ, naviage to the root directory of the project in the terminal and type the following commands

```shell
    mvn spring-boot:run
```

Your server should now be running on http://localhost:8080

### Front-end setup

Navigate to the directory that contains the front end and run the following commands

```
npm install
npm run dev
```

## Resources

<div align="center">

| Source | Link |
|   ---: | :--- |
| Kanban Board | [Trello](https://trello.com/invite/b/68f04b1a2bcac6509408eab0/ATTI5b73745039039b2a11b4d137ad5a8d328A006D8E/unit-2-launchcode-final-project-jamjudge) |
| Wireframe | [Figma](https://www.figma.com/design/hM5vilZk0f0e0r42WaAQ28/JamJudge?node-id=1-3091&t=uSG71WMNYhZZw2XW-1) |
| ERD | [Figma](https://www.figma.com/board/98jBsw7ci1RyAcfdJVVH9n/ERD---Art-Gallery--SQL-DBD---Copy-?node-id=661-1604&t=PzoVdlBINqwFMSG6-1) |

</div>

## Future plans

In future work on this project, I have a few ideas for features that I'd like to add. First, I want to add more music interactivity. This includes things such as likes, comments, and followers. The goal is to promote more community engagement and encourage discussions amongst users with like minded music tastes or differering opinions. Additionally, a music recommendation system is something that I've been looking into. Most music recommendation systems that are built into apps have tendencies to spit out the same music repeatedly so implementing AI into this is something I feel would circumvent this issue. 
