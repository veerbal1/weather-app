import "./app.css";
import LeftSection from "./components/page/left-section";
import RightSection from "./components/page/right-section";

function App() {
  return (
    <div className="main">
      <video src="./cloud-movie.mp4" autoPlay loop controls></video>
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
