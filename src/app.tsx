import "./app.css";
import LeftSection from "./components/page/left-section";
import RightSection from "./components/page/right-section";

function App() {
  return (
    <div className="main">
      <video autoPlay loop playsInline muted>
        <source src="/cloud-movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
