import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from '../Images/Logo.png';
import '../Css/Project.css';
import Schedule_Appointment from "../Users_Pages_Content/Schedule_Appointment";
import View_Course_Content from "../Users_Pages_Content/View_Course_Content";


const paths = {
  Home: "/",
};

const User_page = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const handleScheduleAppointmentClick = () => {
    navigate("../schedule-appointment");
  }

  const handleViewCourseContentClick = () => {
    navigate("../view-course-content");
  }

  const handelCancelAppointment = () => {
    navigate("../cancel-appointment");
  }

  const onHOMETextClick = useCallback(() => {
    // Please sync "Desktop - 1" to the project
  }, []);

  return (

        <div className="desktop-4">
          <b className="seet-lab"> SEET LAB</b>
          <Link to={paths.Home} className="home" onClick={onHOMETextClick}>
            HOME
          </Link>
          <div className="Header-container">
            <p className="Header">
              <b>Dr. Venkata Inukollu</b>
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="blank-line">Assistant Professor</p>
            <p className="blank-line">Department of Computer Science</p>
            <p className="blank-line">Purdue University Fort Wayne</p>
          </div>
          <img className="image-2-icon" alt="" src={Logo} />
          <img className="desktop-4-child" alt="" src="/line-1.svg" />
          <b className="Name-tag">Projects Data:</b>
          <div className="desktop-4-item">
            <div className="login_form">
              <div>
                <button onClick={handleScheduleAppointmentClick}>Schedule Appointment</button>
                <button onClick={handleViewCourseContentClick}>View Course Content</button>
                <button onClick = {handelCancelAppointment}>Cancel Appointemnt</button>
              </div>
            </div>
          </div>
          <b className="sweet-water-fortwayne-container">
            <p className="sweet-water-fortwayne">&nbsp;</p>
            <p className="sweet-water-fortwayne"></p>
            <p className="sweet-water-fortwayne">&nbsp;</p>
            <p className="sweet-water-fortwayne">&nbsp;</p>
          </b>
        </div>
      
    
  );
};

export default User_page;
