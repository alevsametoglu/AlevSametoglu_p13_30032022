import MainLayout from "./Layout/MainLayout";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
