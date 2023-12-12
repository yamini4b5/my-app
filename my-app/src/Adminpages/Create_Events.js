import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Images/Logo.png'
import '../Css/Project.css'
import axios from 'axios';

const paths = {
  Home: "/",
};

const Create_Batch = () => {
  const [projects, setProjects] = useState([]);
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate()

  const handleInputEvent = (e) => {
    setEvent(e.target.value);
  };

  const handleInputDate = (e) => {
    setDate(e.target.value);
  };

  const handleInputTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Add your logic here to handle the submitted batch value, e.g., send it to an API or perform some action.
    try {
        const response = await axios.post(
          "http://localhost:3000/event/create",
          {
            name: event,
            date: date,
            time: time
          }
        );
  
        
        navigate("/events")
      } catch (error) {
        console.error("course Error:", error.message);
      }

    // Clear the input field after submission
    setEvent('');
    setDate('');
    setTime('');
  }

  const fetchProjects = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/projects");
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  }, []);



  return (
    <div className="desktop-4">
      <b className="seet-lab"> SEET LAB</b>
      <Link to={paths.Home} className="home">
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
      <form onSubmit={(e)=>handleSubmit(e)} className="login_form">
      <label>
        Event:
        <input
          type="text"
          value={event}
          onChange={(e) => handleInputEvent(e)}
          placeholder="Enter batch..."
          style={{zIndex: 100}}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => handleInputDate(e)}
          placeholder="Enter date..."
          style={{zIndex: 100}}
        />
      </label>
      <label>
        Time:
        <input
          type="text"
          value={time}
          onChange={(e) => handleInputTime(e)}
          placeholder="Enter time..."
          style={{zIndex: 100}}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
    
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

export default Create_Batch;