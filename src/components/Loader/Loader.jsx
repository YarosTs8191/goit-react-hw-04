import { PuffLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <PuffLoader color="#646cff" />
    </div>
  );
};

export default Loader;
