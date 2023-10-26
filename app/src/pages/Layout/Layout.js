import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import classnames from "classnames";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Header />
        <section className="flex items-center justify-center">
          <Outlet />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
