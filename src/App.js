import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Table from "./components/table/Table";
import CardMap from "./components/cards/CardMap";

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <CardMap />
      <Footer />
    </div>
  );
}

export default App;
