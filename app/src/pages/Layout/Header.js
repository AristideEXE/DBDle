import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-10 text-center w-100 text-white">
      <Link to="/" className="font-['DeadByDaylight'] text-7xl">
        DBDle
      </Link>
    </div>
  );
};

export default Header;
