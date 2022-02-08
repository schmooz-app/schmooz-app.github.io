import "./css/App.css";
import { Head } from "./Head";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ColorString } from "./ColorPalette";

function App() {
  return (
    <div className="App">
      <Head />
      <Header />
      <div
        className="text-medium hide-mobile"
        style={{
          color: ColorString.white,
          paddingLeft: "5%",
          marginTop: "10%",
          paddingBottom: "25%",
        }}
      >
        <p>Don’t hit snooze. Hit Schmooz.</p>
        <p> Time well spent.</p>
      </div>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
