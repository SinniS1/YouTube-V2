import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Search from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app_page">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
