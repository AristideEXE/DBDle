import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import * as styles from "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="backgroundImage h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
