import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextArea = ({
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

  const inputId = `textarea-${name}`;
  return (

    <div className="textarea">
      <textarea
        id={inputId}
        value={value}
        onChange={handleChange}
        type={type}
        className={`${className} indexloginform-textarea`}
        placeholder={placeholder}
        name={name}
      />
    </div>

  );
};

TextArea.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TextArea.defaultProps = {
  value: '',
  type: 'text',
  className: '',
};

export default TextArea;
