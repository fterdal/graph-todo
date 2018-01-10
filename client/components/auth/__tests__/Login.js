import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from '../Login';

test('Login renders a form to log in', () => {
  const login = renderer.create(
    <Login />
  );
  let loginTree = login.toJSON();
  expect(loginTree).toMatchSnapshot();
});

test('User can enter in the login fields', () => {
  const login = renderer.create(
    <Login />
  );
  login.find('form').simulate('submit', { preventDefault: jest.fn() })
  let loginTree = login.toJSON();
  console.log('loginTree:', loginTree);
  expect(loginTree).toMatchSnapshot();
});
