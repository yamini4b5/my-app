import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../Images/Logo.png';
import '../Css/Project.css';
import axios from 'axios';


const paths = {
  Home: "/",
};

const userId ='';
const password ='';
const Login_page = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");   
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        {
          email: userId,
          password: password
        }
      );

      const user = response.data.user;

      localStorage.setItem('user', JSON.stringify(user));

      console.log(user);

      // Add logic for navigation or other actions
      if(user.Type_user==="Admin"){
        console.log("yes")
        navigate("/Admin_page");
      }else{
        navigate("/User_page");
      }
      
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

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
      <b className="Name-tag">LOGIN</b>
      <div className="desktop-4-item">
        <div className="login_form">
        <input className="input"
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <button  className ="button" onClick={handleLogin}>Login</button>
      </div>
      <div className="footer-btns">
        <button className="login-new-user" >
          <a href="/reg" target="_blank" rel="noopener noreferrer">
            New User?
          </a>
        </button>
      </div>
      <b className="sweet-water-fortwayne-container">
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne"></p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
        <p className="sweet-water-fortwayne">&nbsp;</p>
      </b>
    </div>
    </div>
  );
};

export default Login_page;
