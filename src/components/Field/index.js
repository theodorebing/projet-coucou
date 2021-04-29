import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  className,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;
  return (

    <div className="field">
      <input
        id={inputId}
        value={value}
        onChange={handleChange}
        type={type}
        className={`${className} indexloginform-input`}
        placeholder={placeholder}
        name={name}
      />
    </div>

  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
