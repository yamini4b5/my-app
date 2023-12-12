import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Images/Logo.png'
import '../Css/Project.css'
import axios from 'axios';

const paths = {
  Home: "/",
};

const Create_Courses = () => {
  const [projects, setProjects] = useState([]);
  const [course, setCourse] = useState('');
  const [material, setMaterial] = useState('');
  const [batch, setBatch] = useState('');
  const navigate = useNavigate();

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Add your logic here to handle the submitted batch value, e.g., send it to an API or perform some action.
    try {
        const response = await axios.post(
          "http://localhost:3000/course/create",
          {
            course: course,
            material: material,
            batch: batch
          }
        );
  
        
        navigate("/Courses")
      } catch (error) {
        console.error("course Error:", error.message);
      }

    // Clear the input field after submission
    setCourse('');
    setMaterial('');
    setBatch('');
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

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

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
      <form onSubmit={(e) => handleSubmit(e)} className="login_form">
      <label>
        Course Name:
        <input
          type="text"
          value={course}
          onChange={(e) => handleCourseChange(e)}
          placeholder="Enter Course Name..."
          style={{zIndex: 100}}
        />
      </label>
      <label>
        Course Material:
        <input
          type="text"
          value={material}
          onChange={(e) => handleMaterialChange(e)}
          placeholder="Enter Course Material..."
          style={{zIndex: 100}}
        />
      </label>
      <label>
        Course Batch:
        <input
          type="text"
          value={batch}
          onChange={(e) => handleBatchChange(e)}
          placeholder="Enter Course Batch..."
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

export default Create_Courses;