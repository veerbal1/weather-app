import { useEffect } from 'react';
import './app.css';
import LeftSection from './components/page/left-section';
import RightSection from './components/page/right-section';

function App() {
  useEffect(() => {
    fetch('http://localhost:3000/location')
      .then((res) => res.json())
      .then((data) => {
        console.log('Weather API', data);
      });
  }, []);
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
