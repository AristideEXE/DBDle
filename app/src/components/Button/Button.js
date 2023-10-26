import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Button.module.css";

const Button = ({ className, children }) => {
  return (
    <button className={classnames(styles.button, className)}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
