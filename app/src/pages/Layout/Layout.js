import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import classnames from "classnames";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <div
        class={classnames(styles.backgroundImage, "h-screen overflow-y-hidden")}
      >
        <Header />
        <section className="flex items-center justify-center w-full h-full pb-32">
          <Outlet />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
