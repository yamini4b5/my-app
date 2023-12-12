import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Userpages/Home';
import Projects from './Userpages/Project'
import UniversityCollab from './Userpages/UniversityCollab';
import IndustryCollab from './Userpages/IndustryCollab';
import Registration from './Registration/Registration';
import Login_page from './Login/Login_page';
import User_page from './Userpages/User_Page';
import View_Course_Content from './Users_Pages_Content/View_Course_Content';
import Schedule_Appointment from './Users_Pages_Content/Schedule_Appointment';
import Cancel_Appointment from './Users_Pages_Content/Cancel_Appointment';
import Events from './Adminpages/Events';
import Admin_page from './Adminpages/Admin_page';
import Create_Batch from './Adminpages/Create_Batch';
import Create_Courses from './Adminpages/Create_Courses';
import Show_Course from './Adminpages/Show_Course';
import Courses from './Adminpages/Courses';
import Create_Events from './Adminpages/Create_Events';
import Roles from './Adminpages/Roles'


function App() {
  const [currentUserType, setCurrentUserType] = React.useState('')
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
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-projects" element={<Projects />} />
          <Route path="/universities-professors-collab" element={<UniversityCollab />} />
          <Route path="/industry-collaborations" element={<IndustryCollab />} />
          <Route path="/career-counselling-services" element={<IndustryCollab />} />
          
          <Route path="/Reg" element={<Registration />} />
          <Route path="/Login" element={<Login_page />} />
          <Route path="/User_page" element={<User_page />} />
          <Route path="/schedule-appointment" element={<Schedule_Appointment />} />
          <Route path="/view-course-content" element={<View_Course_Content />} />
          <Route path="/cancel-appointment" element={<Cancel_Appointment />} />
          <Route path="/events" element={<Events />} />
          
          <Route path="/Admin_page" element={<Admin_page />} />
          <Route path="/Create_Batch" element={<Create_Batch />} />
          <Route path="/Create_Courses" element={<Create_Courses />} />
          <Route path="/Show_Course" element={<Show_Course />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Create_Events" element={<Create_Events />} />
          {currentUserType==='Admin' && <Route path="/role" element={<Roles />} />}
          {/* Add more routes for other components/pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;