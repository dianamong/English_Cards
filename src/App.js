import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Game from "./components/Game/Game";
import NoMatch from "./components/NoMatch/NoMatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<Table />}></Route>
          <Route exact path="/words" element={<Table />}></Route>
          <Route exact path="/game" element={<Game />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;.1\