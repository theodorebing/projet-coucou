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
    console.log("j'appuye sur une touche", evt.target.value, name)
  };

  const inputId = `field-${name}`;
  return (

    <div className="field">
      <input
        id={inputId}
        value={value}
        onChange={handleChange}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
      />
    </div>

  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
