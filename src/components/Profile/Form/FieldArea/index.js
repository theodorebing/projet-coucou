import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FieldArea = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  className,
  label
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
    console.log("j'appuye sur une touche", evt.target.value, name)
  };

  const inputId = `field-${name}`;
  return (

    <div className="field">
      <label htmlFor={inputId}>{label}</label>
      <textarea
        id={inputId}
        value={value}
        onChange={handleChange}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
      ></textarea>
    </div>

  );
};

FieldArea.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

FieldArea.defaultProps = {
  value: '',
  type: 'text',
};

export default FieldArea;