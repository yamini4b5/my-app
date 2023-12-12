import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Images/Logo.png'
import '../Css/Project.css'
import axios from 'axios';

const paths = {
  Home: "/",
};

const Roles = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Add your logic here to handle the submitted batch value, e.g., send it to an API or perform some action.
    

    // Clear the input field after submission
    // setBatch('');
    // navigate("/Courses")
  }

//   const fetchProjects = useCallback(async () => {
//     try {
//       const response = await fetch("http://localhost:3000/projects");
//       const data = await response.json();
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   }, []);

const handleDelete = async(e,id) => {
    e.preventDefault();
        const response = await axios.delete(
          `http://localhost:3000/user/${id}`
        );
  
        // setUser(response.data.users)
        alert("user deleted")
      
}

const fetchUsers = async() => {
    try {
        const response = await axios.get(
          "http://localhost:3000/user/getAllUsers"
        );
  
        setUser(response.data.users)
        console.log(response)
      } catch (error) {
        console.error("batch Error:", error.message);
      }
}

useEffect(() => {
    fetchUsers()
},[])



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
      {user.map((eventItem) => {
    const xid = eventItem._id;
    return <React.Fragment key={xid}>
      <tr>
        <td colSpan="2">{eventItem.First_name} {eventItem.Last_name}</td>
        <td colSpan="2">{eventItem.email}</td>
        <button style={{ 
          padding: '20px',    // Adjust padding to make the button bigger
          backgroundColor: 'black',  // Set background color to blue
          color: 'white',           // Set text color to white
          border: 'none',           // Remove border
          cursor: 'pointer'         // Add pointer cursor for better usability
        }} onClick={(e) => {console.log(xid);handleDelete(e, xid);}}>Delete</button>
      </tr>
      
      
          {/* <td>{course.course}</td> */}
    </React.Fragment>
})}
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

export default Roles;