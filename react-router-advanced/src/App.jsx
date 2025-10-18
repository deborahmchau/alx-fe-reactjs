import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Post from "./components/Post";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <AuthProvider>
      <Router>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
