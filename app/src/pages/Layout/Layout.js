import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import * as styles from "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="backgroundImage h-screen overflow-y-hidden">
        <Header />
        <div className="flex items-center justify-center w-full h-full pb-32">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
