import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Table from "./components/table/Table";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
