import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <div className="p-10 text-center w-100 text-white">
      <Link to="/" className="font-['DeadByDaylight'] text-7xl">
        DBDle
      </Link>
      <button
        className="mx-2 w-12"
        onClick={() => {
          i18n.changeLanguage("fr");
        }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/langfr-225px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png" />
      </button>
      <button
        className="mx-2 w-12"
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" />
      </button>
    </div>
  );
};

export default Header;
