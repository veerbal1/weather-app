import style from "./style.module.css";

const LeftSection = () => {
  return (
    <div className={style.section}>
      <h4 className={style.brandName}>SinghSky</h4>
      <div className={style.temperatureSection}>
        <h1 className={style.temperature}>28°</h1>
        <div className={style.locationSTime}>
          <h2>Chandigarh</h2>
          <h4>11:14 - Sunday, 27 Aug '23</h4>
        </div>
        <div className={style.weatherIcon}>
          <img src="/cloud-icon.png" alt="Cloud Icon" />
          <h4>Cloudy</h4>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
