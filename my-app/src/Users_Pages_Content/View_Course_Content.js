import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../Images/Logo.png';
import '../Css/Project.css';

const paths = {
  Home: "/",
};

const View_Course_Content = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/course");
      const data = await response.json();
      setCourses(data.course);
      console.log(data)
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

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
      <b className="Name-tag">Course Contents:</b>
      <div className="desktop-4-item">
        {courses.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Material</th>
                <th>Batch</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(course => (
                <tr key={course._id}>
                  <td>{course.course}</td>
                  <td>{course.material}</td>
                  <td>{course.batch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No courses found.</p>
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

export default View_Course_Content;
