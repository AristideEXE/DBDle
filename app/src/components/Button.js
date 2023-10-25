import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({className, children}) => {
    return (
        <button className={classnames(className, "bg-slate-500/50 p-4")}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default Button;