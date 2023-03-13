import { Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import "./App.css";
import ErrorPage from "./components/ErrorPage";
import History from "./components/History";
import Members from "./components/Members";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <nav className="flex justify-between mt-8 ">
        <Routes>
          <Route path="/" element={<Title />} />
          <Route path="/History" element={<History />} />
          <Route path="/Members" element={<Members />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Header />
      </nav>
    </div>
  );
}

export default App;
