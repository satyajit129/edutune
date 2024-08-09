import "../styles/App.css";
import Layout from "./Layout";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from './Pages/Signup';
import Quiz from './Pages/Quiz';
import Result from "./Pages/Result";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Error";
import { AuthProvider } from "./Pages/Auth/AuthContext";
import PrivateRoute from "./Pages/Auth/PrivateRoute";
import 'react-toastify/dist/ReactToastify.css';
import CourseDetails from "./Pages/CourseDetails";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/quiz" element={<PrivateRoute element={<Quiz />} />} />
              <Route path="/result" element={<PrivateRoute element={<Result />} />} />
              <Route path="/course-details/:id" element={<PrivateRoute element={<CourseDetails />} />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
