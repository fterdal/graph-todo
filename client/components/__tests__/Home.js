import React from 'react';
import renderer from 'react-test-renderer';
import { Home } from '../Home';

test('Home renders a simple div', () => {
  const home = renderer.create(
    <Home />,
  );
  let homeTree = home.toJSON();
  expect(homeTree).toMatchSnapshot();
});
