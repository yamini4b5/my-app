import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Logo.png'
import '../Css/Project.css'

const paths = {
  Home: "/",
};

const Show_Course = () => {
  const [batch, setBatch] = useState([]);

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

  const fetchProjects = () =>{
    fetch("http://localhost:3000/batch/").then(response => response.json()).then(data => setBatch(data.batch))
    
  }

  useEffect(() => {
    fetchProjects()
  },[])


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
        {batch.length > 0 ? (
          <table>
            
            <tbody>
  {batch.map((batchItem) => (
    <React.Fragment key={batchItem._id}>
      <tr>
        <th colSpan="2">{batchItem.batch}</th>
      </tr>
      {batchItem.courses.map((course) => (
        <tr key={course._id}>
          <td></td>
          <td>{course.course}</td>
        </tr>
      ))}
    </React.Fragment>
  ))}
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

export default Show_Course;