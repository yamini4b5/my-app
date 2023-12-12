import React from 'react';
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Css/Home.css'
import Logo from '../Images/Logo.png'
import Professor from '../Images/Professor.png'

const paths = {
  studentProjects: "/student-projects",
  universitiesProfessorsCollab: "/universities-professors-collab",
  industryCollaborations: "/industry-collaborations",
  careerCounsellingServices: "/career-counselling-services",
  courses: "/courses",
  events: "/events",
  roles: "/roles",
  logout: "/logout",
  login: '/login'
};

const Home = () => {
  const [currentUserType, setCurrentUserType] = React.useState('')
  const navigate = useNavigate()
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    // console.log(id)
    let currentUse = null;
    // user.Type_user==="Admin"
    if (storedUser) {
    currentUse = JSON.parse(storedUser);
    console.log("$$$$$$$$$",currentUse)
    setCurrentUserType(currentUse.Type_user);
    } else {
        console.log("user not there")
    }

  },[])
  const onStudentProjectsTextClick = useCallback(() => {
    // Please sync "Desktop - 2" to the project
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout successful");
    navigate('/login')
  }

  const onUniversitiesProfessorsCollabTextClick = useCallback(() => {
    // Please sync "Desktop - 3" to the project
  }, []);

  const onIndustryCollaborationsTextClick = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  const onCareerCounsellingServicesClick = useCallback(() => {
    // Please sync "Desktop - 5" to the project
  }, []);

  const onCoursesTextClick = useCallback(() => {
    // Please sync "Desktop - 7" to the project
  }, []);

  const onEventsTextClick = useCallback(() => {
    // Please sync "Desktop - 11" to the project
  }, []);

  return (
    <div className="desktop-1">
      <b className="home">HOME</b>
      <div className="desktop-1-child" />
      <Link to={paths.studentProjects} className="student-projects" onClick={onStudentProjectsTextClick}>
        Student Projects
      </Link>
      <Link to={paths.universitiesProfessorsCollab} className="universitiesprofessors-collab" onClick={onUniversitiesProfessorsCollabTextClick}>
        Universities/Professors Collaborations
      </Link>
      <Link to={paths.industryCollaborations} className="industry-collaborations" onClick={onIndustryCollaborationsTextClick}>
        Industry Collaborations
      </Link>
      <Link to={paths.careerCounsellingServices} className="career-counselling-services" onClick={onCareerCounsellingServicesClick}>
        Career Counselling Services
      </Link>
      <Link to={paths.courses} className="courses" onClick={onCoursesTextClick}>
        Courses
      </Link>
      <Link to={paths.events} className="events" onClick={onEventsTextClick}>
        Events
      </Link>
      {currentUserType==='Admin' && <Link to={paths.roles} className="roles" onClick={onEventsTextClick}>
        Add/Remove User Roles
      </Link>}
      {localStorage.length!==0 && <Link to={paths.login} className="logout" onClick={()=>{onEventsTextClick();handleLogout();}}>
        Logout
      </Link>}
      <b className="about-drv">About Dr.V:</b>
      <div className="dr-venkata-inukollu">
        Dr. Venkata Inukollu is an assistant professor of Computer Science at
        Purdue University Fort Wayne, USA. Dr.V is an Interim Graduate Director
        in the Dept of Computer Science and Information Systems. His research
        and teaching focus on developing fundamental concepts of Software
        Engineering is incredible.
      </div>
      <div className="dr-venkata-inukollu-container">
        <p className="dr-venkata-inukollu1">
          <b>Dr. Venkata Inukollu</b>
        </p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">Assistant Professor</p>
        <p className="blank-line">Department of Computer Science</p>
        <p className="blank-line">Purdue University Fort Wayne</p>
      </div>
      <img className="image-2-icon" alt=""  src={Logo} />
      <img className="desktop-1-item" alt="" src="/line-1.svg" />
      <img className="image-3-icon" alt="" src={Professor} />
      <div className="contact-information">Contact Information:</div>
      <div className="please-do-not-container">
        <p className="please-do-not">
          Please do not hesitate to reach out if you have any questions or
          require further information.
        </p>
        <p className="please-do-not">{`260-481-0188  `}</p>
        <p className="please-do-not">inukollv@pfw.edu</p>
        <p className="the-best-way-to-reach-me-is-vi">
          <span>{`(The best way to reach me is via email) `}</span>
          <span className="span">{`  `}</span>
        </p>
        <p className="please-do-not">&nbsp;</p>
      </div>
      <b className="seet-lab"> SEET LAB</b>
    </div>
  );
};

export default Home;