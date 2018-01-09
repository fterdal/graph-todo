import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import { Login } from '../Login';

test('Login renders a form to log in', () => {
  const sidebar = renderer.create(
    <Login />
  );
  let sidebarTree = sidebar.toJSON();
  expect(sidebarTree).toMatchSnapshot();
});
