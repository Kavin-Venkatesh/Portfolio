import './App.css';
import { useState } from 'react';


import Logo from './Assets/photo.webp';
import Image from './Assets/portfolio.jpg';
import AdeshImage from './Assets/adeshImage.jpg';
import SaranImage from './Assets/saranImage.jpg';
import HTML from './Assets/HTML.png';
import CSS from './Assets/CSS.png';
import JAVASCRIPT from './Assets/JAVASCRIPT.png';
import JAVA from './Assets/JAVA.png';
import REACTJS from './Assets/REACTJS.png';
import VUEJS from './Assets/VUEJS.png';
import EXPRESSJS from './Assets/EXPRESSJS.png';
import POSTMAN from './Assets/POSTMAN.png';
import GITHUB from './Assets/GITHUB.png';
import MONGODB from './Assets/MONGODB.png';
import FIGMA from './Assets/FIGMA.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';

function App() {
  const [activeLink, setActiveLink] = useState('Home');

  const skills = [
    {
      name : 'HTML',
      src : HTML
    },
    {
      name : 'CSS',
      src : CSS
    },
    {
      name : 'JAVASCRIPT',
      src : JAVASCRIPT
    },
    {
      name : 'JAVA',
      src : JAVA
    },
    {
      name : 'REACT JS',
      src : REACTJS
    },
    {
      name : 'VUE JS',
      src : VUEJS
    },
    {
      name : 'EXPRESS JS',
      src : EXPRESSJS
    },
    {
      name : 'MONGO DB',
      src : MONGODB
    },
    {
      name : 'POST MAN',
      src : POSTMAN
    },
    {
      name : 'GIT HUB',
      src : GITHUB
    },
    {
      name : 'FIGMA',
      src : FIGMA
    }
  ]

  const projects = [
    {name : "Melanoma Cancer Prediction" , year : '2022-2023', StackUsed : ' React JS , Flask , CNN', Role : 'Front end Developer',  projectDescription : 'This project involves developing a Convolutional Neural Network (CNN) model designed to predict melanoma, a type of skin cancer, based on images of skin lesions. The model is trained on a dataset of labeled images to recognize patterns and features indicative of melanoma. The goal is to create a tool that can assist medical professionals in diagnosing skin cancer more accurately and efficiently by analyzing image data, thus improving early detection and treatment outcomes.'},
    {name : 'Consus - A Redefined Comiplation Platform', year : '2023-2024',StackUsed : ' React JS , Express Js , Mongo DB', Role : 'Front End Developer',  projectDescription : ' Consus is a web-based platform focused on assessing student performance in programming languages. It provides tools for creating and managing programming tests, running code submissions, and evaluating results. The platform supports various programming languages and offers features for detailed analysis of student code, including automated grading and feedback.' },
    {name :'BCC - BIT Career Connect ' , year : '2023 - 2024' ,StackUsed : 'Vue JS , Express JS , MongoDB', Role : 'Full Stack Developer', projectDescription : 'A portal for students to upload, manage, and track job and internship offers with features like submission, administrative approval, document verification, and export functionality.'}
  ];

  const members = [
    {name: 'Adesh S S', role: 'Full Stack Developer', quote: "The only way to do great work is to love what you do. – Steve Jobs", src: AdeshImage},
    {name: 'Dinesh P R', role: 'Full Stack Developer', quote: "Strive for progress, not perfection", src: Image},
    {name: 'Saran S M', role: 'Full Stack Developer', quote: "Trade what you see, not what you think.", src: SaranImage},
  ];

  const details = [
    {year : '2019 - 2020', qualification : 'SSLC' , percentage :'97.2' ,location :"Tagore Matric Higher Secondary School", description : 'During the SSLC (Secondary School Leaving Certificate) examination conducted by the State Government, I achieved a total score of 486 out of 500. This accomplishment reflects a strong academic performance across all subjects, demonstrating proficiency and dedication in my studies.', status : 'Completed' },
    {year : '2021 - 2022', qualification : 'HSC', percentage : '91.66',location :"Tagore Matric Higher Secondary School", description : ' In the Higher Secondary Certificate (HSC) examination, I obtained a commendable score of 550. This result highlights my academic excellence in higher secondary education, where I focused on advanced subjects and developed specialized knowledge in my chosen fields of study.', status : 'Completed' },
    {year : '2022 - 2026', qualification : 'Bachelor of Technology - AIML', percentage : '8.09 CGPA', location:'Bannari Amman Institute of Technology',description :' This program involves an in-depth study of AI technologies, machine learning algorithms, and data science techniques. My academic journey is marked by a strong commitment to understanding and applying advanced AI concepts, as evidenced by my current CGPA of 8.09.', status : 'Ongoing'}
  ]
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };


  return (
    <div className="MainContainer">
   <div className="navContainer">
      <h1>KAVIN</h1>
      <div className='listContainer'>
        <ul>
          <li><a href="#home" className={activeLink === 'Home' ? 'active' : ''} onClick={() => handleSetActiveLink('Home')}>Home</a></li>
          <li><a href="#about" className={activeLink === 'About' ? 'active' : ''} onClick={() => handleSetActiveLink('About')}>About</a></li>
          <li><a href="#resume" className={activeLink === 'Resume' ? 'active' : ''} onClick={() => handleSetActiveLink('Resume')}>Resume</a></li>
          <li><a href="#skills" className={activeLink === 'Skills' ? 'active' : ''} onClick={() => handleSetActiveLink('Skills')}>Skills</a></li>
          <li><a href="#projects" className={activeLink === 'Projects' ? 'active' : ''} onClick={() => handleSetActiveLink('Projects')}>Projects</a></li>
          <li><a href="#team" className={activeLink === 'Team' ? 'active' : ''} onClick={() => handleSetActiveLink('Team')}>Team</a></li>
          <li><a href="#contact" className={activeLink === 'Contact' ? 'active' : ''} onClick={() => handleSetActiveLink('Contact')}>Contact</a></li>
        </ul>
      </div>
    </div>
    <div id= "home" className='Home'>
        <div className='rightContainer'>
          <p className = "SubHeading">HELLO!</p>
          <h1 className='homeContent'>I'M <span id='Name'>Kavin Venkatesh</span></h1>
          <h1 className='homeContent'>A Full Stack Developer</h1>
        </div>
        <div className='leftContainer'>
          <img className="ProfileImage" src={Logo} alt='Profile' />
        </div>
    </div>
    <div id= "about" className = "About">
      <div className='AboutRight'>
      <img className="ProfileImage" src={Logo} alt='Profile' />
      </div>

      <div className='AboutLeft'>
          <h1 className='homeContent'>About Me</h1>
          <p className='Details'>"Code is like humor. When you have to explain it, it’s bad." – Cory House</p>
          <div className = "DetailsContainer">
         <div className='AboutDetails'> <p className='Question'>Name </p></div>
          <div className='AboutRightDetails'><p className='Answer'>Kavin Venkatesh</p></div>
          </div>
          <div className = "DetailsContainer">
          <div className='AboutDetails'> <p className='Question'>Date of Birth</p></div>
          <div className='AboutRightDetails'><p className='Answer'>21.07.2005</p></div>
          </div>
          <div className = "DetailsContainer">
          <div className='AboutDetails'> <p className='Question'>Address</p></div>
          <div className='AboutRightDetails'><p className='Answer'>Salem, TamilNadu,India</p></div>
          </div>
          <div className = "DetailsContainer">
          <div className='AboutDetails'> <p className='Question'>Zip Code</p></div>
          <div className='AboutRightDetails'><p className='Answer'>636121</p></div>
          </div>
          <div className = "DetailsContainer">
          <div className='AboutDetails'> <p className='Question'>Email Address</p></div>
          <div className='AboutRightDetails'><p className='Answer'>kavinvenkatesh79@gmail.com</p></div>
          </div>
          <div className = "DetailsContainer">
          <div className='AboutDetails'> <p className='Question'>Phone</p></div>
          <div className='AboutRightDetails'><p className='Answer'>+91 7904863284</p></div>
          </div>
          <button className='DownloadCV' onClick={() => window.open('https://drive.google.com/file/d/1RIQgMdDFiI-CI0Pls3tXFddKZSdvscM_/view?usp=sharing' , '_blank')}>
            <p className='downloadText'>DOWNLOAD CV</p>
          </button>
        </div>
    </div>

    <div className='Resume'>
    <h1 className='homeContent'>My Resume</h1>
        <p className='Details'>"The way to get started is to quit talking and begin doing." – Walt Disney</p>
        <div className='projectsCardContainer'>
        {details.map((detail , index)=>(
           <div  key = {index} className = "ProjectCard">
           <h3 className='cardTitle'>{detail.qualification} <span className='cardYear'>({detail.year})</span></h3>
           <h2 className='cardTitle'>{detail.location}</h2>
           <h3 className='cardTitle'>Status : <span id='status'>{detail.status}</span></h3>
           <h3 className='cardTitle'> Percentage :<span className='cardYear'>{detail.percentage}</span></h3>
           <p className='cardDescription'>{detail.description}</p>
         </div>
        ))}
    </div>
    </div>

    <div id="skills" className="SkillsContainer">
    <h1 className='homeContent'>My Skills</h1>
    <p className='Details'>"Talk is cheap. Show me the code." – Linus Torvalds </p>
    <div className='skillCardContainer'>
    {
      skills.map((skill) =>(
        <div className='skillCard'> 
              <img className='skillCardimg' src={skill.src} alt={skill.name}/>
              <h3 className='skillName'> { skill.name }</h3>
        </div>
      ))
    }
    </div>
      </div>

      <div id= "projects" className='Projects'>
        <h1 className='homeContent'>Our Projects </h1>
        <p className='Details'>"The way to get started is to quit talking and begin doing." – Walt Disney</p>
        <div className='projectsCardContainer'>
          {projects.map((project , index)=>(
            <div  key = {index} className = "ProjectCard">
              <h3 className='cardYear'> {project.year}</h3>
              <h3 className='cardTitle'>{project.name}</h3>
              <h3 className='cardTitle'>Technologies Used: {project.StackUsed}</h3>
              <h3 className='cardTitle'> Role : {project.Role}</h3>
              <p className='cardDescription'>{project.projectDescription}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="team" className='Team'>
      <h1 className='homeContent'>Our Team</h1>
      <p className='Details'>"Coming together is a beginning, staying together is progress, and working together is success." – Henry Ford</p>
      <div className='teamContainer'>
          {members.map((member, index) => (
            <div key={index} className='TeamCard'>
              <img className='teamImage' src={member.src} alt='team member'/>
              <p className='TeamMateName'>{member.name}</p>
              <p className='MemberRole'>{member.role}</p>
              <p className='MemberQuotes'>{member.quote}</p>
            </div>
          ))}
        </div>
    </div>


    <div id= "contact" className='Contact'>
          <h1 className='homeContent'>Contact Me</h1>
          <p className='Details'>"The art of communication is the language of leadership." – James Humes</p>
          <div className = "contactDetails">
            <div className='IndividualDetail'>
            <div className='imageContainer'>
            <FontAwesomeIcon icon={faLocationDot} className='icon' />
            </div>
            <h3>Salem , Tamil Nadu , India</h3>
            </div>
            <div className='IndividualDetail'>
            <div className='imageContainer'>
            <FontAwesomeIcon icon={faPhone} className='icon' />
            </div>
            <h3>+91 7904863284</h3>
            </div>
            <div className='IndividualDetail'>
            <div className='imageContainer'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            </div>
            <h3>kavinvenkatesh79@gmail.com</h3>
            </div>
            <div className='IndividualDetail'>
            <div className='imageContainer'>
            <FontAwesomeIcon icon={faInstagram}  className='icon'/>
            </div>
            <a className="links" href='https://www.instagram.com/__.kavin._v__/'><h3>__.kavin._v__</h3></a>
            </div>
          </div>
    </div>


    <div className='footer'>
          <p className='footerDetails'> Copyright @2024 All rights reserved</p>
    </div>
    </div>
  );
}

export default App;
