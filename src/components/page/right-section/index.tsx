import Search from "./components/search";
import style from "./style.module.css";

const RightSection = () => {
  return (
    <div className={`${style.section}`}>
      <Search />
    </div>
  );
};

export default RightSection;
