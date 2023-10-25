import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { classiquePath } from "../../routes";

const Accueil = () => {
  return (
    <>
        <Link to={classiquePath}>
            <Button>Classique</Button>
        </Link>
    </>
  );
};

export default Accueil;
