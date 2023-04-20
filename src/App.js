import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Card from "./components/Card";
import cards from "./assets/scripts/cards";
import Row from "./components/row/Row";
import words from "./utils/words.js";
import Table from "./components/table/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
