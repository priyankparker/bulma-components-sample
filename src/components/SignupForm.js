import React, { useState, useEffect } from 'react';
import Input from './Input';
import useDebounce from '../scenes/Utils/useDebounce';
import fetch from 'node-fetch';
import Section from './Section';
import Container from './Container';
import { LightDangerNotification } from './Notification';

function SignupForm({ children, setIsActive = () => {}, ...props }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  // const [username, setUsername] = useDebounce('', 3000);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [rePasswordIsValid, setRePasswordIsValid] = useState(true);
  const [usernameIsAttemptedOnce, setUsernameIsAttemptedOnce] = useState(false);
  const [passwordIsAttemptedOnce, setPasswordIsAttemptedOnce] = useState(false);
  const [rePasswordIsAttemptedOnce, setRePasswordIsAttemptedOnce] = useState(
    false
  );
  const [minUsernameLength] = useState(3);
  const [minPasswordLength] = useState(8);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordHelpText, setPasswordHelpText] = useState(<></>);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [usernameExists, setUsernameExists] = useState(false);
  const [formError, setFormError] = useState(null);

  function validateUsername(username) {
    typeof username !== 'undefined' && username !== null && username.length >= 3
      ? setUsernameIsValid(true)
      : setUsernameIsValid(false);
  }

  function validatePasswords(password, rePassword) {
    typeof password !== 'undefined' &&
    password !== null &&
    password.length >= minPasswordLength
      ? setPasswordIsValid(true)
      : setPasswordIsValid(false);

    typeof rePassword !== 'undefined' &&
    rePassword !== null &&
    rePassword.length >= minPasswordLength
      ? setRePasswordIsValid(true)
      : setRePasswordIsValid(false);

    password !== rePassword
      ? setPasswordsMatch(false)
      : setPasswordsMatch(true);
  }
  useEffect(() => {
    validateUsername(username);
    validatePasswords(password, rePassword);
  }, [username, password, rePassword]);

  const errorMessages = {
    username: 'This username must be at least 3 characters long',
    usernameExists: 'This username already exists',
    passwordLen: 'These passwords must at least be 8 characters long',
    passwordsMismatch: 'The passwords do not match',
    formError: 'Please correct the information provided below',
  };

  const messages = {
    usernameAvailable: 'This username is available',
    passwordsMatch: 'These passwords match'
  };

  useEffect(() => {
    const wrap = (msg = '', error = false) => (
      <p className={`help ${error === true ? 'is-danger' : 'is-success'}`}>
        {msg}
      </p>
    );

    if (passwordIsAttemptedOnce && rePasswordIsAttemptedOnce) {
      if (!passwordIsValid || !rePasswordIsValid) {
        setPasswordHelpText(wrap(errorMessages.passwordLen, true));
      } else if (passwordsMatch === false) {
        setPasswordHelpText(wrap(errorMessages.passwordsMismatch, true));
      } else {
        setPasswordHelpText(wrap(messages.passwordsMatch))
      }
    }
  }, [
    passwordIsAttemptedOnce,
    rePasswordIsAttemptedOnce,
    passwordIsValid,
    rePasswordIsValid,
    passwordsMatch,
  ]);

  useEffect(() => {
    Promise.resolve(setCheckingUsername(true))
      .then(() =>
        fetch('http://localhost:3001/checkUsername', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
          }),
        })
      ) // todo
      .then(r => r.json())
      .then(r => {
        if (r?.error === true && typeof r?.error?.msg === 'string') {
          setFormError(r.error.msg);
          return;
        }

        r?.userExists === true
          ? setUsernameExists(true)
          : setUsernameExists(false);
      })
      .then(setCheckingUsername(false))
      .catch(err => console.log(err));
  }, [username]);

  const formIsValid =
    usernameIsValid && passwordIsValid && passwordsMatch && !usernameExists;

  function dirtyInputs() {
    setUsernameIsAttemptedOnce(true);
    setPasswordIsAttemptedOnce(true);
    setRePasswordIsAttemptedOnce(true);
  }

  function validateForm() {
    dirtyInputs();

    if (formIsValid) {
      setFormError(null);
    } else {
      setFormError(errorMessages.formError);
    }
  }
  return (
    <>
      {formError && (
        <Section>
            <LightDangerNotification>{formError}</LightDangerNotification>
        </Section>
      )}
      <Section {...props}>
        <Container className="box">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded ">
                  <Input placeholder="First Name" setValue={setFirstName} />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded  ">
                  <Input placeholder="Last Name" setValue={setLastName} />
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Username</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded">
                  <Input
                    placeholder="Choose your username"
                    setValue={setUsername}
                    setIsAttemptedOnce={setUsernameIsAttemptedOnce}
                    isAttemptedOnce={usernameIsAttemptedOnce}
                    minLength={minUsernameLength}
                    className={
                      usernameIsAttemptedOnce &&
                      (((usernameExists || !usernameIsValid) && 'is-danger') ||
                        'is-success')
                    }
                  />
                </p>
              </div>
              {usernameIsAttemptedOnce && (usernameExists || !usernameIsValid) && (
                <p className="help is-danger">
                  {usernameExists && errorMessages.usernameExists}
                  {!usernameIsValid && errorMessages.username}
                </p>
              )}
              {usernameIsAttemptedOnce &&
                !usernameExists &&
                usernameIsValid && (
                  <p className="help is-success">
                    {messages.usernameAvailable}
                  </p>
                )}
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Password</label>
            </div>
            <div className="field-body">
              <div className="field">
                <p className="control is-expanded ">
                  <Input
                    type="password"
                    placeholder="Type your password"
                    setValue={setPassword}
                    setIsAttemptedOnce={setPasswordIsAttemptedOnce}
                    isAttemptedOnce={passwordIsAttemptedOnce}
                    minLength={minPasswordLength}
                    className={
                      passwordIsAttemptedOnce &&
                      (((!passwordIsValid || !passwordsMatch) && 'is-danger') ||
                        'is-success')
                    }
                  />
                </p>
              </div>
              <div className="field">
                <p className="control is-expanded ">
                  <Input
                    type="password"
                    placeholder="Re-type your password"
                    setValue={setRePassword}
                    setIsAttemptedOnce={setRePasswordIsAttemptedOnce}
                    isAttemptedOnce={rePasswordIsAttemptedOnce}
                    minLength={minPasswordLength}
                    className={
                      rePasswordIsAttemptedOnce &&
                      (((!rePasswordIsValid || !passwordsMatch) &&
                        'is-danger') ||
                        'is-success')
                    }
                  />
                </p>
              </div>
              {passwordHelpText}
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <a className="button is-primary" onClick={validateForm}>
                Submit
              </a>
            </p>
            <p className="control">
              <a className="button is-light" onClick={() => setIsActive(false)}>
                Cancel
              </a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default SignupForm;
