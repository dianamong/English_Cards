import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Table from "./components/table/Table";
import Game from "./components/Game/Game";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
