import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Login } from '../Login';

test('Login renders a form to log in', () => {
  const login = shallow(
    <Login />
  );
  expect(login).toMatchSnapshot();
});

test('User can enter in the login fields', () => {
  const loginMutation = () => {}
  const login = shallow(
    <Login loginMutation={() => { console.log('~~~ login mutation was called! ~~~') }} />
  );
  login.find('#emailField').simulate('change', {
    target: { value: 'hello@world.com' }
  });
  login.find('#passwordField').simulate('change', {
    target: { value: 'secretPassword' }
  });
  expect(login.state().email).toBe('hello@world.com')
  expect(login.state().password).toBe('secretPassword')
  expect(login).toMatchSnapshot();
  login.find('.auth-button').simulate('click')
  expect(login).toMatchSnapshot();
});
