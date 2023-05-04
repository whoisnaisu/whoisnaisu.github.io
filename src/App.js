import "./assets/css/App.css"
import HeaderSection from "./components/section1";
import DetailSection from "./components/section2";
import FooterSection from "./components/section3";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <DetailSection />
      <FooterSection />
    </div>
  );
}

export default App;
