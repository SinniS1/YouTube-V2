import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
          <Main />
      </div>
    </div>
  );
}

export default App;
