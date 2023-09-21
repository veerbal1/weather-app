import style from "./style.module.css";

const LeftSection = () => {
  return (
    <div className={style.section}>
      <h4 className="text-4xl text-white">SinghSky</h4>
      <div className="flex items-end text-white gap-2">
        <h1 className="text-9xl text-white ">28°</h1>
        <div>
          <h2>Chandigarh</h2>
          <h4>11:14 - Sunday, 27 Aug '23</h4>
        </div>
        <div>
          <img src="/cloud-icon.png" alt="Cloud Icon" />
          <h4>Cloudy</h4>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
