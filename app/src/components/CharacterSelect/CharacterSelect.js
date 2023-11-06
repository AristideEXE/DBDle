import PropTypes from "prop-types";
import Select from "react-select";

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
      options={options}
      getOptionLabel={getOptionLabel}
      getOptionValue={getOptionValue}
      autoFocus={autoFocus}
      isMulti={isMulti}
      isClearable={isClearable}
      isSearchable={isSearchable}
      loadingMessage={loadingMessage}
    />
  );
};

const optionToLabelFunc = (option) => option.nom;
const optionToValueFunc = (option) => option.id;

CharacterSelect.propTypes = {
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
