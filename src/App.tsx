import "./css/App.css";
import { Head } from "./Head";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Head />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
