import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import TemplateDefault from "./templates/TemplateDefault";
import Default from "./templates/Default";
import Users from "./pages/Users";
import RegisterUser from "./pages/RegisterUser";
import EditUsers from "./pages/EditUsers";
import Login from "./pages/Login";



function App() {
  return (
    <div >
      <Router>
        <Default>
          <Routes>
            
            <Route path="/login"  element={<TemplateDefault title="Login" Component={Login}/>}></Route>

            <Route path="/users/editregister/:id"  element={<TemplateDefault title="Edit Users" Component={EditUsers}/>}></Route>

            <Route path="/users/register"  element={<TemplateDefault title="Register Users" Component={RegisterUser}/>}></Route>

            <Route path="/users"  element={<TemplateDefault title="Users" Component={Users}/>}></Route>

            <Route path="/"  element={<TemplateDefault title="Home" Component={Home}/>}></Route>

          </Routes>
        </Default>
      </Router>
    </div>
  );
}

export default App;
