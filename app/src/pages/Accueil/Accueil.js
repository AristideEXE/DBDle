import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import { survivantPath, tueurPath } from "../../routes";

const Accueil = () => {
  return (
    <div className="w-2/5 flex flex-col space-y-8">
      <Link to={survivantPath}>
        <Button className="w-full">survivant</Button>
      </Link>
      <Link to={tueurPath}>
        <Button className="w-full">tueur</Button>
      </Link>
    </div>
  );
};

export default Accueil;
