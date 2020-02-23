import React, { useState, useEffect } from 'react';
import Input from './Input';
import Section from './Section';
import Container from './Container';

function LoginForm({
  children,
  setIsActive = () => {},
  handleLogin = () => {},
  ...props
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [usernameIsPristine, setUsernameIsPristine] = useState(true);
  const [passwordIsPristine, setPasswordIsPristine] = useState(true);
  const [usernameIsAttemptedOnce, setUsernameIsAttemptedOnce] = useState(false);
  const [passwordIsAttemptedOnce, setPasswordIsAttemptedOnce] = useState(false);
  const [minUsernameLength] = useState(3);
  const [minPasswordLength] = useState(8);

  useEffect(() => {
    typeof username !== 'undefined' &&
    username !== null &&
    username.length >= minUsernameLength
      ? setUsernameIsValid(true)
      : setUsernameIsValid(false);

    typeof password !== 'undefined' &&
    password !== null &&
    password.length >= minPasswordLength
      ? setPasswordIsValid(true)
      : setPasswordIsValid(false);
  }, [username, password]);

  const errorMessages = {
    username: 'The username must at least be 3 characters long',
    password: 'The password must at least be 8 characters long',
  };

  return (
    <Section>
      <Container className="box">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Username</label>
          </div>
          <div class="field-body is-block">
            <div class="field">
              <p class="control is-expanded">
                <Input
                  placeholder="Type your username"
                  setValue={setUsername}
                  setIsAttemptedOnce={setUsernameIsAttemptedOnce}
                  isAttemptedOnce={usernameIsAttemptedOnce}
                  minLength={minUsernameLength}
                />
              </p>
            </div>
            {!usernameIsValid && usernameIsAttemptedOnce && (
              <p class="help is-danger">{errorMessages.username}</p>
            )}
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Password</label>
          </div>
          <div class="field-body is-block">
            <div class="field">
              <p class="control is-expanded ">
                <Input
                  type="password"
                  placeholder="Type your password"
                  setValue={setPassword}
                  setIsAttemptedOnce={setPasswordIsAttemptedOnce}
                  isAttemptedOnce={passwordIsAttemptedOnce}
                  minLength={minPasswordLength}
                />
              </p>
            </div>
            {!passwordIsValid && passwordIsAttemptedOnce && (
              <p class="help is-danger">{errorMessages.password}</p>
            )}
          </div>
        </div>

        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <a
              class="button is-primary"
              // onClick={async () =>
              //   await Promise.resolve(validateForm()).then(() =>
              //     handleLogin({ username, password })
              //   )
              // }
              onClick={() => handleLogin({ username, password })}
            >
              Login
            </a>
          </p>
          <p class="control">
            <a class="button is-light" onClick={() => setIsActive(false)}>
              Cancel
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default LoginForm;
