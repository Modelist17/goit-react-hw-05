// NotFoundPage.jsx

import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.box}>
      <div>404</div>
      <div>Not Found Page</div>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFoundPage;
