import PropTypes from "prop-types";
import Select from "react-select";
import classnames from "classnames";
import styles from "./CharacterSelect.module.css";

const CharacterSelect = ({
  options,
  getOptionLabel = optionToLabelFunc,
  getOptionValue = optionToValueFunc,
  loadingMessage,
  isClearable = true,
  isSearchable = true,
  isMulti = false,
  autoFocus = true,
  className,
}) => {
  return (
    <Select
      className={classnames(className, styles.characterSelect)}
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      autoFocus={autoFocus}
      isMulti={isMulti}
      isClearable={isClearable}
      isSearchable={isSearchable}
      loadingMessage={loadingMessage}
      unstyled={true}
      styles={{
        menuList: () => ({
          marginTop: "20px",
        }),
        option: () => ({
          padding: "15px",
          border: "1px solid white",
          borderCollapse: "collapse",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }),
      }}
    />
  );
};

const optionToLabelFunc = (option) => option.nom;
const optionToValueFunc = (option) => option.id;

CharacterSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array.isRequired,
  toOptionLabelFunc: PropTypes.func,
  getOptionValue: PropTypes.func,
  loadingMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  autoFocus: PropTypes.bool,
};
export default CharacterSelect;
