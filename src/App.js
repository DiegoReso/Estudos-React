import Home from "./pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import TemplateDefault from "./templates/TemplateDefault";

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/"  element={<TemplateDefault title="Home" Component={Home}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
