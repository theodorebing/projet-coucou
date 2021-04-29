import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Field from 'src/components/Field';

const JoinFamilyForm = ({ code, handleJoin, changeField }) => {
  const handleSubmitJoin = (evt) => {
    evt.preventDefault();
    handleJoin();
  };
  return (
    <div className="form__family">
      <h2>Rejoindre une famille !</h2>
      <form method="post" className="form" onSubmit={handleSubmitJoin}>
        <Field
          name="code"
          placeholder="Rentrer le code du groupe ici"
          onChange={changeField}
          value={code}
        />
        <button type="submit" className="indexloginform-button-login">Valider</button>
      </form>
    </div>
  );
};

JoinFamilyForm.propTypes = {
  code: PropTypes.string,
  handleJoin: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
};

JoinFamilyForm.defaultProps = {
  code: '',
};

export default JoinFamilyForm;
