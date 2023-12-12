import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Images/Logo.png'
import '../Css/Project.css'
import axios from 'axios';

const paths = {
  Home: "/",
};



const Courses = () => {
    const navigate = useNavigate();
    const [currentUserType, setCurrentUserType] = useState('');

    // const handleSubmit = () => {
        
    // }

//     const storedUser = localStorage.getItem('user');

// let currentUser = null;

// if (storedUser) {
//   currentUser = JSON.parse(storedUser);
//   console.log('Current user:', currentUser);
// } else {
//   console.log('No user session found');
// }

    const handleRegister = async(e, id) => {
        e.preventDefault()

        const storedUser = localStorage.getItem('user');
        // console.log(id)
        let currentUser = null;

        if (storedUser) {
        currentUser = JSON.parse(storedUser);
        console.log('Current user:', currentUser);
        } else {
            alert("user not found");
        }
        
        
        try {
            const response = await axios.post(
              `http://localhost:3000/event/${id}`,
              {
                user: currentUser._id
              }
            );
              
            alert(currentUser.First_name, "registered successfully");
            navigate("/events")
          } catch (error) {
            console.error("course Error:", error.message);
          }

    }

    const [events, setEvents] = useState([]);

    const fetchProjects = () =>{
        fetch("http://localhost:3000/event/").then(response => response.json()).then(data => setEvents(data.event))
        
      }
    
      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        // console.log(id)
        let currentUser = null;

        if (storedUser) {
        currentUser = JSON.parse(storedUser);
        console.log('Current user:', currentUser);
        } else {
            alert("user not found");
        }
        setCurrentUserType(currentUser.Type_user);
        fetchProjects()
      },[])

//   const fetchProjects = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/batch/");
//       console.log(response)
//       const data = await response.json();
//       setBatch(data);
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   }



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
      <div className="desktop-4-item login_form">
      {/* <button type="submit" onClick={handleSubmit}>Create Batch</button> */}
      {currentUserType==='Admin' && <Link to="/Create_Events" >create events</Link>}
      <br/>
      {events.length > 0 ? (
          <table>
            
            <tbody>
  {events.map((eventItem) => {
    const xid = eventItem._id;
    return <React.Fragment key={xid}>
      <tr>
        <td colSpan="2">{eventItem.name}</td>
        <button style={{ 
          padding: '50px',    // Adjust padding to make the button bigger
          backgroundColor: 'black',  // Set background color to blue
          color: 'white',           // Set text color to white
          border: 'none',           // Remove border
          cursor: 'pointer'         // Add pointer cursor for better usability
        }} onClick={(e) => {console.log(xid);handleRegister(e, xid);}}>Register</button>
      </tr>
      
      
          {/* <td>{course.course}</td> */}
    </React.Fragment>
})}
</tbody>
          </table>
        ) : (
          <p>No projects found.</p>
        )}
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

export default Courses;