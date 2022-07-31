import PropTypes from 'prop-types';
import s from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label htmlFor="filter" className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.prototype = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
