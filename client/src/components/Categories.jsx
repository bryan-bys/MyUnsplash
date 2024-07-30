import artImg from "../assets/david.jpg";
import selva from "../assets/selva.jpg";
import abstracto from "../assets/abstracto.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="categories-container">
        <Link to="/art">
          <p>ART</p>
          <img src={artImg} />
        </Link>
        <Link to="/nature">
          <p>NATURE</p>
          <img src={selva} />
        </Link>
        <Link to="/abstract">
          <p>ABSTRACT</p>
          <img src={abstracto} />
        </Link>
      </div>
    </>
  );
};

export default Categories;
